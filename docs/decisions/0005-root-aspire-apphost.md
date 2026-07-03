# 0005: Root Aspire AppHost

Date: 2026-07-03
Status: accepted

## Context

Aspire TypeScript initialization treats the AppHost as the composition root for the workspace. When initialized in a non-empty repository, the CLI may generate a nested AppHost folder such as `aspire-app`.

Patchline originally considered `infra/aspire`, but the generated shape showed that hiding the AppHost under `infra/` fights Aspire's conventions and creates a nested mini-repository.

## Decision

Use a root-level Aspire TypeScript AppHost:

- `apphost.mts`,
- `aspire.config.json`,
- `tsconfig.apphost.json`,
- `.aspire/modules/`,
- root `package.json` scripts.

Use `infra/` for deployment infrastructure such as k3s and Argo CD, not for the local Aspire composition host.

## Consequences

- `pnpm dev` runs the root AppHost.
- Aspire-generated sample app folders are not kept.
- `.aspire/modules/` is source-controlled because `apphost.mts` imports it.
- `.aspire/integrations/` remains ignored as generated restore/runtime state.

## Related Docs

- [../roadmap.md](../roadmap.md)
- [0004-repo-tooling.md](0004-repo-tooling.md)

