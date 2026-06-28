# agym — OKF record

The **open knowledge record** for [agym.ai](https://www.agym.ai), the training gymnasium — authored
in Google's **Open Knowledge Format (OKF v0.1)**. One repo, one truth.

## Edit
- `knowledge/` — the OKF concepts: schools, departments, courses, benchmarks, skills, environments,
  certifications (markdown + YAML frontmatter, cross-linked). This is what you edit.
- `data-src/` — bindings the compilers read: `sims.json`, `environments.json`, `agun-map.json`, and
  `benchmarks/*.json` (the benchmark fixtures).

## How it goes live (no app redeploy)
On push to `main`, CI (`.github/workflows/okf.yml`):
1. validates the OKF (every concept has `type`, links resolve, no orphans),
2. compiles → sharded `dist/okf/<version>/` (`meta.json`, `index.json`, `concepts/<id>.json`) +
   `dist/config` + `dist/data`,
3. commits `dist/`, then pings `agym.ai/api/revalidate` so the site picks it up via ISR.

## Build locally
`npm run build` → writes `dist/`.
