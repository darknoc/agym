#!/usr/bin/env node
/**
 * build-benchmarks.mjs — validate benchmark fixtures and freeze them to a version-pinned artifact.
 *
 * Reads data-src/benchmarks/*.json, validates each against the four-layer rubric model, cross-checks
 * that each benchmark id exists as an OKF `Benchmark` concept, and writes:
 *   public/data/<version>/benchmarks/<id>.json   frozen fixture
 *   public/data/<version>/benchmarks/index.json  light list
 *   public/data/<version>/leaderboards/<id>.json seed leaderboard (sample runs)
 *
 * A "prepare" job — runs after build-okf. Zero dependencies. Exits non-zero on hard errors.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "data-src", "benchmarks");
const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));

const LAYERS = ["commandCorrectness", "situationalAppropriateness", "anticipatedImpact", "doilCompliance"];

const version = readJson(join(ROOT, "public", "okf", "latest.json")).version;
const okfIndex = readJson(join(ROOT, "public", "okf", version, "index.json"));
const okfBenchmarkIds = new Set(okfIndex.filter((n) => n.type === "Benchmark").map((n) => String(n.fm.id)));

const errors = [];
const warnings = [];
const benchmarks = [];

if (!existsSync(SRC)) { console.error(`❌ Missing ${SRC}`); process.exit(1); }

for (const file of readdirSync(SRC).filter((f) => f.endsWith(".json"))) {
  const b = readJson(join(SRC, file));
  const where = `benchmarks/${file}`;
  if (`${b.id}.json` !== file) errors.push(`${where}: id "${b.id}" must match filename.`);
  if (typeof b.passThreshold !== "number" || b.passThreshold < 0 || b.passThreshold > 100)
    errors.push(`${where}: passThreshold must be 0..100.`);
  // rubric
  const rk = Object.keys(b.rubric ?? {});
  if (rk.length !== 4 || !LAYERS.every((l) => l in b.rubric)) errors.push(`${where}: rubric must have exactly the 4 layers ${LAYERS.join(", ")}.`);
  const sum = LAYERS.reduce((a, l) => a + (b.rubric?.[l] ?? 0), 0);
  if (Math.abs(sum - 1) > 0.01) errors.push(`${where}: rubric weights must sum to 1 (got ${sum.toFixed(3)}).`);
  // tasks
  if (!Array.isArray(b.tasks) || b.tasks.length === 0) errors.push(`${where}: tasks must be a non-empty array.`);
  const taskIds = new Set();
  for (const t of b.tasks ?? []) {
    if (!t.id || taskIds.has(t.id)) errors.push(`${where}: duplicate/missing task id "${t.id}".`);
    taskIds.add(t.id);
    if (!LAYERS.includes(t.layer)) errors.push(`${where}: task ${t.id} has invalid layer "${t.layer}".`);
    if (typeof t.maxScore !== "number") errors.push(`${where}: task ${t.id} missing numeric maxScore.`);
  }
  // every layer should have at least one task (else it silently scores 0)
  for (const l of LAYERS) if (!(b.tasks ?? []).some((t) => t.layer === l)) warnings.push(`${where}: no task measures layer "${l}".`);
  // cross-ref OKF
  if (!okfBenchmarkIds.has(b.id)) warnings.push(`${where}: no OKF Benchmark concept with id "${b.id}".`);
  benchmarks.push(b);
}

for (const w of warnings) console.warn(`⚠️  ${w}`);
if (errors.length) { for (const e of errors) console.error(`❌ ${e}`); console.error(`\nbenchmark build FAILED: ${errors.length} error(s).`); process.exit(1); }

// ── emit ──
const outBench = join(ROOT, "public", "data", version, "benchmarks");
const outLeader = join(ROOT, "public", "data", version, "leaderboards");
for (const d of [outBench, outLeader]) { if (existsSync(d)) rmSync(d, { recursive: true, force: true }); mkdirSync(d, { recursive: true }); }

// deterministic seed leaderboard (sample runs — replaced by real submissions later)
const SAMPLE = (threshold) => [
  { agentLabel: "Atlas-v4", layers: [92, 88, 90, 95] },
  { agentLabel: "Nimbus-v3", layers: [80, 74, 78, 82] },
  { agentLabel: "Probe-v1", layers: [60, 55, 58, 64] },
];
const seedTimestamps = ["2026-06-20T09:00:00Z", "2026-06-22T13:30:00Z", "2026-06-24T17:45:00Z"];

for (const b of benchmarks) {
  writeFileSync(join(outBench, `${b.id}.json`), JSON.stringify(b, null, 2));
  // build a seed leaderboard using a simple weighted composite over the 4 sample layer scores
  const entries = SAMPLE(b.passThreshold)
    .map((s, i) => {
      const composite = Math.round(LAYERS.reduce((acc, l, idx) => acc + b.rubric[l] * s.layers[idx], 0) * 10) / 10;
      return { agentLabel: s.agentLabel, composite, passed: composite >= b.passThreshold, submittedAt: seedTimestamps[i] };
    })
    .sort((a, c) => c.composite - a.composite)
    .map((e, i) => ({ rank: i + 1, ...e }));
  writeFileSync(join(outLeader, `${b.id}.json`), JSON.stringify({ benchmarkId: b.id, seed: true, entries }, null, 2));
}

const index = benchmarks.map((b) => ({ id: b.id, title: b.title, school: b.school, passThreshold: b.passThreshold, taskCount: b.tasks.length, courses: b.courses }));
writeFileSync(join(outBench, "index.json"), JSON.stringify(index, null, 2));

console.log(
  `✅ benchmarks ${version} built: ${benchmarks.length} exams (${benchmarks.reduce((a, b) => a + b.tasks.length, 0)} tasks) → public/data/${version}/{benchmarks,leaderboards}/` +
    (warnings.length ? `  (${warnings.length} warning(s))` : "")
);
