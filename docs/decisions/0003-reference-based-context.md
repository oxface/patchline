# 0003: Reference-Based Context

Date: 2026-07-02

## Context

The repository will be used by humans and AI coding agents. Duplicating architecture and project facts across many folder-level files would create drift.

## Decision

Use reference-based context.

Every significant folder should have:

- `README.md` for human orientation,
- `AGENTS.md` for AI-agent instructions.

Durable project facts live under `docs/`, and folder-level files should reference those docs rather than duplicating them.

## Consequences

- Documentation should be small and linked.
- New folder-level guidance should describe only local concerns.
- Durable decisions should be updated when project direction changes.
