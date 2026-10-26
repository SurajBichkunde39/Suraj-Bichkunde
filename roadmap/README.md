# The Roadmap

A living plan for growing from **Senior Android Developer** into **someone who
builds software products end to end — and knows how to harness AI to do it.**

> Planning is more important than the plan. This folder holds the plan, but
> its real job is to keep the *planning* habit alive: pick, do, reflect,
> re-plan. Throwing a plan away and starting again is allowed — and logged.

There is no finish line here. There are **lanes** (areas worth learning),
**milestones** (small, shippable steps inside a lane), and **seasons**
(~12-week blocks where a couple of lanes get focus). Every day there should be
one small, obvious thing on the plate.

## What's in here

| File | What it is | How often you touch it |
| --- | --- | --- |
| [`roadmap.md`](roadmap.md) | **The current plan.** The "Now" board, this season's focus, the season sequence. Start here. | Daily glance, weekly update |
| [`planning.md`](planning.md) | **The method.** How lanes are prioritised, rules of the game, review rhythm. Change this rarely. | When re-planning |
| [`lanes/`](lanes/) | One file per lane: why it matters for *you*, a ladder of milestones, a few good resources. | When starting/finishing a milestone |
| [`log/`](log/) | Weekly notes, monthly retros, season re-plans. The memory of the journey. | Weekly |
| [`templates/`](templates/) | Copy-paste templates for the log. | — |
| [`open-questions.md`](open-questions.md) | Things to answer so the plan fits better. | Until answered |

## The lanes

| # | Lane | One-line why |
| --- | --- | --- |
| 01 | [Agentic engineering](lanes/01-agentic-engineering.md) | The multiplier. Makes every other lane faster. |
| 02 | [Multiplatform & iOS](lanes/02-multiplatform-ios.md) | From "Android dev" to "mobile engineer". Closest jump from where you are. |
| 03 | [Backend](lanes/03-backend.md) | You've designed SDUI and payments from the client side — build the other half. |
| 04 | [Product tools: analytics, experiments, design](lanes/04-product-tools.md) | Amplitude, A/B testing, Figma. Be the engineer who speaks product. |
| 05 | [Cloud & DevOps](lanes/05-cloud-devops.md) | Ship and run what you build, not just write it. |
| 06 | [SRE & reliability](lanes/06-sre.md) | Keep it running; measure what "running" means. |
| 07 | [AI/ML application engineering](lanes/07-ai-ml.md) | Build AI *into* products (server and on-device), not just use it to code. |
| 08 | [Full-stack web](lanes/08-fullstack-web.md) | Ship a product on the platform with the lowest barrier to entry. |
| 09 | [Foundations (always on)](lanes/09-foundations.md) | System design, writing in public, interview readiness, security. |

## How to use this every day

1. Open [`roadmap.md`](roadmap.md) → look at **Now**.
2. Pick one card and do 30–90 minutes. A small thing finished beats a big thing started.
3. Jot one line in this week's log file (`log/YYYY-Www.md`).
4. Sunday: 15-minute weekly review (see [`planning.md`](planning.md#rhythm)).

## Working on this with Claude

This repo has a `roadmap-checkin` skill (`.claude/skills/roadmap-checkin/`).
In a Claude Code session on this repo, say things like:

- "weekly check-in" — reviews the log, updates the Now board, suggests next week's cards.
- "I finished M1 in the iOS lane" — ticks it off, logs it, proposes what's next.
- "Let's re-plan the season" — walks through the season review template.

Using an agent to run your own learning system is itself practice for lane 01.
