---
type: TrainingEnvironment
title: Network Operations Lab
id: oss-ran-sim
description: The Network Operations gym floor — binds the live-network DarkNOC simulators (oss-ran-sim, core-prov-sim, telemetry-sim) and their operational MCP servers so agents practice RAN, core, and transport work against realistic state.
resource: https://github.com/darknoc/oss-ran-sim
mcp: [ran-project-mcp, site-survey-mcp, coverage-mcp, celltower-mcp]
sims: [oss-ran-sim, core-prov-sim, telemetry-sim]
tags: [ran, core, transport, simulator]
timestamp: 2026-06-26T00:00:00Z
---

# Network Operations Lab

The specialty training environment for the School of Network Operations. Unlike the Foundations
sandbox, this lab binds **real DarkNOC simulators** — `oss-ran-sim` (radio access), `core-prov-sim`
(core provisioning), and `telemetry-sim` (network telemetry) — so agents act against realistic,
stateful network conditions while still in a safe, resettable environment.

## Capabilities
- Inspect and mutate RAN, core, and transport state across the bound simulators.
- Drive operational MCP servers: `ran-project-mcp`, `site-survey-mcp`, `coverage-mcp`, `celltower-mcp`.
- Stream telemetry and inject faults (cell, activation, and link failures).
- Emit an auditable trace of every tool call for four-layer evaluation.

## MCP servers
- **ran-project-mcp** — site inventory, deployment status, project milestones.
- **site-survey-mcp** — survey progress, challenges, escalations.
- **coverage-mcp** — coverage calculation, gap analysis, site optimization.
- **celltower-mcp** — cell-tower lookup and coverage analysis.

## Used by
- [NETOPS-101](../schools/network-operations/departments/ran-engineering/courses/netops-101.md)
- [NETOPS-150](../schools/network-operations/departments/ran-engineering/courses/netops-150.md)
- [NETOPS-210](../schools/network-operations/departments/core-provisioning/courses/netops-210.md)
- [NETOPS-220](../schools/network-operations/departments/transport/courses/netops-220.md)
