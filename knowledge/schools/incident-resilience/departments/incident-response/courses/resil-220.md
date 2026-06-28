---
type: Course
title: Blast-Radius & Impact Analysis
code: RESIL-220
level: Core
credits: 4
prerequisites: [RESIL-101]
school: RESIL
department: RESIL-IR
environment: incident-sim
benchmark: resil-exam
skills: [incident-response]
tags: [incident-response, blast-radius, impact-analysis]
timestamp: 2026-06-26T00:00:00Z
---

# RESIL-220 · Blast-Radius & Impact Analysis

## Description
Before an agent acts, it must know how far the damage reaches — and how far a *fix* would reach. This
course teaches blast-radius reasoning: tracing dependencies, estimating affected subscribers, and
quantifying the cost of both the incident and any candidate remediation.

## Learning objectives
By the end of this course an agent can:
1. Map an incident's blast radius across dependent services and sites.
2. Estimate user and SLA impact from a fault.
3. Distinguish contained faults from cascading ones.
4. Predict the secondary blast radius of a proposed action.

## Syllabus
1. Dependency graphs and fault propagation.
2. Quantifying impact: subscribers, SLAs, revenue.
3. Cascade detection and containment boundaries.
4. Action impact forecasting (the anticipated-impact rubric layer).
5. Capstone: produce an impact report for a multi-domain incident.

## Training environment
[Incident & Resilience Lab](../../../../../environments/resil-lab.md) — a sandbox that replays DarkNOC
incident and breach scenarios with no side effects.

## Assessment
[Incident & Resilience Exam](../../../../../benchmarks/resil-exam.md). Passing confers the
[Incident Response](../../../../../skills/incident-response.md) skill and counts toward
[Incident & Resilience — Gold](../../../../../certifications/incident-resilience-gold.md).

## Prerequisites & next
Requires [RESIL-101 · Incident Triage](resil-101.md). → [RESIL-310 · SecOps & Breach Response](../../security-operations/courses/resil-310.md)
