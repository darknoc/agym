# `knowledge/` — the Agentic Gym University OKF bundle

This directory is an **Open Knowledge Format (OKF v0.1)** bundle. It is the *source of truth* for
the university catalog: schools, departments, courses, training environments, benchmarks, skills,
and certification tracks.

## How it works

- Every `.md` file (except this README and `index.md` navigation files) is an **OKF concept**.
- Each concept has **YAML frontmatter** with at least the required `type` field.
- Concepts **link to each other with normal markdown links** (`[text](../path/to/file.md)`),
  forming a directed knowledge graph.
- `index.md` files are navigation/disclosure aids (OKF reserved filename). `log.md` (optional)
  holds chronological change history.

## Build

`scripts/build-okf.mjs` validates this bundle and compiles it to a queryable graph at
`public/okf/<version>/graph.json`, consumed by the Next.js app and the Gym MCP server. Nothing here
runs continuously — generation is an on-demand "prepare" step that freezes a version-pinned artifact.

## Concept types

`University` · `School` · `Department` · `Course` · `TrainingEnvironment` · `Benchmark` · `Skill` ·
`Curriculum` · `Certification`

See [`docs/MASTER_PLAN.md`](../docs/MASTER_PLAN.md) §4 for the model and [`index.md`](./index.md) for the root.
