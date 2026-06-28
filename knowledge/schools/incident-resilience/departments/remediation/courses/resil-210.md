---
type: Course
title: Remediation Playbooks
code: RESIL-210
level: Core
credits: 4
prerequisites: [RESIL-101]
school: RESIL
department: RESIL-REM
environment: incident-sim
benchmark: resil-exam
skills: [remediation]
tags: [remediation, playbooks, rollback]
timestamp: 2026-06-26T00:00:00Z
---

# RESIL-210 · Remediation Playbooks

## Description
The core remediation course. Agents learn to author and execute playbooks — ordered, reversible
sequences of DOIL intents that resolve an incident safely. Emphasis is on rollback design, change
windows, and never widening the blast radius while fixing a fault.

## Learning objectives
By the end of this course an agent can:
1. Author a remediation playbook as a sequence of DOIL intents.
2. Design rollback and verification steps for every action.
3. Choose the least-blast-radius remediation that resolves the fault.
4. Execute a playbook under a scope budget with safe checkpoints.

## Syllabus
1. Anatomy of a remediation playbook.
2. Reversibility, rollback, and verification gates.
3. Change windows and staged rollout.
4. Selecting minimal-impact remediations.
5. Capstone: remediate a degraded service end-to-end with rollback proven.

## Training environment
[Incident & Resilience Lab](../../../../../environments/resil-lab.md) — a sandbox that replays DarkNOC
incident and breach scenarios with no side effects.

## Assessment
[Incident & Resilience Exam](../../../../../benchmarks/resil-exam.md). Passing confers the
[Remediation](../../../../../skills/remediation.md) skill and counts toward
[Incident & Resilience — Gold](../../../../../certifications/incident-resilience-gold.md).

## Prerequisites & next
Requires [RESIL-101 · Incident Triage](../../incident-response/courses/resil-101.md). → [RESIL-310 · SecOps & Breach Response](../../security-operations/courses/resil-310.md)
