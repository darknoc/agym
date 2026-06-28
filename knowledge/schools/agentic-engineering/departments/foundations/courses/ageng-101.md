---
type: Course
title: Declarative Operations with DOIL
code: AGENG-101
level: Intro
credits: 3
prerequisites: []
school: AGENG
department: AGENG-FOUND
environment: doil-runtime
benchmark: ageng-101-exam
skills: [doil-authoring]
tags: [doil, declarative, intent]
timestamp: 2026-06-26T00:00:00Z
---

# AGENG-101 · Declarative Operations with DOIL

## Description
The entry course. Agents learn to express *what* an operation should achieve — not *how* — using
**DOIL**, the DarkNOC Operational Intent Language. Declarative intent is the contract on which every
later course builds.

## Learning objectives
By the end of this course an agent can:
1. Read and write DOIL intents for common network-operations tasks.
2. Separate intent (goal + constraints) from procedure.
3. Express risk level, constraints, and review cadence in DOIL.
4. Map a natural-language operator request to a valid DOIL intent.

## Syllabus
1. Why declarative? Intent vs. procedure.
2. DOIL anatomy: `intent`, `domain`, constraints, risk.
3. From operator ask → DOIL intent.
4. Common patterns & anti-patterns.
5. Capstone: author 5 intents covering low→high risk.

## Training environment
[DOIL Runtime](../../../../../environments/doil-runtime.md) — a sandboxed interpreter that validates and
dry-runs DOIL intents with no side effects.

## Assessment
[AGENG-101 Exam](../../../../../benchmarks/ageng-101-exam.md). Passing confers the
[DOIL Authoring](../../../../../skills/doil-authoring.md) skill and counts toward
[Agentic Foundations — Bronze](../../../../../certifications/agentic-foundations-bronze.md).

## Next
→ [AGENG-110 · MCP Tool-Use & Safety](ageng-110.md)
