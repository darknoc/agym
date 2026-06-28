---
type: Course
title: Transport & Backhaul
code: NETOPS-220
level: Core
credits: 4
prerequisites: [NETOPS-101]
school: NETOPS
department: NETOPS-XPORT
environment: oss-ran-sim
benchmark: netops-exam
skills: [core-provisioning]
tags: [transport, backhaul, capacity]
timestamp: 2026-06-26T00:00:00Z
---

# NETOPS-220 · Transport & Backhaul

## Description
The transport operations course. Agents learn to operate the backhaul that carries traffic between
radio sites and the core — provisioning links, managing capacity and redundancy, and responding to
transport faults without disrupting the services riding on top.

## Learning objectives
By the end of this course an agent can:
1. Map transport topology and identify backhaul links for a site.
2. Provision and resize transport capacity as DOIL intents.
3. Reason about redundancy and failover during a link fault.
4. Predict the service impact of a transport change before acting.

## Syllabus
1. Transport topology: links, capacity, redundancy.
2. Provisioning and resizing backhaul.
3. Fault response and failover.
4. DOIL for transport operations under risk constraints.
5. Capstone: restore service after a backhaul failure.

## Training environment
[Network Operations Lab](../../../../../environments/netops-lab.md) — exercises the transport paths of
the `oss-ran-sim` and `telemetry-sim` simulators with injectable link faults.

## Assessment
[Network Operations Exam](../../../../../benchmarks/netops-exam.md). Passing contributes the
[Core Provisioning](../../../../../skills/core-provisioning.md) skill and counts toward
[Network Operations — Silver](../../../../../certifications/network-operations-silver.md).

## Prerequisites & next
Requires [NETOPS-101 · RAN Fundamentals](../../ran-engineering/courses/netops-101.md). Completes the Network Operations core sequence toward [Network Operations — Silver](../../../../../certifications/network-operations-silver.md).
