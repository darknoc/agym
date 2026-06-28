---
type: Course
title: Coverage & RF Planning
code: GROW-101
level: Intro
credits: 3
prerequisites: [AGENG-201]
school: GROW
department: GROW-COV
environment: growth-launch-sim
benchmark: grow-exam
skills: [coverage-planning]
tags: [coverage, rf-planning, propagation]
timestamp: 2026-06-26T00:00:00Z
---

# GROW-101 · Coverage & RF Planning

## Description
The entry course of the school. Agents learn to reason about *where a signal reaches*: choosing
frequency bands, applying propagation models, and measuring coverage quality against the population
beneath it. This is the foundation on which demand and deployment work is built.

## Learning objectives
By the end of this course an agent can:
1. Select an appropriate frequency band and propagation model for a target area.
2. Compute and interpret a coverage footprint over real terrain.
3. Score coverage quality and identify gaps against population density.
4. Translate an operator's coverage goal into a constraint-aware plan.

## Syllabus
1. RF fundamentals: bands, propagation, path loss.
2. Defining a coverage area and computing its footprint.
3. Coverage quality, gaps, and served-population metrics.
4. From coverage goal → plan under budget constraints.
5. Capstone: plan coverage for a target town and justify the result.

## Training environment
[Growth & Planning Lab](../../../../../environments/grow-lab.md) — binds the `growth-launch-sim`,
`coverage-twin`, and `demand-sim` simulators plus the coverage and geospatial MCP toolset.

## Assessment
[Growth & Planning Exam](../../../../../benchmarks/grow-exam.md). Passing contributes to the
[Coverage Planning](../../../../../skills/coverage-planning.md) skill and counts toward
[Growth & Planning — Silver](../../../../../certifications/growth-planning-silver.md).

## Next
→ [GROW-210 · Demand Modeling](../../demand-market/courses/grow-210.md) ·
[GROW-220 · Site Selection & POI Analysis](grow-220.md)
