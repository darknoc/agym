---
type: Course
title: Automated Root-Cause Analysis
code: NETINT-310
level: Advanced
credits: 4
prerequisites: [NETINT-210]
school: NETINT
department: NETINT-RCA
environment: telemetry-sim
benchmark: netint-exam
skills: [anomaly-detection]
tags: [root-cause, correlation, diagnosis]
timestamp: 2026-06-26T00:00:00Z
---

# NETINT-310 · Automated Root-Cause Analysis

## Description
The advanced diagnostic course. Agents learn to move from a confirmed anomaly to a validated root
cause — correlating signals across the stack, ranking competing hypotheses, and confirming the cause
with reproducible evidence rather than coincidence.

## Learning objectives
By the end of this course an agent can:
1. Assemble a correlation graph linking anomalies across signals.
2. Generate and rank candidate root-cause hypotheses.
3. Design tests that confirm or eliminate a hypothesis.
4. Report a validated root cause with a defensible evidence trail.

## Syllabus
1. From anomaly to incident: scoping the blast radius.
2. Correlation graphs and causal ordering.
3. Hypothesis generation, ranking, and elimination.
4. Validation: reproducibility and evidence trails.
5. Capstone: diagnose a multi-signal incident end to end.

## Training environment
[Network Intelligence Lab](../../../../../environments/netint-lab.md) — replays multi-signal incident
scenarios in `telemetry-sim` with known ground-truth causes.

## Assessment
[Network Intelligence Exam](../../../../../benchmarks/netint-exam.md). Passing contributes to the
[Anomaly Detection](../../../../../skills/anomaly-detection.md) skill and counts toward
[Network Intelligence — Gold](../../../../../certifications/network-intelligence-gold.md).

## Prerequisite
← [NETINT-210 · Anomaly Detection](../../observability/courses/netint-210.md)
