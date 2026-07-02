---
name: patchline-adr
description: Manage Patchline architectural decision records. Use when adding, updating, superseding, or checking durable project decisions in docs/decisions, especially for architecture, tooling, workflow boundaries, infrastructure, documentation policy, or agent/n8n/MAF ownership changes.
---

# Patchline ADR

Use this skill to keep Patchline decisions durable, explicit, and current.

## Sources To Read

Before changing ADRs, read:

- `docs/documentation-strategy.md`
- `docs/decisions/README.md`
- existing ADRs in `docs/decisions/`

Read related docs when the decision affects them:

- `docs/project-brief.md`
- `docs/roadmap.md`
- `docs/n8n-friction-log.md`
- folder-level `AGENTS.md`

## Workflow

1. Determine whether the change needs an ADR.
2. Search existing ADRs for the same decision area.
3. Update an existing ADR when the decision is being clarified.
4. Create a new ADR when the decision is materially new.
5. Supersede old ADRs when the new decision changes previous guidance.
6. Update related docs only when execution guidance changes.

## ADR Criteria

Create or update an ADR for:

- technology choices,
- ownership boundaries,
- architecture shape,
- workflow extraction decisions,
- infrastructure decisions,
- documentation conventions,
- security/auth/secrets decisions,
- durable changes to local development or deployment strategy.

Do not create an ADR for:

- transient implementation notes,
- unaccepted ideas,
- ordinary bug fixes,
- small wording changes,
- decisions already captured accurately elsewhere.

## ADR Format

Use `references/adr-template.md`.

Required fields:

- title,
- date,
- status,
- context,
- decision,
- consequences,
- related docs.

Use status values:

- `proposed`
- `accepted`
- `superseded`

## Naming

Name files with the next numeric prefix:

```text
0004-short-kebab-title.md
```

Keep titles short and stable.

## Consistency Check

After editing ADRs:

- verify links are relative and valid,
- update superseded ADR status when needed,
- update `docs/roadmap.md` or relevant `AGENTS.md` only if the decision changes how agents should work,
- avoid duplicating long explanations across docs.
