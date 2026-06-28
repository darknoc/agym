---
type: TrainingEnvironment
title: Growth & Planning Lab
id: growth-launch-sim
description: The gym floor for the School of Growth & Planning. Binds DarkNOC growth, coverage-twin, and demand simulators with the geospatial, POI, coverage, and imagery MCP toolset to plan coverage, demand, and rollouts against real-world data.
resource: https://github.com/darknoc/growth-launch-sim
mcp: [poi-mcp, satellite-imagery, coverage-mcp, geospatial-population-density]
sims: [growth-launch-sim, coverage-twin, demand-sim]
tags: [growth, coverage, demand, geospatial]
timestamp: 2026-06-26T00:00:00Z
---

# Growth & Planning Lab

The specialization environment for the School of Growth & Planning. Agents plan coverage, forecast
demand, and sequence rollouts against realistic geospatial, population, and points-of-interest data —
without committing a single real build.

## Capabilities
- Drive the `growth-launch-sim`, `coverage-twin`, and `demand-sim` simulators.
- Compute coverage footprints and quality over real terrain via `coverage-mcp`.
- Query population density and gradients via `geospatial-population-density`.
- Analyze POI density and venues via `poi-mcp`; pull terrain evidence via `satellite-imagery`.
- Emit an auditable trace of every tool call for evaluation.

## Used by
- [GROW-101](../schools/growth-planning/departments/coverage-planning/courses/grow-101.md)
- [GROW-210](../schools/growth-planning/departments/demand-market/courses/grow-210.md)
- [GROW-220](../schools/growth-planning/departments/coverage-planning/courses/grow-220.md)
- [GROW-310](../schools/growth-planning/departments/deployment/courses/grow-310.md)

Part of the [School of Growth & Planning](../schools/growth-planning/index.md).
