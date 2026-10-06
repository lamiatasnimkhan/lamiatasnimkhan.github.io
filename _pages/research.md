---
layout: archive
title: "Research Statement & Thrusts"
permalink: /research/
author_profile: true
---

{% include base_path %}

<div class="notice--info" style="border-left: 4px solid #1a56db; background: rgba(26, 86, 219, 0.05); padding: 1.25em; border-radius: 8px; margin-bottom: 2em;">
  <p style="margin: 0; font-size: 1.05em; line-height: 1.6;">
    <strong>Ph.D. Research Objective (Fall 2027):</strong> My overarching ambition as a doctoral researcher is to develop <strong>robust, causally interpretable, and computationally grounded Multimodal AI and Agentic systems</strong>. I am specifically interested in uncovering the formal failure modes of agent memory architectures, bridging high-level semantic reasoning with low-level perceptual representations, and deploying explainable AI to solve high-stakes challenges in clinical diagnostics and cross-cultural communication.
  </p>
</div>

## Research Philosophy: Willpower to Learn & Contribute

I view scientific research as an iterative craft demanding deep theoretical curiosity, empirical tenacity, and absolute intellectual honesty. My trajectory as an undergraduate researcher has taught me how to formulate clear, falsifiable hypotheses, construct reproducible benchmarking protocols, and thrive in resource-constrained environments:

1. **Relentless Empirical Drive:** When standard off-the-shelf models failed to capture nuanced Chinese Internet misogyny memes in the LT-EDI 2025 shared task, I spent weeks analyzing error distributions, engineering tailored cross-attention gating, and iterating until we captured subtle multimodal sarcasm—ultimately securing **1st Place Globally**.
2. **Foundational Understanding over Black-Box Usage:** Rather than simply calling commercial model APIs, I am committed to probing internal mechanics—such as identifying causal DAGs for agent memory failure identifiability or applying SHAP and Grad-CAM to reveal whether clinical neural networks attend to pathophysiological signals or dataset artifacts.
3. **Collaborative Stewardship:** High-impact science thrives in inclusive, collaborative environments. Through lab mentorship at CUET, research collaboration at Elite Research Lab, and academic reviewing, I strive to elevate my peers and give back to the academic ecosystem.

---

## Core Research Thrusts

### 1. Multimodal Learning & Vision-Language Grounding
* **Motivation:** Human intelligence effortlessly synthesizes visual scenes, acoustic prosody, and linguistic context. Yet modern Vision-Language Models (VLMs) frequently hallucinate or fail when spatial positioning, non-linear reading orders, or subtle cultural tropes govern meaning.
* **Active Work:** 
  * Developing the first standardized multimodal benchmark (*"Who Said What?"*) for character-to-dialogue grounding in Bengali sequential art and comics.
  * Winner of the **LT-EDI@LDK 2025 Shared Task** on Multimodal Misogyny Meme Detection in Chinese Social Media using dual-stream visual-textual transformers.
* **Ph.D. Questions:** How can we train vision-language models to perform multi-hop causal reasoning across sequential images without catastrophic attention diffusion? How do we build robust alignment across under-represented non-Western visual cultures?

### 2. Autonomous LLM Agents: Memory Failures & Causal Identifiability
* **Motivation:** LLM-based autonomous agents are deployed in complex, multi-day environments. However, errors in episodic memory retrieval and state tracking compound exponentially, causing agents to drift or take destructive actions.
* **Active Work:** 
  * At Elite Research Lab (advised by Md. Kishor Morol, Meta/Anthropic), formulating a formal causal identifiability framework decomposing agent memory lifecycles (extraction, storage update, vector retrieval, and output synthesis) using counterfactual interventions.
* **Ph.D. Questions:** Can we establish provable upper bounds on memory hallucination in long-horizon agent interactions? Can we engineer self-correcting neural-symbolic memory caches with formal causal guarantees?

### 3. Explainable & Trustworthy AI in Clinical Diagnostics
* **Motivation:** Diagnostic models for neurodegenerative diseases like Parkinson's Disease (PD) often evaluate isolated modalities (voice or handwriting), missing cross-modal synergistic biomarkers. Furthermore, black-box deep models cannot be safely integrated into clinical workflows without transparent attribution.
* **Active Work:** 
  * Undergraduate Thesis (*"Multimodal AI for Early Detection of Parkinson's Disease"*, advised by Prof. AHM Ashfak Habib).
  * Formulated transformer-based fusion networks processing acoustic voice recordings, kinematic drawing metrics, and clinical patient attributes with SHAP and Grad-CAM interpretability.
* **Ph.D. Questions:** How can we ensure multimodal foundation models remain robust to missing or corrupted clinical modalities during real-world hospital deployment?

### 4. Controlled Generation & Computational Sociolinguistics
* **Motivation:** Deploying LLMs safely requires enforcing strict operational and lexical boundaries without degrading generation fluency or contextual nuance.
* **Active Work:** 
  * Accepted at **SemEval-2026 Task 1**: Multilingual joke generation under hard lexical and topical constraints using parameter-efficient small LLMs.
  * Accepted at **SemEval-2026 Task 10**: Few-shot LLM psycholinguistic marker extraction and conspiracy framing detection.
  * Investigating computational stylometric divergence and native human susceptibility to AI-generated deceptive Bangla SMS.

---

## What I Seek in a Ph.D. Program

For **Fall 2027**, I am looking for a doctoral research group with:
- A culture of deep foundational curiosity and empirical rigor.
- Active research on Multimodal Foundation Models, LLM Reasoning/Agents, or Machine Learning in Healthcare/Scientific Discovery.
- Strong mentorship, collaborative cross-disciplinary projects, and high computational resources to support ambitious, groundbreaking investigations.
