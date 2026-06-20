# NestJS + PostgreSQL Learning Plan

Database: Supabase (managed PostgreSQL)
ORM: TypeORM via `@nestjs/typeorm` — connected directly via connection string, not tied to Supabase SDK

---

## Phase 0 — NestJS CLI Basics (Dummy Data)

Goal: Get familiar with the NestJS CLI and the Module → Service → Controller flow without a database

1. Install `@nestjs/cli` and learn `nest generate` (`nest g`)
2. `nest g module sports` / `nest g controller sports` / `nest g service sports`
3. Return dummy data from Service → Controller → HTTP response
4. What you'll learn: CLI scaffolding, module structure, Dependency Injection flow

---

## Phase 1 — Database Connection & First Module

Goal: Connect NestJS to Supabase PostgreSQL and build the first endpoint from real data

1. Install `@nestjs/typeorm` + `typeorm` + `pg`
2. Create a `DatabaseModule` and configure the connection via `DATABASE_URL`
3. Create an Entity for the `sports` table
4. Update `SportsModule` to fetch data from the DB instead of dummy data
5. What you'll learn: TypeORM Entity, Repository pattern, environment config

---

## Phase 2 — Basic CRUD + Query Params

Goal: Learn how to accept input from requests in various forms

1. Create `TeamsModule` → `GET /teams`, `GET /teams/:code`
2. Create `VenuesModule` → `GET /venues`, `GET /venues/:id`
3. Create `TournamentsModule` → `GET /tournaments`, `GET /tournaments/:slug`
4. Add `GET /matches?status=&stage=&date=&group=` with filtering
5. What you'll learn: `@Query()`, `@Param()`, DTO validation with `class-validator`

---

## Phase 3 — Relations & Nested Resources

Goal: Handle foreign keys and cross-table joins

1. `GET /tournaments/:slug/teams` — teams in a tournament with group_letter
2. `GET /tournaments/:slug/matches` — matches with home_team, away_team, venue (JOIN)
3. `GET /teams/:code/matches` — matches for a team (home or away)
4. `GET /venues/:id/matches` — matches held at that venue
5. `GET /matches/:id` — match detail including lineups + match_events (JSONB)
6. What you'll learn: nested routes, TypeORM relations, JOIN queries, mapping JSONB fields

---

## Phase 4 — Computed Endpoints & Business Logic

Goal: Write more complex service logic beyond basic CRUD

1. `GET /matches/live` — filter matches with status LIVE
2. `GET /tournaments/:slug/standings` — compute group stage standings from match results
   - Calculate W/D/L, points, GF, GA, GD, and sort
3. What you'll learn: business logic in the Service layer, computed responses, custom response shapes

---

## Phase 5 — Error Handling & Response Shaping

Goal: Make the API production-ready

1. `NotFoundException` when a record is not found
2. Custom exception filter for database errors
3. Response interceptor to wrap responses in `{ data: ..., meta: ... }`
4. Pagination via `?page=&limit=`
5. What you'll learn: `HttpException`, `ExceptionFilter`, `Interceptor`, `Pipe`

---

## Phase 6 — Testing

Goal: Write comprehensive tests

1. Unit tests for `StandingsService` (standings calculation logic)
2. E2E test for `GET /matches?status=LIVE`
3. Mock TypeORM Repository in unit tests
4. What you'll learn: `jest`, `supertest`, `TestingModule`, mocking DI providers

---

## Recommended Module Build Order

sports → teams → venues → tournaments → matches → standings

## ORM Note

Use TypeORM connected directly via a PostgreSQL connection string.
Supabase is just a managed PostgreSQL host — switching providers only requires changing `DATABASE_URL`.
Do not use `@supabase/supabase-js` for data queries as it couples you to the Supabase PostgREST API.
