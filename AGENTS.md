# Repository Guidelines

## Project Structure & Module Organization
- `src/` — application source (Next.js App Router: `src/app/`).
- `src/app/layout.tsx` — global layout; imports `src/index.css` and `src/styles/globals.css`.
- `src/app/page.tsx` — homepage entry; rend `src/App.tsx`.
- `src/App.tsx` — page composition root reused by `page.tsx`.
- `src/components/` — React components (UI primitives under `src/components/ui/`).
- `src/constants/` — static data and helpers (e.g., `images.ts`).
- `src/styles/` and `src/index.css` — global styles.
- `src/guidelines/` — project content docs (e.g., `Guidelines.md`).
- `.next/` — Next.js build output (generated; do not edit).
- Config: `next.config.mjs`, `tsconfig.json`.
- Assets: `favicon/`, images referenced from `src/constants/images.ts`.

## Build, Test, and Development Commands
- `npm run dev` — start Next.js dev server on `http://localhost:3000`.
- `npm run build` — build production in `.next/`.
- `npm start` — run the production server.

## Coding Style & Naming Conventions
- Language: TypeScript + React (`.tsx` for components).
- Indentation: 2 spaces; prefer double quotes to match existing files.
- Components: PascalCase filenames and named exports (e.g., `export function Header()` in `src/components/Header.tsx`).
- Utilities/hooks: camelCase filenames (e.g., `use-mobile.ts`).
- Imports: use path alias `@/` (configured in `tsconfig.json`).
- Keep UI primitives colocated under `src/components/ui/`; avoid cross‑coupling.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests alongside code (`Component.test.tsx`) or under `src/**/__tests__/`.
- Keep tests focused and deterministic; snapshot only for stable UI.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`.
- Scope small, focused commits; write imperative, present‑tense subjects.
- PRs must include: concise description, linked issues, screenshots/GIFs for UI changes, and manual test notes.
- Update docs when structure or behaviors change (e.g., components, assets, build settings).

## Security & Configuration Tips
- Do not commit secrets. If env vars are introduced, document `.env*` usage and git‑ignore them.
- This is a client‑side app; validate and sanitize any future user input.
- Maintain licenses/credits for assets; update `src/Attributions.md` when adding images or icons.
