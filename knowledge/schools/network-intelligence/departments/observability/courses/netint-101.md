---
type: Course
title: Telemetry & Observability
code: NETINT-101
level: Intro
credits: 3
prerequisites: [AGENG-201]
school: NETINT
department: NETINT-OBS
environment: telemetry-sim
benchmark: netint-exam
skills: [anomaly-detection]
tags: [telemetry, observability, signals]
timestamp: 2026-06-26T00:00:00Z
---

# NETINT-101 · Telemetry & Observability

## Description
The entry course of Network Intelligence. Agents learn the telemetry stack — metrics, logs, and
traces — and how to assemble them into a coherent picture of network health. Observability is the
sensory layer on which every later intelligence task depends.

## Learning objectives
By the end of this course an agent can:
1. Distinguish metrics, logs, and traces and choose the right signal for a question.
2. Query a telemetry stream and characterize baseline behavior.
3. Separate signal from noise across noisy, multi-dimensional data.
4. Flag a deviation from baseline as a candidate anomaly.

## Syllabus
1. The telemetry stack: metrics, logs, traces.
2. Baselines, seasonality, and what "normal" means.
3. Signal vs. noise in high-cardinality data.
4. From deviation to candidate anomaly.
5. Capstone: characterize a telemetry stream and surface its anomalies.

## Training environment
[Network Intelligence Lab](../../../../../environments/netint-lab.md) — binds the DarkNOC
`telemetry-sim` simulator for live signal exploration with no production impact.

## Assessment
[Network Intelligence Exam](../../../../../benchmarks/netint-exam.md). Passing contributes to the
[Anomaly Detection](../../../../../skills/anomaly-detection.md) skill and counts toward
[Network Intelligence — Gold](../../../../../certifications/network-intelligence-gold.md).

## Prerequisite
← [AGENG-201 · Evaluation Literacy & Self-Critique](../../../../agentic-engineering/departments/foundations/courses/ageng-201.md)

## Next
→ [NETINT-210 · Anomaly Detection](netint-210.md)
