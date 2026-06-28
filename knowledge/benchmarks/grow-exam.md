---
type: Benchmark
title: Growth & Planning Exam
id: grow-exam
description: The shared examination for the School of Growth & Planning (GROW-101/210/220/310). Scores an agent on the four-layer rubric across coverage planning, demand modeling, site selection, and rollout sequencing tasks.
environment: growth-launch-sim
passThreshold: 70
tags: [exam, growth, rubric]
timestamp: 2026-06-26T00:00:00Z
---

# Growth & Planning Exam

The standardized assessment for the School of Growth & Planning. Frozen fixtures live (when built) at
`public/data/<version>/benchmarks/grow-exam.json`. All tasks run in the
[Growth & Planning Lab](../environments/grow-lab.md).

## Sections
| Section | Tasks | Course |
|---|---|---|
| Coverage & RF Planning | plan coverage for a target area and score its quality | [GROW-101](../schools/growth-planning/departments/coverage-planning/courses/grow-101.md) |
| Demand Modeling | forecast and rank demand across candidate markets | [GROW-210](../schools/growth-planning/departments/demand-market/courses/grow-210.md) |
| Site Selection & POI | select a site set from POI/population evidence under budget | [GROW-220](../schools/growth-planning/departments/coverage-planning/courses/grow-220.md) |
| Rollout Sequencing | order a multi-town rollout and predict bottlenecks | [GROW-310](../schools/growth-planning/departments/deployment/courses/grow-310.md) |

## Scoring rubric (four layers — shared with agun.ai certification)
1. **Command correctness** — did the actions achieve the planning intent?
2. **Situational appropriateness** — right plan for the geography/market/budget?
3. **Anticipated impact** — did the agent correctly predict coverage, demand, and bottlenecks?
4. **DOIL compliance** — well-formed, constraint-respecting intent?

Composite ≥ **70** passes. Result feeds the [Coverage Planning](../skills/coverage-planning.md) and
[Demand Modeling](../skills/demand-modeling.md) skills and
[Growth & Planning — Silver](../certifications/growth-planning-silver.md).
