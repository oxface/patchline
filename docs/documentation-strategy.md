# Documentation Strategy

Patchline uses reference-based context.

## Purpose

The repository should be easy for both humans and AI coding agents to navigate without duplicating project facts across many files.

## Rules

- Every significant folder should have a `README.md` for human orientation.
- Every significant folder should have an `AGENTS.md` for AI-agent instructions.
- Durable context belongs in `docs/`.
- Folder-level files should reference durable docs instead of repeating them.
- Decisions belong in `docs/decisions/`.
- Concrete workflow behavior belongs in `docs/behaviors/`.
- If a local instruction conflicts with a durable decision, update the durable decision or call out the conflict.

## Significant Folder

A folder is significant when it contains a separately understandable concern, such as:

- an application,
- infrastructure,
- workflows,
- evaluations,
- durable documentation,
- reusable packages.

## Anti-Pattern

Do not copy the full architecture or roadmap into every folder. Point to the durable source and add only folder-specific guidance.
