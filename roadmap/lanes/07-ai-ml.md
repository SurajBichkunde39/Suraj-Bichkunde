# 07 · AI/ML application engineering

**Status:** Season 3 secondary (planned) · AI4 (on-device) can be pulled earlier

## Why this matters for you

Lane 01 is about using AI to *build* software. This lane is about building AI
*into* software — the features users touch. Most product companies now need
engineers who can ship LLM-powered features responsibly: structured outputs,
retrieval, tool use, evals, cost and latency budgets. Mobile engineers have a
special angle here: **on-device AI** (Gemini Nano / ML Kit GenAI on Android,
Apple's on-device models on iOS) is a growing niche few backend-first people
understand.

Depth, in order: *apply* models (most employable) → *evaluate* them →
*understand* them (fundamentals) → *adapt* them (fine-tuning). Go as deep as
stays fun.

## Good enough looks like

You've shipped at least one LLM feature to real users, can explain and
measure its quality with evals, know when RAG beats fine-tuning (and when
neither is needed), and understand how a transformer works well enough to
reason about failure modes.

## Milestones

- [ ] **AI1 — LLM API fundamentals.** Prompting, system prompts, structured
  JSON output, tool use, streaming, token costs. *Artifact:* SDUI Lab
  feature — "describe a screen in words → valid layout JSON".
- [ ] **AI2 — RAG.** Embeddings, chunking, pgvector (reuse your Postgres),
  retrieval quality. *Artifact:* "Ask my site" — Q&A over the articles on this site.
- [ ] **AI3 — Evals and observability.** Golden datasets, LLM-as-judge with
  care, regression tracking, latency/cost dashboards. *Artifact:* eval suite
  for AI1 or AI2 (builds on AG7).
- [ ] **AI4 — On-device AI.** Run an on-device model in one of your apps
  (Android ML Kit GenAI / Gemini Nano; Apple Foundation Models on iOS).
  Compare quality, latency, battery with a cloud call. *Artifact:* feature + article.
- [ ] **AI5 — Fundamentals.** Build a tiny GPT from scratch following
  Karpathy's *Neural Networks: Zero to Hero*. *Artifact:* notebook + notes
  "transformers explained by an Android developer".
- [ ] **AI6 — Classic ML once.** One end-to-end classic ML project (e.g.
  predict churn from your app's analytics export): features, train/test
  split, metrics. *Artifact:* notebook.
- [ ] **AI7 — Adapt a model.** Fine-tune a small open model (LoRA) for a
  narrow task and compare against prompting + RAG. *Artifact:* comparison write-up.

## Resources

- Your model provider's API docs (e.g. Anthropic docs: tool use, structured
  outputs, prompt caching).
- Andrej Karpathy — *Neural Networks: Zero to Hero* (YouTube).
- fast.ai — *Practical Deep Learning for Coders*.
- Android Developers — on-device AI / ML Kit GenAI docs; Apple developer
  docs — Foundation Models framework.
- Chip Huyen — *AI Engineering* (book).

## Connects to

03 (server-side features live here), 01 (evals overlap with AG7; agents are
LLM apps too), 04 (experiment on AI features), 02 (on-device).
