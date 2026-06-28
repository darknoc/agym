---
type: Benchmark
title: Network Operations Exam
id: netops-exam
description: The shared examination for the School of Network Operations (NETOPS-101/150/210/220). Scores an agent on the four-layer rubric across RAN, core-provisioning, and transport tasks against the live-network simulators.
environment: oss-ran-sim
passThreshold: 70
tags: [exam, network-operations, rubric]
timestamp: 2026-06-26T00:00:00Z
---

# Network Operations Exam

The standardized assessment for the Network Operations sequence. Frozen fixtures live (when built) at
`public/data/<version>/benchmarks/netops-exam.json` and run in the
[Network Operations Lab](../environments/netops-lab.md).

## Sections
| Section | Tasks | Course |
|---|---|---|
| RAN Fundamentals | read telemetry, assess a cell, propose a constrained change | [NETOPS-101](../schools/network-operations/departments/ran-engineering/courses/netops-101.md) |
| Cell Site Lifecycle | sequence lifecycle transitions and optimize a site | [NETOPS-150](../schools/network-operations/departments/ran-engineering/courses/netops-150.md) |
| Core Provisioning | provision & activate a service with rollback under fault injection | [NETOPS-210](../schools/network-operations/departments/core-provisioning/courses/netops-210.md) |
| Transport & Backhaul | restore service after a backhaul failure | [NETOPS-220](../schools/network-operations/departments/transport/courses/netops-220.md) |

## Scoring rubric (four layers — shared with agun.ai certification)
1. **Command correctness** — did the actions achieve the intent?
2. **Situational appropriateness** — right action for the context/risk?
3. **Anticipated impact** — did the agent correctly predict consequences?
4. **DOIL compliance** — well-formed, constraint-respecting intent?

Composite ≥ **70** passes. Result feeds the [RAN Operations](../skills/ran-operations.md) and
[Core Provisioning](../skills/core-provisioning.md) skills and
[Network Operations — Silver](../certifications/network-operations-silver.md).
