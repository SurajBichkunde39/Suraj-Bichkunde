# 03 · Backend

**Status:** Season 2 primary (planned)

## Why this matters for you

You moved Order Summary and Payments logic *out of the app and onto the
backend* — you've designed half of a client/server contract many times.
Building the other half turns you from someone who consumes APIs into someone
who designs systems. It's also the prerequisite for Cloud (05), SRE (06), and
most AI application work (07). Kotlin on the server (Ktor, Spring Boot) means
no new language — just new problems.

## Good enough looks like

You can design, build, test and run a production-shaped service: HTTP API,
relational database with migrations, auth, caching, background work,
idempotency, and a design doc explaining the trade-offs.

## Milestones

- [ ] **BE1 — Hello, Ktor.** A small REST service: routing, serialization,
  validation, error handling, tests with the Ktor test host.
  *Artifact:* repo with green CI.
- [ ] **BE2 — SQL and Postgres, for real.** Schema design, joins, indexes,
  transactions, `EXPLAIN`. Migrations with Flyway; Exposed or jOOQ.
  *Artifact:* the service backed by Postgres via Docker Compose.
- [ ] **BE3 — SDUI Lab server.** Serve layout JSON for a screen (think: an
  Order Summary), with schema versioning so old app versions keep working.
  Android and iOS clients from MP6 render it. *Artifact:* end-to-end demo video.
- [ ] **BE4 — Auth and caching.** JWT/OAuth basics, rate limiting, Redis
  caching with sensible invalidation. *Artifact:* article on cache
  invalidation from the mobile *and* server side (you did API caching at BMS).
- [ ] **BE5 — Payments-style correctness.** Idempotency keys, retries,
  exactly-once-ish processing with an outbox/queue. A mock payments service
  that survives duplicate requests and crashes. *Artifact:* repo + article —
  your payments background makes this a unique story.
- [ ] **BE6 — Spring Boot exposure.** Re-implement one slice of the service in
  Spring Boot — the industry default in many companies. *Artifact:* a
  comparison note: Ktor vs. Spring Boot.
- [ ] **BE7 — Contracts.** OpenAPI spec, generated clients for Android/iOS,
  contract tests. *Artifact:* generated client used by SDUI Lab.

## Resources

- Ktor docs (ktor.io), Spring Boot guides (spring.io/guides).
- *Designing Data-Intensive Applications* — Martin Kleppmann. Slowly, one
  chapter per milestone or two.
- Use The Index, Luke (use-the-index-luke.com) — SQL indexing.
- Brandur Leach's blog — idempotency keys, Postgres in production.

## Connects to

02 (clients for the server), 04 (feature flags/experiments are served from
here), 05 (deploy it), 06 (observe it), 07 (LLM features live here), 08 (web
editor talks to it), 09 (design docs).
