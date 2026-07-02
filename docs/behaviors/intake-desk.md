# Intake Desk

Status: draft

## Purpose

Turn a messy chat-based issue report into a useful GitHub issue after clarification and human approval.

## Actors

- Reporter: sends the initial issue report and follow-up answers.
- Approver: approves GitHub issue creation.
- n8n: receives messages, runs workflow steps, waits/resumes, and creates GitHub issues.
- Ollama-backed n8n AI nodes: classify and extract issue details in the n8n-native MVP.
- GitHub: receives the final issue in a sandbox repository.

## Trigger

A real Telegram message is sent to the Patchline intake bot.

## Inputs

Required:

- reporter message text,
- Telegram chat or thread identity,
- GitHub sandbox repository target.

Inferred:

- issue classification,
- title,
- summary,
- missing information,
- readiness for issue creation.

## Happy Path

1. Reporter sends an issue report through Telegram.
2. n8n receives the real trigger.
3. n8n normalizes the message.
4. n8n AI/Ollama nodes classify the report and extract issue fields.
5. If enough information exists, n8n drafts a GitHub issue.
6. n8n asks for approval.
7. Approver approves issue creation.
8. n8n creates a GitHub issue in the sandbox repository.
9. n8n records the result in execution history.

## Continuation Path

If required information is missing:

1. n8n generates a follow-up question.
2. n8n sends the question to the reporter.
3. n8n waits using native continuation where possible.
4. Reporter answers.
5. n8n resumes or correlates the answer to the pending intake flow.
6. n8n re-evaluates readiness.

The exact continuation pattern is intentionally part of Milestone 1 discovery.

## Approval Points

GitHub issue creation requires explicit approval before the side effect occurs.

Later Codex handoff or implementation drafting must require a separate approval.

## Side Effects

- Telegram messages may be sent.
- GitHub issues may be created in a sandbox repository.

## Failure Modes

- Telegram trigger is unavailable.
- n8n cannot reach Ollama.
- AI output is incomplete or invalid.
- The continuation reply cannot be correlated.
- Approval is denied or expires.
- GitHub issue creation fails.

## Evaluation Cases

| Case          | Input                                                                 | Expected Behavior                                               |
| ------------- | --------------------------------------------------------------------- | --------------------------------------------------------------- |
| Clear bug     | "Checkout page crashes when I click Pay after entering a valid card." | Draft issue without clarification and request approval.         |
| Missing repro | "Login is broken."                                                    | Ask for reproduction steps or observed behavior.                |
| Non-issue     | "Can someone explain how releases work?"                              | Classify as question, do not create bug issue without approval. |

## Open Questions

- Should Telegram follow-up use native n8n Wait resume URL, a form, buttons, or a separate correlating trigger?
- How reliable is n8n-native structured output for this workflow?
- How usable are n8n-native evaluations for regression testing?
