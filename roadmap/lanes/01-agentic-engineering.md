# 01 · Agentic engineering

**Status:** Season 1 primary · always on afterwards

## Why this matters for you

Software engineering is shifting from "writing code" toward "directing,
reviewing and automating the writing of code". The engineers who stay in
demand are the ones who can (a) get reliable work out of agents in a real
codebase, (b) automate their team's practices, and (c) build agentic tools
themselves. You were already pushing AI-assisted workflows at BookMyShow, and
you built Mockcat — a developer-productivity tool. This lane is that same
instinct, scaled up.

Three levels, roughly in order:

1. **Use** agents well — context, instructions, task sizing, review.
2. **Automate** practices with agents — skills/commands, hooks, CI bots.
3. **Build** agentic tools — MCP servers, agents on an SDK, evals.

## Good enough looks like

You can hand an agent a well-scoped ticket in an unfamiliar codebase and get a
mergeable PR most of the time; you know *why* it fails when it fails; your
team uses at least one automation you built; and you've shipped an MCP server
other people can install.

## Milestones

- [ ] **AG1 — Teach an agent your codebase.** Write an `AGENTS.md`/`CLAUDE.md`
  for Mockcat (or Quiet): build/test commands, architecture, conventions,
  gotchas. *Artifact:* the committed file.
- [ ] **AG2 — Five real tasks, one honest log.** Do 5 real tasks end to end
  with an agent (a bug, a feature, a refactor, tests, a migration). Log for
  each: what you asked, what it got wrong, what context fixed it.
  *Artifact:* article — "What coding agents get wrong in Android codebases (and how I fixed my prompts)".
- [ ] **AG3 — Encode a practice as a skill.** Turn something you repeat into a
  reusable skill/slash command — e.g. "write unit tests in our team's style",
  "add a payment instrument", "prepare a PR description". *Artifact:* the skill, used at least 3 times.
- [ ] **AG4 — Agents in the loop.** Hooks that run Detekt/tests after edits,
  plus an agent in GitHub Actions (PR review or auto-fixing lint) on one of
  your repos. *Artifact:* a working workflow file and one PR it acted on.
- [ ] **AG5 — Build an MCP server: Mockcat MCP.** Let an agent read Mockcat's
  HTTP logs and create mock rules on a device/emulator ("make the payments
  call return a 500 and check the error screen"). Kotlin or TypeScript.
  *Artifact:* open-source MCP server + README + a demo GIF. *This is a
  genuinely novel tool — a great talk topic.*
- [ ] **AG6 — Parallel agents.** Run 2–3 agents at once on separate worktrees
  / background sessions; learn task decomposition and review at speed.
  *Artifact:* short write-up of a before/after on one real chunk of work.
- [ ] **AG7 — Evals.** Build a small eval set for one agent task (e.g. "generated
  unit test compiles and passes", 20 cases) and use it to compare prompts or
  models. *Artifact:* eval repo/script + results table.
- [ ] **AG8 — Build an agent.** Use an agent SDK (e.g. the Claude Agent SDK) to
  build a small standalone agent: crash-report triage, release-notes writer,
  or "explain this PR to QA". *Artifact:* working agent + article.
- [ ] **AG9 — Change a team practice.** Bring one automation from AG3–AG8 to
  your eBay team and get it adopted. *Artifact:* internal demo or talk.

## Resources

- Your agent tool's official docs (e.g. Claude Code docs: memory/CLAUDE.md,
  skills, hooks, subagents, GitHub Actions).
- Anthropic — "Building effective agents" (essay; patterns vs. agents).
- Model Context Protocol docs and SDKs (modelcontextprotocol.io).
- Simon Willison's blog — practical, honest notes on working with LLMs.

## Connects to

Everything. Do the iOS (02) and backend (03) milestones *with* an agent and
note what changes when you're learning a language you don't know yet. AG5
uses Mockcat; AG7 feeds into 07 (AI/ML evals).
