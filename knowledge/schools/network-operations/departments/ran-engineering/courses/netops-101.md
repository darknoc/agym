---
type: Course
title: RAN Fundamentals
code: NETOPS-101
level: Intro
credits: 3
prerequisites: [AGENG-201]
school: NETOPS
department: NETOPS-RAN
environment: oss-ran-sim
benchmark: netops-exam
skills: [ran-operations]
tags: [ran, fundamentals, radio-access]
timestamp: 2026-06-26T00:00:00Z
---

# NETOPS-101 · RAN Fundamentals

## Description
The gateway course for Network Operations. Agents learn the structure of a radio access network —
cells, sites, sectors, and the telemetry that describes their health — and how to express
operational intent over a live RAN through MCP tools, all in DOIL.

## Learning objectives
By the end of this course an agent can:
1. Read RAN telemetry and identify cell, site, and sector state.
2. Express common RAN operations as DOIL intents with appropriate risk levels.
3. Use the RAN project and survey tools to inspect deployment status safely.
4. Anticipate the impact of a change before acting on a live cell.

## Syllabus
1. RAN anatomy: cells, sectors, sites, vendors.
2. Reading telemetry and deployment status.
3. DOIL for RAN operations: intent, constraints, risk.
4. Safe inspection via MCP tools.
5. Capstone: assess a site and propose a constrained change.

## Training environment
[Network Operations Lab](../../../../../environments/netops-lab.md) — binds the `oss-ran-sim`,
`core-prov-sim`, and `telemetry-sim` DarkNOC simulators with read-only and state-changing MCP tools.

## Assessment
[Network Operations Exam](../../../../../benchmarks/netops-exam.md). Passing contributes the
[RAN Operations](../../../../../skills/ran-operations.md) skill and counts toward
[Network Operations — Silver](../../../../../certifications/network-operations-silver.md).

## Prerequisites & next
Requires Foundations (AGENG-201). → [NETOPS-150 · Cell Site Lifecycle](netops-150.md)
