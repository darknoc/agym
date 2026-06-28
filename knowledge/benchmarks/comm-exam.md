---
type: Benchmark
title: Customer & Commercial Exam
id: comm-exam
description: The standardized examination for the Customer & Commercial school. Scores an agent on the four-layer rubric across customer 360, product catalog, loyalty, and end-to-end orchestration tasks.
environment: crm-sim
passThreshold: 70
tags: [exam, commercial, oss-bss, rubric]
timestamp: 2026-06-26T00:00:00Z
---

# Customer & Commercial Exam

The standardized assessment for the School of Customer & Commercial. Frozen fixtures live (when built)
at `public/data/<version>/benchmarks/comm-exam.json`. Administered in the
[Customer & Commercial Lab](../environments/comm-lab.md).

## Sections
| Section | Tasks | Course |
|---|---|---|
| Customer 360 | retrieve & reason over a TMF717 360 | [COMM-101](../schools/customer-commercial/departments/customer-360/courses/comm-101.md) |
| Product Catalog | author & validate TMF620 offerings | [COMM-210](../schools/customer-commercial/departments/product-catalog/courses/comm-210.md) |
| Loyalty | run a TMF658 earn/burn lifecycle | [COMM-220](../schools/customer-commercial/departments/loyalty/courses/comm-220.md) |
| Orchestration | execute an end-to-end commercial journey | [COMM-310](../schools/customer-commercial/departments/product-catalog/courses/comm-310.md) |

## Scoring rubric (four layers — shared with agun.ai certification)
1. **Command correctness** — did the actions achieve the commercial intent?
2. **Situational appropriateness** — right offering/action for the customer context?
3. **Anticipated impact** — did the agent correctly predict the commercial consequences?
4. **DOIL compliance** — well-formed, constraint-respecting intent?

Composite ≥ **70** passes. Result feeds the [Customer 360](../skills/customer-360.md) and
[Product Catalog](../skills/product-catalog.md) skills and
[Customer & Commercial — Silver](../certifications/customer-commercial-silver.md).
