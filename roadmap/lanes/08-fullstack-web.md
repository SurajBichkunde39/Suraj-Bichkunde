# 08 · Full-stack web

**Status:** Parked · Season 4 candidate

## Why this matters for you

The web is the cheapest place to ship a product: no store review, instant
updates, every device. Being able to put a usable web UI in front of your
backend turns you into someone who can build a whole product alone — and
internal tools (dashboards, admin consoles, SDUI editors) are almost always
web. You've already started: this site is Astro + TypeScript.

## Good enough looks like

You can build and deploy a typed, accessible web app with auth that talks to
your own backend, and you understand the rendering trade-offs (static, SSR,
client-side) well enough to choose.

## Milestones

- [ ] **WB1 — TypeScript properly.** Types, generics, narrowing, discriminated
  unions (sealed classes, again). Use this site as the playground.
  *Artifact:* a typed improvement to this site.
- [ ] **WB2 — React fundamentals.** Components, state, effects, data
  fetching. Add an interactive island to this Astro site (e.g. a filter on
  the articles page). *Artifact:* the shipped island.
- [ ] **WB3 — SDUI Lab web editor.** A web app to edit layouts and preview
  them live, talking to the Ktor backend. *Artifact:* deployed editor.
- [ ] **WB4 — Full-stack framework.** Build one small product end to end in a
  full-stack framework (e.g. Next.js): auth, database, deploy.
  *Artifact:* public URL.
- [ ] **WB5 — Performance and accessibility.** Core Web Vitals, Lighthouse,
  semantic HTML, keyboard/screen-reader checks on your own site.
  *Artifact:* before/after scores.

## Resources

- TypeScript Handbook (typescriptlang.org).
- react.dev — the official React docs.
- web.dev — performance and accessibility.
- Astro docs (docs.astro.build) — you're already using it.

## Connects to

03 (backend for the web app), 04 (web analytics/experiments), 07 (AI features
are often web-first), 01 (agents are strongest on web stacks — a good place to
push AG6 parallel workflows).
