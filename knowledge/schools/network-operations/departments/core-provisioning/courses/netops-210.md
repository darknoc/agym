---
type: Course
title: Core Provisioning & Activation
code: NETOPS-210
level: Core
credits: 4
prerequisites: [NETOPS-101]
school: NETOPS
department: NETOPS-CORE
environment: oss-ran-sim
benchmark: netops-exam
skills: [core-provisioning]
tags: [core, provisioning, activation]
timestamp: 2026-06-26T00:00:00Z
---

# NETOPS-210 · Core Provisioning & Activation

## Description
The core operations course. Agents learn to provision subscribers and services on the network core
and activate them safely — respecting ordering, dependencies, and the ability to roll back a partial
activation without leaving the core in an inconsistent state.

## Learning objectives
By the end of this course an agent can:
1. Provision a service on the core as an ordered set of DOIL intents.
2. Validate prerequisites and dependencies before activation.
3. Detect and recover from a partial or failed activation.
4. Predict the subscriber-facing impact of a provisioning change.

## Syllabus
1. Core provisioning model: subscribers, services, dependencies.
2. Activation ordering and idempotency.
3. Failure modes and rollback strategy.
4. DOIL for provisioning under tight constraints.
5. Capstone: provision and activate a service end-to-end with rollback.

## Training environment
[Network Operations Lab](../../../../../environments/netops-lab.md) — drives the `core-prov-sim`
simulator with provisioning and telemetry MCP tools and injectable activation faults.

## Assessment
[Network Operations Exam](../../../../../benchmarks/netops-exam.md). Passing contributes the
[Core Provisioning](../../../../../skills/core-provisioning.md) skill and counts toward
[Network Operations — Silver](../../../../../certifications/network-operations-silver.md).

## Prerequisites & next
Requires [NETOPS-101 · RAN Fundamentals](../../ran-engineering/courses/netops-101.md). → [NETOPS-220 · Transport & Backhaul](../../transport/courses/netops-220.md)
