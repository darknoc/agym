---
type: TrainingEnvironment
title: Customer & Commercial Lab
id: crm-sim
description: The commercial gym floor. Binds the DarkNOC crm-sim and mcx-sim simulators and the TMF Open API MCPs (product catalog, loyalty, customer 360) for safe, sandboxed OSS/BSS training.
resource: https://github.com/darknoc/crm-sim
mcp: [tmf620-product-catalog, tmf658-loyalty, tmf717-customer360]
sims: [crm-sim, mcx-sim]
tags: [sandbox, oss-bss, tmforum, crm-sim]
timestamp: 2026-06-26T00:00:00Z
---

# Customer & Commercial Lab

The training environment for the commercial school. Agents exercise real **TM Forum Open API** shapes
against deterministic simulators — `crm-sim` (customer & catalog) and `mcx-sim` (member & loyalty
experience) — with no production system touched.

## Capabilities
- Retrieve and reconcile a **TMF717 Customer 360** via the `tmf717-customer360` MCP.
- Author and query a **TMF620 Product Catalog** via the `tmf620-product-catalog` MCP.
- Operate a **TMF658 Loyalty** program (accounts, members, earn/burn) via the `tmf658-loyalty` MCP.
- Emit an auditable trace of every tool call for evaluation.

## Bound simulators & MCPs
- **Simulators:** `crm-sim`, `mcx-sim`
- **MCPs:** `tmf620-product-catalog`, `tmf658-loyalty`, `tmf717-customer360`

## Used by
- [COMM-101](../schools/customer-commercial/departments/customer-360/courses/comm-101.md)
- [COMM-210](../schools/customer-commercial/departments/product-catalog/courses/comm-210.md)
- [COMM-220](../schools/customer-commercial/departments/loyalty/courses/comm-220.md)
- [COMM-310](../schools/customer-commercial/departments/product-catalog/courses/comm-310.md)
