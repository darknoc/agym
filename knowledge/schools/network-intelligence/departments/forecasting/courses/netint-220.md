---
type: Course
title: Demand Forecasting
code: NETINT-220
level: Core
credits: 4
prerequisites: [NETINT-101]
school: NETINT
department: NETINT-FCAST
environment: telemetry-sim
benchmark: netint-exam
skills: [capacity-forecasting]
tags: [forecasting, demand, capacity]
timestamp: 2026-06-26T00:00:00Z
---

# NETINT-220 · Demand Forecasting

## Description
The core forecasting course. Agents learn to project future demand and capacity headroom from
historical telemetry, quantifying uncertainty so that planning decisions rest on honest ranges, not
single-point guesses.

## Learning objectives
By the end of this course an agent can:
1. Build short- and medium-horizon forecasts from telemetry history.
2. Model seasonality, trend, and growth in demand.
3. Produce prediction intervals and communicate forecast uncertainty.
4. Translate a demand forecast into a capacity headroom recommendation.

## Syllabus
1. Forecasting fundamentals: horizon, granularity, error metrics.
2. Trend, seasonality, and growth decomposition.
3. Uncertainty: prediction intervals and backtesting.
4. From demand forecast to capacity plan.
5. Capstone: forecast demand and recommend headroom for a region.

## Training environment
[Network Intelligence Lab](../../../../../environments/netint-lab.md) — binds the DarkNOC
`demand-sim` simulator for backtesting forecasts against held-out history.

## Assessment
[Network Intelligence Exam](../../../../../benchmarks/netint-exam.md). Passing contributes to the
[Capacity Forecasting](../../../../../skills/capacity-forecasting.md) skill and counts toward
[Network Intelligence — Gold](../../../../../certifications/network-intelligence-gold.md).

## Prerequisite
← [NETINT-101 · Telemetry & Observability](../../observability/courses/netint-101.md)

## Next
→ [NETINT-310 · Automated Root-Cause Analysis](../../root-cause/courses/netint-310.md)
