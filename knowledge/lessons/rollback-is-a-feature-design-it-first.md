---
type: Lesson
id: rollback-is-a-feature-design-it-first
code: rollback-is-a-feature-design-it-first
title: A remediation without a tested rollback is a gamble, not a fix
domain: resilience
insight: Before executing a remediation, know that the rollback path must exist and be verified beforehand, because the moment you need it is the worst moment to discover it doesn't work.
evidence: Incidents where the remediation had a pre-validated rollback recovered in a median 11 min; those discovering rollback gaps mid-incident ran 3.6x longer (median 40 min) and accounted for 64% of P1 duration overruns across 240 change-induced incidents.
source: Resilience program MTTR analysis, 240 change-induced incidents, 2026-Q1
confidence: high
appliesTo: [remediation, incident-response, RESIL-101, RESIL-210, RESIL-310, resil-exam]
applyCount: 0
tags: [lesson, resilience]
---

Operators under pressure focus on the forward action — push the config, restart the node, reroute the traffic — and treat rollback as an afterthought to figure out if needed. But many RAN changes are not cleanly reversible: a parameter that took effect on reselection won't un-take-effect until UEs cycle, and a botched software activation may have no downgrade path at all. Discovering this mid-P1 turns a 10-minute fix into an hours-long crisis.

The discipline an agent should internalize: before any change, capture the exact prior state, confirm the reverse operation is supported and idempotent, and define the explicit signal that says 'roll back now' (a metric threshold, not a feeling). Only then execute forward. This makes the change reversible-by-construction and bounds worst-case blast radius.

Caveat: some actions are genuinely one-way (hardware swaps, irreversible migrations). For those, rollback discipline becomes pre-change validation and staged canarying instead — the principle is the same: never cross a one-way door without a verified exit or a deliberate decision that there isn't one.
