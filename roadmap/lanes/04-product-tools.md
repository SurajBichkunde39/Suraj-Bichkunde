# 04 · Product tools: analytics, experiments, design

**Status:** Season 2 secondary (planned) · cheap to dip into anytime

## Why this matters for you

As AI makes code cheaper, the scarce skill is knowing **what** to build and
**whether it worked**. Engineers who can define an event taxonomy, read a
funnel, design a sound A/B test, and talk to a designer in Figma's language
get pulled into product decisions — which is where seniority grows. You
already work alongside Amplitude; this lane is about using it as an owner,
not just as an instrumentation ticket.

## Good enough looks like

You can instrument an app with a clean event plan, build funnels/retention
charts yourself, design and read an A/B test without fooling yourself, and
take a Figma file to code (or tweak a design yourself) without hand-holding.

## Milestones

### Analytics and experimentation

- [ ] **PT1 — Event taxonomy.** Write a tracking plan for one of your apps
  (Quiet or Morse Lab): events, properties, naming conventions, user
  identity. *Artifact:* the tracking plan doc.
- [ ] **PT2 — Instrument and look.** Add Amplitude (free tier) to that app;
  build a funnel, a retention chart, and one cohort. *Artifact:* a short
  "what my users actually do" write-up.
- [ ] **PT3 — Experimentation fundamentals.** Hypotheses, primary vs.
  guardrail metrics, sample size, significance, peeking, novelty effects.
  *Artifact:* a one-page "how to not fool yourself with A/B tests" note.
- [ ] **PT4 — Run a real experiment.** Feature flag + A/B test on your own app
  (Amplitude Experiment, Firebase Remote Config, GrowthBook or Statsig).
  *Artifact:* experiment write-up with result — even "no effect" counts.
- [ ] **PT5 — At work.** Read through how eBay/TCGPlayer instruments and runs
  experiments; propose one improvement or one experiment. *Artifact:* the proposal.

### Design

- [ ] **PT6 — Figma basics.** Frames, auto layout, components, variants,
  styles/variables. *Artifact:* redesign one screen of your app in Figma.
- [ ] **PT7 — Design to code.** Dev Mode, design tokens → Compose/SwiftUI
  theme; try a Figma MCP server with your agent to generate a screen and
  judge the result. *Artifact:* the screen in code + notes on what the agent got right.
- [ ] **PT8 — Product sense.** Write a mini PRD for a feature in one of your
  apps: problem, users, success metrics, risks. Then build it.
  *Artifact:* the PRD and the shipped feature.

## Resources

- Amplitude Academy / Amplitude docs (taxonomy, charts, Experiment).
- *Trustworthy Online Controlled Experiments* — Kohavi, Tang, Xu.
- Figma's official learn site and YouTube channel.
- Lenny's Newsletter — product thinking (selectively).

## Connects to

03 (feature flags served by your backend), 01 (Figma MCP + agents), 07
(AI-generated variants to test), your own Play Store apps (real users!).
