#!/usr/bin/env node
/**
 * build-okf.mjs — compile the OKF source bundle (knowledge/) into version-pinned, SHARDED,
 * queryable artifacts under public/okf/<version>/.
 *
 * This is a "prepare" job: run on demand, NOT a continuous process. It freezes a reproducible
 * snapshot of the catalog that the Next.js app and the Gym MCP server read.
 *
 * Scalable artifact shape (designed to grow 100x+ without bloating any single fetch):
 *   meta.json              small — version, counts, generatedAt
 *   index.json             light — one record per concept (NO body): key, type, title, slug,
 *                          a curated frontmatter subset, and links. This is what list/catalog
 *                          views and the MCP server load into memory.
 *   concepts/<key>.json    full — the complete node incl. markdown body. Fetched per detail page.
 *
 * Zero dependencies (Node >= 18, ESM). Validation: every concept needs `type`; cross-links must
 * resolve; reports orphans + unknown types + missing recommended fields. Exits non-zero on hard
 * errors so it can gate the build.
 */
import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join, relative, dirname, resolve, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const KNOWLEDGE = join(ROOT, 'knowledge');

/** Known concept types and their recommended (advisory) fields. `type` itself is always required. */
const TYPE_REGISTRY = {
  University: ['title', 'catalogVersion'],
  School: ['title', 'code'],
  Department: ['title', 'code', 'school'],
  Course: ['title', 'code', 'level', 'credits', 'school', 'department'],
  TrainingEnvironment: ['title', 'id'],
  Benchmark: ['title', 'id', 'passThreshold'],
  Skill: ['title', 'id'],
  Curriculum: ['title', 'id'],
  Certification: ['title', 'id', 'level'],
  Lesson: ['title', 'id', 'domain', 'insight', 'evidence', 'source', 'confidence', 'appliesTo', 'applyCount'],
  Index: ['title'],
};

/** Frontmatter fields promoted into the light index (kept small + predictable). */
const INDEX_FIELDS = [
  'code', 'level', 'credits', 'prerequisites', 'school', 'department', 'id',
  'level', 'passThreshold', 'environment', 'benchmark', 'skills', 'requiredCourses',
  'requiredSkills', 'tags', 'catalogVersion', 'status',
  'domain', 'insight', 'evidence', 'source', 'confidence', 'appliesTo', 'applyCount', 'avgValue', 'recentOutcomes',
];

// ---------- parsing ----------
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (name.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return { data: null, body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { data: null, body: raw };
  const fmBlock = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, '');
  const data = {};
  for (const line of fmBlock.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((s) => coerce(s.trim())).filter((s) => s !== '');
    } else {
      val = coerce(val);
    }
    data[key] = val;
  }
  return { data, body };
}

