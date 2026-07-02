# Patchline

Patchline is a local-first learning project for building internal engineering automation with modern AI system patterns.

The project starts with n8n-native workflows. When a workflow becomes difficult to test, reason about, version, observe, or evolve, Patchline extracts that specific complexity into code. The goal is not to rebuild n8n or create a generic workflow product; the goal is to learn how a real organization can combine low-code automation, agent systems, evaluation, observability, and local deployment.

## Current Direction

- Use n8n as the first workflow and integration surface.
- Start with a Telegram-to-GitHub intake workflow.
- Use real local infrastructure: n8n, Postgres, Podman, Aspire, Ollama, and later k3s.
- Add custom Python/FastAPI/Microsoft Agent Framework code only when n8n-native implementation exposes real friction.
- Source-control durable decisions and workflow exports.

## Documentation

This repository uses reference-based context:

- `README.md` files are for human orientation.
- `AGENTS.md` files are for AI agent instructions.
- Durable decisions and shared context live under [`docs/`](docs/).
- Folder-level docs should reference durable docs instead of duplicating facts.

Start with:

- [Project Brief](docs/project-brief.md)
- [Roadmap](docs/roadmap.md)
- [Documentation Strategy](docs/documentation-strategy.md)

## Repository Shape

- `apps/`: future Patchline application code.
- `infra/`: local and deployment infrastructure.
- `workflows/`: source-controlled workflow exports.
- `evals/`: evaluation artifacts.
- `docs/`: durable project documentation.
- `.agents/skills/`: repo-local Codex skills for ADRs and behavior specs.
