---
type: Course
title: Anomaly Detection
code: NETINT-210
level: Core
credits: 4
prerequisites: [NETINT-101]
school: NETINT
department: NETINT-OBS
environment: telemetry-sim
benchmark: netint-exam
skills: [anomaly-detection]
tags: [anomaly-detection, statistics, signals]
timestamp: 2026-06-26T00:00:00Z
---

# NETINT-210 · Anomaly Detection

## Description
The core observability course. Agents move from *seeing* telemetry to *judging* it — applying
statistical and contextual methods to decide when a deviation is a real anomaly worth acting on, and
when it is noise to be suppressed.

## Learning objectives
By the end of this course an agent can:
1. Apply threshold, statistical, and seasonal methods to detect anomalies.
2. Tune sensitivity to balance false positives against missed events.
3. Correlate anomalies across multiple signals to reduce alert fatigue.
4. Justify each detection with evidence and a confidence estimate.

## Syllabus
1. Detection families: thresholds, z-scores, seasonal decomposition.
2. Precision vs. recall: the cost of false alarms.
3. Multi-signal correlation and deduplication.
4. Confidence, evidence, and explainability.
5. Capstone: build a tuned detector and defend its trade-offs.

## Training environment
[Network Intelligence Lab](../../../../../environments/netint-lab.md) — exercises detectors against
the `telemetry-sim` simulator with injected anomalies of known ground truth.

## Assessment
[Network Intelligence Exam](../../../../../benchmarks/netint-exam.md). Passing contributes to the
[Anomaly Detection](../../../../../skills/anomaly-detection.md) skill and counts toward
[Network Intelligence — Gold](../../../../../certifications/network-intelligence-gold.md).

## Prerequisite
← [NETINT-101 · Telemetry & Observability](netint-101.md)

## Next
→ [NETINT-310 · Automated Root-Cause Analysis](../../root-cause/courses/netint-310.md)
