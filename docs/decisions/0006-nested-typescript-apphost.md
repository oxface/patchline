# 0006: Nested TypeScript AppHost

Date: 2026-07-03
Status: accepted

## Context

Aspire documentation for TypeScript AppHost project structure says that when `aspire init --language typescript` runs in an existing JavaScript or TypeScript app with a root `package.json`, Aspire creates the AppHost in a nested package. The root `aspire.config.json` points to the nested AppHost, while root `package.json` keeps delegate scripts.

Patchline has a root monorepo `package.json`, so the existing-app pattern fits better than a root-level AppHost.

## Decision

Use `apphost/` as the TypeScript Aspire AppHost package.

The root repository keeps:

- `aspire.config.json`,
- lightweight Aspire delegate scripts in `package.json`,
- pnpm workspace membership for application packages under `apps/`.

The AppHost package keeps:

- `apphost.mts`,
- `tsconfig.apphost.json`,
- `.aspire/modules/` locally after `aspire restore` or `aspire run`,
- AppHost-specific package dependencies,
- npm package management for the AppHost package.

## Consequences

- The repo follows Aspire's documented existing-app shape.
- Root package dependencies stay focused on repo tooling.
- AppHost-specific dependencies live in `apphost/package.json`.
- The AppHost uses npm instead of pnpm because Aspire runs TypeScript AppHost dependency installation from the AppHost directory, and pnpm build approvals conflict with that isolated install path.
- Generated `.aspire/modules/` remains under the AppHost package locally and should not be edited by hand.
- The AppHost `.aspire/` tree is ignored because Aspire can regenerate it from `aspire.config.json`.

## Related Docs

- [../roadmap.md](../roadmap.md)
- [0004-repo-tooling.md](0004-repo-tooling.md)
- [0005-root-aspire-apphost.md](0005-root-aspire-apphost.md)
