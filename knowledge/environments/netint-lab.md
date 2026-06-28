---
type: TrainingEnvironment
title: Network Intelligence Lab
id: telemetry-sim
description: The Network Intelligence gym floor. Binds the DarkNOC telemetry-sim and demand-sim simulators plus the compartment-model and geospatial-population-density MCPs for anomaly, forecasting, and root-cause training with no production impact.
resource: https://github.com/darknoc/telemetry-sim
mcp: [compartment-model, geospatial-population-density]
sims: [telemetry-sim, demand-sim]
tags: [lab, telemetry, forecasting, root-cause]
timestamp: 2026-06-26T00:00:00Z
---

# Network Intelligence Lab

The training environment for the School of Network Intelligence. Agents work against live DarkNOC
simulators — never production — to explore telemetry, detect anomalies, backtest forecasts, and
diagnose incidents with known ground truth.

## Bound simulators
- **`telemetry-sim`** — streams metrics, logs, and traces with injectable anomalies of known type.
- **`demand-sim`** — replays historical demand series for forecast backtesting.

## Bound MCPs
- **`compartment-model`** — population-flow modeling for demand and capacity scenarios.
- **`geospatial-population-density`** — spatial density signals for region-aware forecasting and correlation.

## Capabilities
- Query and characterize live telemetry streams.
- Inject anomalies with ground-truth labels for detector training.
- Backtest forecasts against held-out demand history.
- Replay multi-signal incident scenarios with known root causes.

## Used by
- [NETINT-101](../schools/network-intelligence/departments/observability/courses/netint-101.md)
- [NETINT-210](../schools/network-intelligence/departments/observability/courses/netint-210.md)
- [NETINT-220](../schools/network-intelligence/departments/forecasting/courses/netint-220.md)
- [NETINT-310](../schools/network-intelligence/departments/root-cause/courses/netint-310.md)

Part of the [School of Network Intelligence](../schools/network-intelligence/index.md).
