# Server Agent Instructions

Before adding server code, read:

- `docs/roadmap.md`
- `docs/n8n-friction-log.md`
- `docs/decisions/0002-n8n-first-boundary.md`

Use vertical slices rather than broad Clean Architecture scaffolding. Keep code close to the workflow that earned it.

When this folder becomes active:

- use uv for Python dependency management,
- use Pyright for type checking,
- use Ruff for formatting/linting,
- keep MAF integration behind workflow-specific modules.
