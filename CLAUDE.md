# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: How to Assist

**Do not modify files or run CLI commands autonomously.** Except \*.md files, when asked to implement something, show the user the code snippets and commands to run, then let the user apply them. Only read and analyze files — never write, edit, or execute on the user's behalf unless explicitly asked.

## Stack

NestJS 11 + TypeScript, using `pnpm` as the package manager. Supabase is listed as a dev dependency, indicating planned database integration.

## Commands

```bash
pnpm install          # install dependencies
pnpm run start:dev    # run in watch mode (development)
pnpm run build        # compile to dist/
pnpm run start:prod   # run compiled output

pnpm run test                        # unit tests (src/**/*.spec.ts)
pnpm run test:watch                  # unit tests in watch mode
pnpm run test:e2e                    # e2e tests (test/jest-e2e.json)
pnpm run test:cov                    # coverage report

pnpm run lint         # lint + auto-fix
pnpm run format       # prettier format
```

To run a single test file:

```bash
pnpm run test -- --testPathPattern=app.controller
```

## Architecture

Standard NestJS module structure under `src/`. Each feature lives in its own module folder with a controller, service, and module file. The root `AppModule` (`src/app.module.ts`) imports all feature modules.

- Controllers handle HTTP routing and request/response shaping.
- Services contain business logic and are injected via NestJS DI.
- Modules declare which controllers and providers belong to a feature and what they export for other modules.

Entry point is `src/main.ts`. E2E tests live in `test/` and use a separate Jest config (`test/jest-e2e.json`).
