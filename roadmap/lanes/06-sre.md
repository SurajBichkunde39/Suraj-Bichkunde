# 06 · SRE & reliability

**Status:** Parked until Season 3 (after Cloud & DevOps)

## Why this matters for you

Reliability is where seniority shows: knowing what "working" means in
numbers, noticing when it isn't, and fixing the system rather than the
symptom. You already live this on mobile — crash-free rate, ANRs, payment
success rate on an app used by millions. This lane gives you the server-side
vocabulary and tools, and ties both sides together.

## Good enough looks like

Your service has SLIs/SLOs, dashboards, alerts that matter, a runbook, and
you've run a practice incident with a blameless postmortem. You can do the
same for a mobile app.

## Milestones

- [ ] **SR1 — Mobile reliability, measured.** Define SLIs for one of your apps
  (crash-free users, ANR rate, cold start time, key-flow success) and track
  them for a month. *Artifact:* a dashboard + article bridging mobile and SRE thinking.
- [ ] **SR2 — Observability.** Structured logs, metrics, and traces with
  OpenTelemetry on SDUI Lab; a Grafana (or cloud-native) dashboard.
  *Artifact:* dashboard screenshot + the trace of one request client → server → DB.
- [ ] **SR3 — SLOs and error budgets.** Define 2–3 SLOs for SDUI Lab; alert on
  burn rate, not on every error. *Artifact:* SLO doc.
- [ ] **SR4 — Load test.** Use k6 to find the first bottleneck; fix it;
  measure again. *Artifact:* before/after numbers.
- [ ] **SR5 — Chaos with Mockcat.** Use Mockcat to inject failures and delays
  on the client side and verify the app degrades gracefully; do the same
  server-side. *Artifact:* article — a reliability use of your own tool.
- [ ] **SR6 — Incident practice.** Break something on purpose, respond using
  only your alerts and runbook, write a blameless postmortem.
  *Artifact:* runbook + postmortem.

## Resources

- Google — *Site Reliability Engineering* and *The Site Reliability Workbook*
  (both free at sre.google); start with the SLO chapters.
- OpenTelemetry docs.
- Grafana k6 docs.

## Connects to

03 + 05 (the thing being made reliable), 02 (mobile reliability), 01 (an
agent that triages alerts or crash reports is a great AG8 candidate).
