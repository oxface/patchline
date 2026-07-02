---
name: patchline-behavior
description: Manage Patchline workflow behavior specifications. Use when defining, updating, or reviewing concrete workflow behavior such as Intake Desk, n8n flows, HITL continuation, approvals, side effects, failure modes, and evaluation cases.
---

# Patchline Behavior

Use this skill to capture testable workflow behavior without adopting a heavy SDD framework.

## Sources To Read

Before changing behavior specs, read:

- `docs/project-brief.md`
- `docs/roadmap.md`
- `docs/documentation-strategy.md`
- `docs/n8n-friction-log.md`

Read related ADRs in `docs/decisions/` when behavior changes boundaries or ownership.

## Workflow

1. Identify the concrete workflow being described.
2. Search `docs/behaviors/` for an existing spec.
3. Update the existing spec when behavior changes.
4. Create a new spec only for a distinct workflow.
5. Add evaluation cases when expected behavior is stable enough to test.
6. Add an ADR only if behavior changes architecture or ownership boundaries.

## Behavior Spec Criteria

Create or update a behavior spec for:

- user-visible workflow behavior,
- n8n workflow behavior,
- human-in-the-loop continuation,
- approval points,
- external side effects,
- failure and retry behavior,
- evaluation cases.

Do not create a behavior spec for:

- low-level implementation details,
- speculative future workflows,
- purely architectural choices better captured by ADRs.

## Behavior Format

Use `references/behavior-template.md`.

Required sections:

- purpose,
- actors,
- trigger,
- inputs,
- happy path,
- continuation path,
- approval points,
- side effects,
- failure modes,
- evaluation cases,
- open questions.

## Consistency Check

After editing behavior specs:

- update `docs/roadmap.md` if milestone scope changed,
- update `docs/n8n-friction-log.md` when behavior exposes n8n friction,
- update ADRs only for durable architecture decisions,
- keep workflow facts in one place and link to them elsewhere.
