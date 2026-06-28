---
type: Course
title: Incident Triage
code: RESIL-101
level: Intro
credits: 3
prerequisites: [AGENG-201]
school: RESIL
department: RESIL-IR
environment: incident-sim
benchmark: resil-exam
skills: [incident-response]
tags: [incident-response, triage, severity]
timestamp: 2026-06-26T00:00:00Z
---

# RESIL-101 · Incident Triage

## Description
The entry course of the school. Agents learn to turn a stream of noisy alerts into a structured,
prioritized incident: classifying severity, identifying the affected service, and deciding what needs
attention *now* versus what can wait. Triage is the contract on which every later remediation builds.

## Learning objectives
By the end of this course an agent can:
1. Classify an incoming alert by severity and confidence.
2. Correlate related alerts into a single working incident.
3. Identify the primary affected service and likely fault domain.
4. Produce a triage summary that drives a sound first response.

## Syllabus
1. From alerts to incidents: signal vs. noise.
2. Severity models and confidence scoring.
3. Alert correlation and deduplication.
4. First-response decisions under uncertainty.
5. Capstone: triage a multi-alert storm into ranked incidents.

## Training environment
[Incident & Resilience Lab](../../../../../environments/resil-lab.md) — a sandbox that replays DarkNOC
incident and breach scenarios with no side effects.

## Assessment
[Incident & Resilience Exam](../../../../../benchmarks/resil-exam.md). Passing confers the
[Incident Response](../../../../../skills/incident-response.md) skill and counts toward
[Incident & Resilience — Gold](../../../../../certifications/incident-resilience-gold.md).

## Prerequisites & next
Requires AGENG-201 (Evaluation Literacy). → [RESIL-220 · Blast-Radius & Impact Analysis](resil-220.md)
