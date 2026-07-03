# Day 0 Checklist

## Local Tools

- Install Git and confirm `git --version`.
- Install pnpm and confirm `pnpm --version`.
- Install uv and confirm `uv --version`.
- Install Podman Desktop.
- Confirm Podman exposes a Docker-compatible socket usable by Aspire.
- Confirm Ollama is running on the Windows host.

## Repository Setup

- Run `pnpm install`.
- Run `pnpm prepare` to initialize Husky.
- Confirm `pnpm format:check` works.
- Confirm Conventional Commit validation works.
- Confirm `pnpm run aspire:build` works.

## Runtime Setup

- Start n8n locally through the root Aspire AppHost or directly.
- Start Postgres locally.
- Confirm n8n can connect to Postgres.
- Confirm n8n can call Ollama.
- Choose an outbound tunnel tool for Telegram webhook testing.

## External Accounts

- Create Telegram bot.
- Create or choose GitHub sandbox repo.
- Create GitHub credential with minimal issue permissions.
- Store all credentials in n8n or local secret configuration.
