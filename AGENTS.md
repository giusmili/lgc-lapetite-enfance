# Repository Guidelines

## Project Structure & Module Organization
- `src/` — application source (entry: `src/main.tsx`, root: `src/App.tsx`).
- `src/components/` — React components (UI primitives under `src/components/ui/`).
- `src/constants/` — static data and helpers (e.g., `images.ts`).
- `src/styles/` and `src/index.css` — global styles.
- `src/guidelines/` — project content docs (e.g., `Guidelines.md`).
- `build/` — Vite production output (generated; do not edit).
- Config: `vite.config.ts`, `tsconfig.json`.
- Assets: `favicon/`, images referenced from `src/constants/images.ts`.

## Build, Test, and Development Commands
- `npm run dev` — start Vite dev server on `http://localhost:3000` and open the browser.
- `npm run build` — create a production build in `build/`.
- `npx vite preview` — locally serve the contents of `build/` for smoke testing.

## Coding Style & Naming Conventions
- Language: TypeScript + React (`.tsx` for components).
- Indentation: 2 spaces; prefer double quotes to match existing files.
- Components: PascalCase filenames and named exports (e.g., `export function Header()` in `src/components/Header.tsx`).
- Utilities/hooks: camelCase filenames (e.g., `use-mobile.ts`).
- Imports: use path alias `@/` (configured in `tsconfig.json` and `vite.config.ts`).
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
