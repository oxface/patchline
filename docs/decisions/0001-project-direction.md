# 0001: Project Direction

Date: 2026-07-02

## Context

The project is intended to maximize learning around modern AI systems, not to spend another year rebuilding generic workflow infrastructure.

The desired learning areas include n8n, Microsoft Agent Framework, MCP, tool use, HITL, evals, memory, observability, local orchestration, and later k3s/GitOps.

## Decision

Build Patchline as a local-first training project for internal engineering automation.

Start with n8n-native workflows. Extract complexity into code only after the n8n implementation exposes concrete friction.

## Consequences

- The first workflow should be implemented in n8n before custom application code.
- Custom Python/FastAPI/MAF code is deferred until earned.
- The project does not aim to become a generic workflow platform.
