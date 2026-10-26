# Roadmap — v1

*Plan version 1 · written 26 Oct 2026 · next re-plan: end of Season 1 (late Jan 2027)*

How this is built and why is in [`planning.md`](planning.md). This file is
only the current state: what's being done now and what comes next.

---

## Now

The board. 3–5 cards at a time; refill it in the weekly review.
A card is one sitting (30–90 min). Milestone IDs link to lane files.

### Week 0 — set-up week (26 Oct – 1 Nov 2026)

- [ ] Answer [`open-questions.md`](open-questions.md) (even rough answers help)
- [ ] Fill in the **Fun** column in [`planning.md`](planning.md#current-scores-v1-oct-2026) and see if the order changes
- [ ] Add a line a day to [`log/2026-W44.md`](log/2026-W44.md) and do the Sunday review in it
- [ ] Start [AG1](lanes/01-agentic-engineering.md): write an `AGENTS.md`/`CLAUDE.md` for one Android codebase you know well (Mockcat or Quiet)
- [ ] Block recurring time in your calendar: daily slot + Sunday 15-min review

### Doing

*(move cards here when started)*

### Done this week

*(move cards here; copy a one-liner into the weekly log)*

---

## Season 1 — "AI-native mobile engineer" (2 Nov 2026 – 24 Jan 2027)

| Role | Lane | Season goal (what's true at the end) |
| --- | --- | --- |
| **Primary** | [01 Agentic engineering](lanes/01-agentic-engineering.md) | You run a personal agentic workflow you trust: project instructions, custom skills/commands, an agent in CI, and you've built one MCP server (Mockcat MCP). Milestones AG1–AG5. |
| **Secondary** | [02 Multiplatform & iOS](lanes/02-multiplatform-ios.md) | You can read and contribute to Swift/SwiftUI code, and one small app of yours runs on iOS (TestFlight). Milestones MP1–MP4. |
| Always on | [09 Foundations](lanes/09-foundations.md) | 2–3 articles published on this site; one system design doc written (FD1, FD2). |

Why this pairing: you're 2 months into a new job. Both lanes overlap directly
with day-to-day mobile work at eBay, so the season *adds* to work instead of
competing with it. Agentic work is practised *on* the iOS milestones (learning
Swift with an agent as a pair is the point).

Built-in slack: weeks around Diwali/New Year are allowed to be zero-weeks.

## The season sequence (tentative — will change)

| Season | Dates (approx.) | Primary | Secondary | Spine project after this season |
| --- | --- | --- | --- | --- |
| **S1** | Nov 2026 – Jan 2027 | 01 Agentic engineering | 02 Multiplatform & iOS | KMP renderer skeleton for SDUI Lab; Mockcat MCP |
| **S2** | Feb – Apr 2027 | 03 Backend | 04 Product tools | Ktor SDUI server + Postgres; layouts served to Android & iOS; Amplitude + a feature flag in one of your apps |
| **S3** | May – Jul 2027 | 05 Cloud & DevOps → 06 SRE | 07 AI/ML app engineering | SDUI Lab deployed with CI/CD, dashboards and an SLO; first LLM feature ("describe a screen → layout") |
| **S4** | Aug – Oct 2027 | *decided at S3 review* | *decided at S3 review* | Candidates: deeper AI/ML (07), web editor (08), or whatever the market and your interests say then |

S4 is unplanned on purpose. A year is too far out to guess well in this field.

## Parked lanes

Not abandoned — just not now. Pull one in only at a monthly retro.

- [05 Cloud & DevOps](lanes/05-cloud-devops.md) — waits for something to deploy (S3). *Exception:* CD1 (mobile release automation) is fair game anytime it helps at work.
- [06 SRE](lanes/06-sre.md) — waits for 05 (S3).
- [07 AI/ML](lanes/07-ai-ml.md) — S3. *Exception:* AI4 (on-device AI) is mobile-only and can be pulled earlier if it excites you.
- [08 Full-stack web](lanes/08-fullstack-web.md) — S4 candidate.

## Inbox

New ideas, tools, or links go here *instead of* derailing the current season.
Triage at the monthly retro: promote to a lane milestone, park, or delete.

- *(empty)*

## Changelog

| Version | Date | What changed and why |
| --- | --- | --- |
| v1 | 26 Oct 2026 | First version. Lanes, scoring, spine project, Season 1 chosen. |
