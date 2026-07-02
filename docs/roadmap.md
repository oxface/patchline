# Roadmap

## Milestone 0: Local Runtime

Goal: run the local automation base before writing custom application code.

- Validate Git, pnpm, uv, and Podman.
- Install root pnpm workspace dependencies.
- Initialize Husky commit hooks.
- Validate Podman exposes a Docker-compatible socket usable by Aspire.
- Create Aspire TypeScript AppHost.
- Run n8n with Postgres.
- Confirm n8n can reach Ollama on the Windows host.
- Confirm n8n workflow exports can be source controlled.

## Milestone 1: n8n-Native Intake Desk

Goal: build the first useful workflow entirely in n8n.

- Telegram real trigger through an outbound tunnel.
- Normalize report text.
- Use n8n AI/Ollama node to classify and extract issue fields.
- Ask follow-up when information is missing.
- Resume the flow through n8n-native continuation.
- Ask for approval before creating a GitHub issue.
- Create a real issue in a sandbox GitHub repository.

## Milestone 1.5: n8n-Native Evaluations

Goal: understand n8n-native evaluation before creating a Python eval harness.

- Create sample issue reports.
- Run them through n8n Evaluation Trigger.
- Record metrics for classification, missing-field detection, and issue readiness.
- Capture evaluation friction.

## Milestone 2: Friction Report

Goal: decide what should stay in n8n and what should move into Patchline code.

Assess:

- chat continuation,
- prompt management,
- structured output validation,
- source control,
- evals,
- observability,
- secrets,
- reuse across workflows.

## Milestone 3: First Code-Native Slice

Goal: extract only complexity that n8n has earned.

Likely stack:

- Python,
- FastAPI,
- Pydantic,
- SQLAlchemy or SQLModel,
- Pyright,
- Ruff,
- pytest,
- Microsoft Agent Framework.

## Later

- MAF Durable HITL spike.
- TanStack web portal.
- Custom n8n nodes if repeated HTTP nodes become noisy.
- k3s and Argo CD deployment.
