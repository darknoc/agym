/**
 * build-reports.mjs — folds Apply-It outcome reports (reports/reports.json) into each Lesson's
 * compiled evidence (applyCount, avgValue, recent outcomes). Sharded: patches both the light
 * index.json entry (fm.*) and the full concepts/<id>.json (frontmatter.*). Runs AFTER build-okf.
 * Zero deps. No reports file → no-op.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const reportsPath = join(ROOT, "reports", "reports.json");
const reports = existsSync(reportsPath) ? JSON.parse(readFileSync(reportsPath, "utf8")) : [];

const version = JSON.parse(readFileSync(join(ROOT, "public", "okf", "latest.json"), "utf8")).version;
const dir = join(ROOT, "public", "okf", version);
const indexPath = join(dir, "index.json");
const index = JSON.parse(readFileSync(indexPath, "utf8"));

const byLesson = {};
for (const r of reports) {
  if (!r || !r.lessonId) continue;
  (byLesson[r.lessonId] ??= []).push(r);
}

const summarize = (rs) => {
  const out = { applyCount: rs.length };
  if (rs.length) {
    out.recentOutcomes = rs.slice(-3).reverse().map((r) => ({ agentSlug: r.agentSlug, metric: r.metric, value: r.value, ts: r.ts, notes: r.notes ?? null }));
    const nums = rs.map((r) => Number(r.value)).filter((n) => !Number.isNaN(n));
    if (nums.length) out.avgValue = Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 100) / 100;
  }
  return out;
};

let lessons = 0;
let folded = 0;
for (const entry of index) {
  if (entry.type !== "Lesson") continue;
  lessons++;
  const rs = byLesson[entry.id] ?? [];
  const s = summarize(rs);
  folded += rs.length;

  entry.fm = { ...entry.fm, applyCount: s.applyCount };
  if (s.recentOutcomes) entry.fm.recentOutcomes = s.recentOutcomes; else delete entry.fm.recentOutcomes;
  if (s.avgValue !== undefined) entry.fm.avgValue = s.avgValue;

  const cPath = join(dir, "concepts", `${entry.id}.json`);
  if (existsSync(cPath)) {
    const c = JSON.parse(readFileSync(cPath, "utf8"));
    c.frontmatter = { ...c.frontmatter, ...s };
    if (!s.recentOutcomes) delete c.frontmatter.recentOutcomes;
    writeFileSync(cPath, JSON.stringify(c, null, 2));
  }
}

writeFileSync(indexPath, JSON.stringify(index, null, 2));
console.log(`✅ reports: ${reports.length} report(s), ${folded} folded into ${lessons} lesson(s)`);
