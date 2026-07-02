# 0004: Repo Tooling

Date: 2026-07-03
Status: accepted

## Context

Patchline is a mixed-stack learning repository. It will use TypeScript for local orchestration and future frontend work, Python for future FastAPI/MAF work, and n8n workflow exports.

The repo needs early formatting, commit discipline, and release automation without generating full application templates before the first n8n-native workflow is understood.

## Decision

Use:

- pnpm workspaces for TypeScript packages,
- uv for Python projects,
- Prettier for shared formatting,
- ESLint for TypeScript/JavaScript linting,
- Husky and lint-staged for early commit hooks,
- commitlint with Conventional Commits,
- Release Please for changelog and release PRs,
- Pyright and Ruff for Python once `apps/server` becomes active.

Release Please uses the `node` strategy at the repository root so the root `package.json` version is bumped. It also updates `apps/server/pyproject.toml` through `extra-files` while Patchline still uses one repo-level release.

Keep app folders lightweight placeholders until workflow friction earns implementation.

## Consequences

- The initial scaffold includes repo hygiene and placeholder folders.
- Dependency installation is a Day 0 local setup task.
- The first runtime milestone remains n8n and Aspire focused.

## Related Docs

- [../day-0-checklist.md](../day-0-checklist.md)
- [../roadmap.md](../roadmap.md)
