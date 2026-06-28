---
type: Course
title: MCP Tool-Use & Safety
code: AGENG-110
level: Intro
credits: 3
prerequisites: [AGENG-101]
school: AGENG
department: AGENG-FOUND
environment: doil-runtime
benchmark: ageng-101-exam
skills: [doil-authoring]
tags: [mcp, tools, safety]
timestamp: 2026-06-26T00:00:00Z
---

# AGENG-110 · MCP Tool-Use & Safety

## Description
Agents act on the world through **MCP servers**. This course teaches disciplined tool-use: reading a
tool manifest, choosing the right tool, validating inputs, handling errors, and respecting scopes —
the difference between a capable agent and a dangerous one.

## Learning objectives
1. Read an MCP tool manifest and select the correct tool for a goal.
2. Validate and shape inputs; never act on unvalidated parameters.
3. Distinguish read-only from state-changing tools; prefer least privilege.
4. Recover from tool errors without cascading failure.
5. Keep an auditable trace of tool calls.

## Syllabus
1. The MCP model: tools, resources, prompts, scopes.
2. Reading manifests; capability mapping.
3. Input validation & idempotency.
4. Read vs. write; confirmation for irreversible actions.
5. Error handling, retries, and audit logging.
6. Capstone: complete a multi-tool task under a scope budget.

## Training environment
[DOIL Runtime](../../../../../environments/doil-runtime.md) with a mock MCP toolset (read/write tools,
fault injection).

## Assessment
[AGENG-101 Exam](../../../../../benchmarks/ageng-101-exam.md) (shared foundations exam, tool-use section).

## Prereq / next
← [AGENG-101](ageng-101.md) · → [AGENG-201 · Evaluation Literacy](ageng-201.md)
