# Axion Drive Group

A React + Vite website for Axion Drive Group — a professional automotive company landing site built for easy editing and deployment.

## Run & Operate

- `pnpm --filter @workspace/axion-drive run dev` — run the frontend (reads PORT env)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Required env: none for frontend-only; `DATABASE_URL` if backend is used

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite + Tailwind CSS v4
- UI: shadcn/ui components (Radix UI primitives)
- Routing: Wouter
- Icons: Lucide React + React Icons
- Animation: Framer Motion
- Build: Vite (static output)

## Where things live

- `artifacts/axion-drive/src/App.tsx` — main app entry, routing
- `artifacts/axion-drive/src/index.css` — global styles + CSS theme variables (colors, radius, fonts)
- `artifacts/axion-drive/src/pages/` — page components (one file per route)
- `artifacts/axion-drive/src/components/ui/` — shadcn/ui base components (don't edit these)
- `lib/api-spec/openapi.yaml` — API contract (only needed if backend is added)

## Architecture decisions

- Frontend-only (no backend) — the site is purely static React; the API server artifact is available if backend is needed later.
- Tailwind CSS v4 with CSS custom properties for theming — colors defined as HSL values in `index.css` under `:root` and `.dark`.
- Wouter for lightweight client-side routing (smaller than React Router).
- `BASE_PATH` env var wires up the router base so it works correctly behind the Replit proxy.

## Product

A marketing/company website for Axion Drive Group. Pages and content are defined in `src/App.tsx` and `src/pages/`.

## User preferences

- User will paste their own App.tsx content to customize the site.
- Wants easy editing and deployment.

## Gotchas

- Do NOT hard-code port numbers — the app reads `PORT` from env.
- Theme colors live in `artifacts/axion-drive/src/index.css` as HSL values — edit there to change the color scheme.
- After editing pages/routes, restart the `artifacts/axion-drive: web` workflow to pick up changes.

## Pointers

- See the `react-vite` skill for frontend conventions
- See the `pnpm-workspace` skill for workspace structure
