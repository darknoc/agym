#!/usr/bin/env node
/**
 * build-config.mjs — derive version-pinned app/catalog/modes config from the compiled OKF graph.
 *
 * Runs AFTER build-okf.mjs (consumes public/okf/<version>/{index,meta}.json) and emits small,
 * stable JSON the app reads without re-deriving from the full graph. A "prepare" job — frozen,
 * not live.
 *
 * Outputs:
 *   public/config/<version>/app.config.json      app identity, nav, feature flags
 *   public/config/<version>/catalog.config.json  per-school summary (counts, cert tracks)
 *   public/config/<version>/modes.config.json    operating modes (browse/train/certify)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OKF = join(ROOT, 'public', 'okf');
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

const version = readJson(join(OKF, 'latest.json')).version;
const meta = readJson(join(OKF, version, 'meta.json'));
const index = readJson(join(OKF, version, 'index.json'));

const byType = (t) => index.filter((n) => n.type === t);

const catalog = {
  version,
  okfVersion: meta.okfVersion,
  generatedAt: meta.generatedAt,
  totals: meta.counts,
  schools: byType('School')
    .map((s) => {
      const code = String(s.fm.code ?? '');
      const courses = byType('Course').filter((c) => c.fm.school === code);
      const certs = byType('Certification').filter((c) =>
        ((c.fm.requiredCourses ?? []).some((rc) => String(rc).startsWith(code)))
      );
      return {
        code,
        slug: s.slug,
        title: s.title,
        description: s.description,
        departmentCount: byType('Department').filter((d) => d.fm.school === code).length,
        courseCount: courses.length,
        certifications: certs.map((c) => ({ slug: c.slug, title: c.title, level: String(c.fm.level ?? '') })),
      };
    })
    .sort((a, b) => (a.code === 'AGENG' ? -1 : b.code === 'AGENG' ? 1 : a.code.localeCompare(b.code))),
};

const app = {
  name: 'agym.ai',
  title: 'Agentic Gym University',
  tagline: 'Where AI agents train and are certified for autonomous telecom network operations.',
  catalogVersion: version,
  university: { issuer: 'agun.ai', issuerUrl: 'https://agun.ai' },
  nav: [
    { label: 'Catalog', href: '/catalog' },
    { label: 'Training Gym', href: '/' },
  ],
  features: {
    catalog: true,
    benchmarks: false, // Phase 3
    leaderboards: false, // Phase 3
    mcp: false, // Phase 2
    okfGraphVisualizer: false, // Phase 4
  },
};

const modes = {
  version,
  modes: [
    { id: 'browse', label: 'Browse', description: 'Explore the catalog of schools, courses, and certifications.', enabled: true },
    { id: 'train', label: 'Train', description: 'Run an agent against a course training environment.', enabled: true, phase: 5 },
    { id: 'certify', label: 'Certify', description: 'Sit a benchmark; earn an agun.ai certification.', enabled: true, phase: 3 },
  ],
};

// ── environment bindings: join OKF TrainingEnvironment concepts → real sims + MCP toolsets ──
const simRegistry = readJson(join(ROOT, 'data-src', 'sims.json')).sims;
const envBindings = readJson(join(ROOT, 'data-src', 'environments.json')).environments;
const courses = byType('Course');

const environments = Object.entries(envBindings).map(([id, binding]) => {
  const concept = byType('TrainingEnvironment').find((n) => String(n.fm.id) === id);
  const sims = (binding.sims ?? []).map((sid) => {
    const s = simRegistry[sid];
    const envUrl = process.env[`NEXT_PUBLIC_SIM_${sid.toUpperCase().replace(/-/g, '_')}_URL`] || null;
    return s ? { id: sid, name: s.name, blurb: s.blurb, repo: s.repo, url: envUrl ?? s.url } : { id: sid, name: sid, blurb: '', repo: null, url: envUrl };
  });
  const usedBy = courses.filter((c) => String(c.fm.environment) === id).map((c) => ({ code: c.fm.code, slug: c.slug, title: c.title }));
  return {
    id,
    title: concept?.title ?? id,
    slug: concept?.slug ?? id,
    description: concept?.description ?? '',
    note: binding.note ?? null,
    sims,
    mcps: binding.mcps ?? [],
    courses: usedBy,
  };
});

// ── certification descriptors: OKF Certification → agun.ai department mapping (Phase 6) ──
const agunMap = readJson(join(ROOT, 'data-src', 'agun-map.json')).schools;
const certifications = byType('Certification').map((c) => {
  const req = (c.fm.requiredCourses ?? []).map(String);
  const school = req[0] ? req[0].split('-')[0] : '';
  const agun = agunMap[school] ?? { department: 'general', label: 'General' };
  return {
    id: String(c.fm.id ?? c.slug),
    slug: c.slug,
    title: c.title,
    level: String(c.fm.level ?? ''),
    school,
    agunDepartment: agun.department,
    agunLabel: agun.label,
    requiredCourses: req,
    requiredSkills: (c.fm.requiredSkills ?? []).map(String),
    benchmark: c.fm.benchmark ? String(c.fm.benchmark) : null,
    description: c.description ?? '',
  };
});

const outDir = join(ROOT, 'public', 'config', version);
if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'app.config.json'), JSON.stringify(app, null, 2));
writeFileSync(join(outDir, 'catalog.config.json'), JSON.stringify(catalog, null, 2));
writeFileSync(join(outDir, 'modes.config.json'), JSON.stringify(modes, null, 2));
writeFileSync(join(outDir, 'environments.config.json'), JSON.stringify({ version, environments }, null, 2));
writeFileSync(join(outDir, 'certifications.config.json'), JSON.stringify({ version, certifications }, null, 2));

console.log(
  `✅ config ${version} built: app + catalog (${catalog.schools.length} schools) + modes + environments (${environments.length}) + certifications (${certifications.length}) → public/config/${version}/`
);
