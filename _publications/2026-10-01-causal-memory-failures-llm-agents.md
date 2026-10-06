---
title: "Beyond Observational Attribution: Causal Validation and Identifiability of Memory Failures in LLM Agents"
collection: publications
category: manuscripts
permalink: /publication/2026-10-01-causal-memory-failures-llm-agents
excerpt: "Conference manuscript in preparation. Formulating a formal causal framework to disentangle, identify, and validate latent memory failure modes across long-horizon autonomous LLM agents."
date: 2026-10-01
venue: "Conference Manuscript in Preparation"
citation: '<b>L. T. Khan</b>, et al. (2026). "Beyond Observational Attribution: Causal Validation and Identifiability of Memory Failures in LLM Agents." <i>Conference manuscript in preparation</i>, Elite Research Lab.'
---

<div class="notice--warning" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08); padding: 0.85em 1.2em; border-radius: 6px; margin-bottom: 1.5em;">
  <strong>Manuscript in Preparation:</strong> Target: Major AI / ML Conference (NeurIPS / ICLR track). Under the supervision of <a href="https://scholar.google.com/citations?user=pjn3jg4AAAAJ&hl=en" target="_blank">Md. Kishor Morol</a> (Meta / Anthropic incoming).
</div>

## Research Summary

Long-context autonomous agents rely on externalized or episodic memory systems to maintain state consistency across extended multi-turn interactions. However, current diagnostic benchmarks evaluate memory performance observationally—failing to establish whether an agent failed due to erroneous memory extraction, incorrect storage updates, noisy vector retrieval, or reasoning generation bottlenecks.

## Scope & Contribution

- **Causal Identifiability Framework:** Formulating a causal Directed Acyclic Graph (DAG) decomposing the agentic memory lifecycle into testable sub-mechanisms: extraction, update, consolidation, retrieval, filtering, and conditioned generation.
- **Interventional Benchmarks:** Designing counterfactual state-injection interventions to isolate the exact structural origin of memory hallucinations and drift.
- **Mitigation Protocols:** Proposing causally grounded verification techniques that significantly enhance state faithfulness in complex multi-step reasoning environments.