function coerce(s) {
  if (s === '') return '';
  const unq = s.replace(/^["']|["']$/g, '');
  if (unq !== s) return unq;
  if (/^-?\d+$/.test(s)) return Number(s);
  if (/^-?\d+\.\d+$/.test(s)) return Number(s);
  if (s === 'true') return true;
  if (s === 'false') return false;
  return unq;
}

function extractLinks(body, fromAbsDir) {
  const links = [];
  const re = /\]\(([^)\s]+\.md)(?:#[^)]*)?\)/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const target = m[1];
    if (/^https?:/.test(target)) continue;
    links.push(relKey(resolve(fromAbsDir, target)));
  }
  return links;
}

const relKey = (abs) => posix.normalize(relative(KNOWLEDGE, abs).split('\\').join('/'));
/** Stable, filesystem-safe id for a concept key. */
const safeId = (key) => key.replace(/\.md$/, '').replace(/\//g, '__');
/** URL slug: prefer `code` (lowercased) else last path segment. */
const slugFor = (data, key) =>
  String(data.code ?? key.split('/').pop().replace(/\.md$/, '')).toLowerCase();

// ---------- build ----------
const files = walk(KNOWLEDGE);
const nodes = {};
const errors = [];
const warnings = [];

for (const file of files) {
  const key = relKey(file);
  const raw = readFileSync(file, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const base = key.split('/').pop();
  if (!data) {
    if (base !== 'README.md' && base !== 'log.md') warnings.push(`No frontmatter (skipped): ${key}`);
    continue;
  }
  if (!data.type) errors.push(`Missing required \`type\` field: ${key}`);
  if (data.type && !TYPE_REGISTRY[data.type]) warnings.push(`Unknown concept type "${data.type}": ${key}`);
  for (const rec of TYPE_REGISTRY[data.type] ?? [])
    if (data[rec] === undefined) warnings.push(`Missing recommended field "${rec}" on ${data.type}: ${key}`);

  nodes[key] = {
    key,
    id: safeId(key),
    slug: slugFor(data, key),
    type: data.type ?? 'Unknown',
    title: data.title ?? base,
    frontmatter: data,
    links: extractLinks(body, dirname(file)),
    body,
  };
}

// cross-link resolution
for (const node of Object.values(nodes))
  for (const target of node.links)
    if (!nodes[target] && !target.endsWith('README.md'))
      errors.push(`Broken link: ${node.key} → ${target}`);

// orphan detection
const inbound = Object.fromEntries(Object.keys(nodes).map((k) => [k, 0]));
for (const node of Object.values(nodes))
  for (const t of node.links) if (inbound[t] !== undefined) inbound[t] += 1;
for (const node of Object.values(nodes))
  if (inbound[node.key] === 0 && node.type !== 'University' && node.type !== 'Index')
    warnings.push(`Orphan concept (no inbound links): ${node.key}`);

// duplicate slug detection within a type (would break routing)
const slugSeen = {};
for (const node of Object.values(nodes)) {
  const sk = `${node.type}:${node.slug}`;
  if (slugSeen[sk]) errors.push(`Duplicate ${node.type} slug "${node.slug}": ${slugSeen[sk]} & ${node.key}`);
  else slugSeen[sk] = node.key;
}

const version =
  Object.values(nodes).find((n) => n.type === 'University')?.frontmatter.catalogVersion ?? 'v0.1';

// ---------- report ----------
for (const w of warnings) console.warn(`⚠️  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`❌ ${e}`);
  console.error(`\nOKF build FAILED: ${errors.length} error(s).`);
  process.exit(1);
}

// ---------- emit sharded artifacts ----------
const byType = {};
for (const n of Object.values(nodes)) (byType[n.type] ??= []).push(n.key);
const counts = Object.fromEntries(Object.entries(byType).map(([t, a]) => [t, a.length]));

const outDir = join(ROOT, 'public', 'okf', version);
const conceptsDir = join(outDir, 'concepts');
if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true }); // deterministic rebuild
mkdirSync(conceptsDir, { recursive: true });

const meta = { okfVersion: '0.1', catalogVersion: version, generatedAt: new Date().toISOString(), conceptCount: Object.keys(nodes).length, counts };

const index = Object.values(nodes).map((n) => {
  const fm = {};
  for (const f of INDEX_FIELDS) if (n.frontmatter[f] !== undefined) fm[f] = n.frontmatter[f];
  return { key: n.key, id: n.id, slug: n.slug, type: n.type, title: n.title, description: n.frontmatter.description ?? '', links: n.links, fm };
});

writeFileSync(join(outDir, 'meta.json'), JSON.stringify(meta, null, 2));
writeFileSync(join(outDir, 'index.json'), JSON.stringify(index, null, 2));
for (const n of Object.values(nodes))
  writeFileSync(join(conceptsDir, `${n.id}.json`), JSON.stringify(n, null, 2));

mkdirSync(join(ROOT, 'public', 'okf'), { recursive: true });
writeFileSync(join(ROOT, 'public', 'okf', 'latest.json'), JSON.stringify({ version }, null, 2));

console.log(
  `✅ OKF ${version} built: ${Object.keys(nodes).length} concepts ` +
    `(${Object.entries(counts).map(([t, c]) => `${t}:${c}`).join(', ')})\n` +
    `   → public/okf/${version}/{meta,index}.json + concepts/*.json` +
    (warnings.length ? `  (${warnings.length} warning(s))` : '')
);
