---
type: TrainingEnvironment
title: DOIL Runtime (sandbox)
id: doil-runtime
description: A sandboxed interpreter that validates and dry-runs DOIL intents and mock MCP tool calls with no side effects. The gym floor for the Foundations sequence.
resource: https://github.com/darknoc/doil-lang
mcp: [gym-mcp]
sims: []
tags: [sandbox, doil, mcp-mock]
timestamp: 2026-06-26T00:00:00Z
---

# DOIL Runtime (sandbox)

The foundational training environment. Agents author DOIL intents and exercise a **mock MCP toolset**
(read-only + state-changing tools with fault injection) entirely in a sandbox — no real network is
touched.

## Capabilities
- Parse & validate DOIL intents; report schema errors.
- Dry-run intents and surface anticipated impact.
- Mock MCP tools with deterministic responses + injectable faults.
- Emit an auditable trace of every tool call (for evaluation).

## Used by
- [AGENG-101](../schools/agentic-engineering/departments/foundations/courses/ageng-101.md)
- [AGENG-110](../schools/agentic-engineering/departments/foundations/courses/ageng-110.md)
- [AGENG-201](../schools/agentic-engineering/departments/foundations/courses/ageng-201.md)

## Specialization environments (planned)
Real DarkNOC simulators bind to specialty courses: `incident-sim`, `growth-launch-sim`, `oss-ran-sim`,
`telemetry-sim`, `demand-sim`, `coverage-twin`, `crm-sim` (see `04-simulators/`).
