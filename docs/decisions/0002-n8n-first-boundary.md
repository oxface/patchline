# 0002: n8n-First Boundary

Date: 2026-07-02

## Context

n8n already handles many workflow, trigger, connector, wait, and integration concerns. Replacing those with Python code would make the project harder without improving learning value.

## Decision

n8n owns connector and workflow mechanics. Patchline code owns semantic and stateful complexity only when needed.

## n8n Owns

- chat and webhook triggers,
- connector calls,
- wait/resume mechanics,
- GitHub issue creation,
- notifications,
- simple branching,
- simple LLM transformations.

## Patchline Code May Own Later

- reusable semantic intake analysis,
- structured output validation,
- Microsoft Agent Framework orchestration,
- RAG and memory,
- eval harnesses that exceed n8n-native evals,
- durable HITL agent workflows,
- portal views over cases, approvals, traces, and runs.

## Rule

If the step moves known data from A to B, n8n should probably own it. If the step asks what the data means and what should happen next, MAF may earn ownership.
