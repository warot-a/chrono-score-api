# chrono-api

![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-4169E1?logo=postgresql&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-1.0-FE0803?logo=typeorm&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-package%20manager-F69220?logo=pnpm&logoColor=white)

A REST API that exposes FIFA World Cup 2026 data stored in a PostgreSQL database.

Data is sourced from [football-data.org](https://www.football-data.org/).

## Tech Stack

- **Runtime**: Node.js
- **Framework**: NestJS 11
- **Language**: TypeScript
- **ORM**: TypeORM
- **Database**: PostgreSQL (via Supabase)
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app.module.ts          # Root module
├── app.controller.ts      # Root controller
├── app.service.ts         # Root service
├── main.ts                # Entry point
└── sports/                # Sports feature module
    ├── sports.module.ts
    ├── sports.controller.ts
    ├── sports.service.ts
    └── sports.entity.ts
test/                      # E2E tests
```

## Commands

```bash
pnpm install          # Install dependencies
pnpm run start:dev    # Run in watch mode
pnpm run build        # Compile to dist/
pnpm run start:prod   # Run compiled output

pnpm run test         # Unit tests
pnpm run test:e2e     # E2E tests
pnpm run test:cov     # Coverage report

pnpm run lint         # Lint + auto-fix
pnpm run format       # Prettier format
```

## Environment

Create a `.env` file with your PostgreSQL connection string:

```env
DATABASE_URL=postgresql://user:password@host:5432/database
```
