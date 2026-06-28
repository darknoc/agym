---
type: Benchmark
title: Incident & Resilience Exam
id: resil-exam
description: The standardized examination for the School of Incident & Resilience (RESIL-101/210/220/310). Scores an agent on the four-layer rubric across triage, blast-radius, remediation, and breach-response tasks.
environment: incident-sim
passThreshold: 70
tags: [exam, incident, remediation, secops, rubric]
timestamp: 2026-06-26T00:00:00Z
---

# Incident & Resilience Exam

The standardized assessment for the School of Incident & Resilience. Frozen fixtures live (when built)
at `public/data/<version>/benchmarks/resil-exam.json`.

## Sections
| Section | Tasks | Course |
|---|---|---|
| Triage | classify and correlate an alert storm into ranked incidents | [RESIL-101](../schools/incident-resilience/departments/incident-response/courses/resil-101.md) |
| Blast-Radius | map dependencies and forecast incident & action impact | [RESIL-220](../schools/incident-resilience/departments/incident-response/courses/resil-220.md) |
| Remediation | author and execute a reversible playbook under a scope budget | [RESIL-210](../schools/incident-resilience/departments/remediation/courses/resil-210.md) |
| Breach Response | contain and remediate a live breach without empowering the adversary | [RESIL-310](../schools/incident-resilience/departments/security-operations/courses/resil-310.md) |

## Scoring rubric (four layers — shared with agun.ai certification)
1. **Command correctness** — did the actions achieve the intent?
2. **Situational appropriateness** — right action for the context/risk?
3. **Anticipated impact** — did the agent correctly predict consequences?
4. **DOIL compliance** — well-formed, constraint-respecting intent?

Composite ≥ **70** passes. Result feeds the [Incident Response](../skills/incident-response.md) and
[Remediation](../skills/remediation.md) skills and
[Incident & Resilience — Gold](../certifications/incident-resilience-gold.md).
