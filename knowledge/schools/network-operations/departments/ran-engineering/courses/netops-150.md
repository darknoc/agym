---
type: Course
title: Cell Site Lifecycle
code: NETOPS-150
level: Intro
credits: 3
prerequisites: [NETOPS-101]
school: NETOPS
department: NETOPS-RAN
environment: oss-ran-sim
benchmark: netops-exam
skills: [ran-operations]
tags: [ran, lifecycle, site, optimization]
timestamp: 2026-06-26T00:00:00Z
---

# NETOPS-150 · Cell Site Lifecycle

## Description
Builds on RAN Fundamentals to follow a cell site through its full lifecycle — survey, build,
integration, optimization, and decommission — and the operational decisions an agent makes at each
stage on a live network.

## Learning objectives
By the end of this course an agent can:
1. Map a site to its current lifecycle stage from survey and project data.
2. Sequence lifecycle operations with correct dependencies and rollback.
3. Optimize coverage and capacity for an integrated site.
4. Express each lifecycle transition as a constraint-aware DOIL intent.

## Syllabus
1. Lifecycle stages: survey → build → integrate → optimize → decommission.
2. Reading survey progress and project milestones.
3. Optimization: coverage, capacity, neighbor relations.
4. Sequencing and rollback under risk constraints.
5. Capstone: drive a site from integration through optimization.

## Training environment
[Network Operations Lab](../../../../../environments/netops-lab.md) — exercises the `oss-ran-sim`
simulator with the site-survey and RAN project MCP tools.

## Assessment
[Network Operations Exam](../../../../../benchmarks/netops-exam.md). Passing contributes the
[RAN Operations](../../../../../skills/ran-operations.md) skill and counts toward
[Network Operations — Silver](../../../../../certifications/network-operations-silver.md).

## Prerequisites & next
Requires [NETOPS-101 · RAN Fundamentals](netops-101.md). → [NETOPS-210 · Core Provisioning & Activation](../../core-provisioning/courses/netops-210.md)
