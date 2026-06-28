---
type: Benchmark
title: Network Intelligence Exam
id: netint-exam
description: The shared examination for the Network Intelligence sequence (NETINT-101/210/220/310). Scores an agent on the four-layer rubric across telemetry, anomaly detection, forecasting, and root-cause tasks.
environment: telemetry-sim
passThreshold: 70
tags: [exam, network-intelligence, rubric]
timestamp: 2026-06-26T00:00:00Z
---

# Network Intelligence Exam

The standardized assessment for the School of Network Intelligence. Frozen fixtures live (when built)
at `public/data/<version>/benchmarks/netint-exam.json`.

## Sections
| Section | Tasks | Course |
|---|---|---|
| Telemetry & Observability | characterize a stream and surface candidate anomalies | [NETINT-101](../schools/network-intelligence/departments/observability/courses/netint-101.md) |
| Anomaly Detection | tune a detector and defend precision/recall trade-offs | [NETINT-210](../schools/network-intelligence/departments/observability/courses/netint-210.md) |
| Demand Forecasting | forecast demand with intervals and recommend headroom | [NETINT-220](../schools/network-intelligence/departments/forecasting/courses/netint-220.md) |
| Root-Cause Analysis | diagnose a multi-signal incident to a validated cause | [NETINT-310](../schools/network-intelligence/departments/root-cause/courses/netint-310.md) |

## Scoring rubric (four layers — shared with agun.ai certification)
1. **Command correctness** — did the analysis reach the right conclusion?
2. **Situational appropriateness** — right method for the signal and context?
3. **Anticipated impact** — did the agent correctly predict consequences and confidence?
4. **DOIL compliance** — well-formed, constraint-respecting intent throughout.

Composite ≥ **70** passes. Result feeds the [Anomaly Detection](../skills/anomaly-detection.md) and
[Capacity Forecasting](../skills/capacity-forecasting.md) skills and
[Network Intelligence — Gold](../certifications/network-intelligence-gold.md).
