# Patchline Agent Instructions

## Read First

Before making changes, read:

- [docs/project-brief.md](docs/project-brief.md)
- [docs/roadmap.md](docs/roadmap.md)
- [docs/documentation-strategy.md](docs/documentation-strategy.md)

## Working Principles

- Do not rebuild n8n capabilities in code just because code is familiar.
- Start with n8n-native workflows and extract complexity only when friction is observed.
- Keep durable decisions in `docs/decisions/`.
- Use folder-level `README.md` for human orientation and `AGENTS.md` for agent-specific instructions.
- Prefer references to durable docs over duplicating project facts.
- Keep early implementation local-first and cost-aware.

## Repo-Local Skills

Use repo-local skills when maintaining durable docs:

- Use `.agents/skills/patchline-adr` for architectural decision records.
- Use `.agents/skills/patchline-behavior` for concrete workflow behavior specifications.

## Current Technical Direction

- pnpm for the TypeScript app workspace.
- npm for `apphost/`, because Aspire runs the TypeScript AppHost as an isolated package.
- uv for Python projects.
- Podman as the local container runtime.
- nested `apphost/` Aspire TypeScript AppHost for local orchestration.
- n8n plus Postgres for the first runtime.
- Microsoft Agent Framework later, once a workflow earns a code-native agent layer.
- k3s and Argo CD after the local workflow shape is understood.

## Boundaries

n8n should own connector and workflow mechanics: triggers, waits, webhook callbacks, GitHub issue creation, notifications, and simple branching.

Patchline code should own semantic or stateful complexity only when needed: structured reasoning, memory, RAG, evaluations beyond n8n-native support, durable HITL agent workflows, and portal views.
