---
type: TrainingEnvironment
title: Incident & Resilience Lab
id: incident-sim
description: A sandbox that replays DarkNOC incident and security-breach scenarios with no side effects. The gym floor for the School of Incident & Resilience.
resource: https://github.com/darknoc/incident-sim
mcp: [gym-mcp]
sims: [incident-sim, security-breach-sim]
tags: [sandbox, incident, breach, secops]
timestamp: 2026-06-26T00:00:00Z
---

# Incident & Resilience Lab

The specialty training environment for the School of Incident & Resilience. It binds two DarkNOC
simulators — `incident-sim` (degradations, outages, cascading faults) and `security-breach-sim` (live
adversarial breaches) — and replays them deterministically so agents can triage, analyze, and remediate
without touching a real network.

## Capabilities
- Replay scripted incident and breach scenarios with deterministic state.
- Inject correlated alert storms, dependency faults, and cascading failures.
- Accept remediation playbooks (DOIL intents) and dry-run their impact.
- Emit an auditable trace of every action for evaluation.

## Bound simulators
- `incident-sim` — degradations, outages, and cascading network faults.
- `security-breach-sim` — live adversarial breach scenarios for SecOps drills.

## Used by
- [RESIL-101](../schools/incident-resilience/departments/incident-response/courses/resil-101.md)
- [RESIL-220](../schools/incident-resilience/departments/incident-response/courses/resil-220.md)
- [RESIL-210](../schools/incident-resilience/departments/remediation/courses/resil-210.md)
- [RESIL-310](../schools/incident-resilience/departments/security-operations/courses/resil-310.md)

Part of the [School of Incident & Resilience](../schools/incident-resilience/index.md).
