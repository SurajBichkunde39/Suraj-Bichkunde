---
name: roadmap-checkin
description: Run a check-in on Suraj's learning roadmap in roadmap/ — daily or weekly check-ins, marking milestones done, monthly retros, and season re-plans. Use when the user says "weekly check-in", "weekly review", "I finished <milestone>", "what should I do today", "monthly retro", or "re-plan the season".
---

# Roadmap check-in

The roadmap lives in `roadmap/`. Read `roadmap/README.md`, `roadmap/roadmap.md`
and `roadmap/planning.md` first; read lane files only as needed.

Ground rules (from `planning.md`): WIP limit of one primary + one secondary
lane plus the always-on lanes; every milestone ends in an artifact; the plan
is disposable but changes are recorded with a reason. Be encouraging and
brief — this system is meant to be fun, not a source of guilt.

## "What should I do today?"

Look at the Now board in `roadmap/roadmap.md` and the current week's log.
Suggest one card that fits 30–90 minutes, preferring cards already in
"Doing". If Now is empty, propose the next card from the primary lane's
first unticked milestone.

## Milestone finished

1. Tick the checkbox in the lane file and record the artifact link next to it.
2. Move related cards on the Now board to "Done this week".
3. Add a line to the current week's log (`roadmap/log/YYYY-Www.md`; create it
   from `roadmap/templates/weekly.md` if missing).
4. Suggest the next milestone and whether it's worth an article (most are).

## Weekly check-in

1. Read this week's log. If it's missing or sparse, ask the user 2–3 quick
   questions instead of guessing: what got done, what blocked, energy/fun 1–5.
2. Fill in the Review section of the weekly log.
3. Clear "Done this week" on the Now board and refill Now with 3–5 cards,
   mostly from the primary lane, one from the secondary, one always-on.
4. Flag anything stuck for 3+ weeks and offer to split it.

## Monthly retro / season re-plan

Walk through `roadmap/templates/monthly-retro.md` or
`roadmap/templates/season-review.md` *with* the user, asking the questions
rather than answering them for them. Save the result in `roadmap/log/`. For a
season re-plan, rewrite the season section of `roadmap.md`, bump the plan
version, add a changelog row, and update the score table in `planning.md`.

## Always

- Use the actual current date for week numbers (ISO weeks).
- Don't add lanes or milestones without asking; put new ideas in the Inbox.
- Commit changes with a short message like `roadmap: weekly check-in 2026-W45`.
