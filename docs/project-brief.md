# Project Brief

Patchline is a training project for learning practical AI systems through internal engineering automation.

## Goal

Learn modern AI and automation system patterns by building useful local-first workflows:

- n8n-native automation,
- Microsoft Agent Framework,
- MCP/tool integration,
- human-in-the-loop workflows,
- evals and regression testing,
- memory and context management,
- observability and tracing,
- local orchestration with Aspire,
- later deployment to k3s and Argo CD.

## Non-Goals

- Do not build a generic workflow engine.
- Do not rebuild n8n.
- Do not make a reusable SaaS product.
- Do not introduce cloud-hosted agent infrastructure before local patterns are understood.

## First Product Workflow

The first workflow is Intake Desk:

1. A user reports an issue through Telegram.
2. n8n receives the real trigger.
3. n8n classifies and extracts issue details using native AI/Ollama nodes.
4. The workflow asks for missing information when needed.
5. The workflow asks for approval before side effects.
6. n8n creates a real GitHub issue in a sandbox repository.
7. n8n-native evals measure classification and extraction behavior.

Only after this workflow exposes real friction should Patchline add custom Python/FastAPI/MAF code.
