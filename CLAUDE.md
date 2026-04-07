# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture Overview

This is a **Next.js App Router** e-commerce application with two distinct environments separated by route groups:

- **`(store)/`** — Public-facing storefront with Header + Footer layout
- **`(admin)/admin/`** — Protected dashboard with Sidebar + Header layout

The app uses **all client-side state** (no backend/database). All data lives in TypeScript files and contexts persist to `localStorage`.

## Data Layer

All store content (products, categories, navigation copy, hero text, testimonials) is centralized in [src/data/siteContent.ts](src/data/siteContent.ts). Admin data (orders, stats, customers, chart data) is in [src/data/adminData.ts](src/data/adminData.ts).

[src/lib/api.ts](src/lib/api.ts) is a fake API abstraction layer with simulated delays. Components call functions like `getProductById()` here — replace function bodies with real API calls without touching components.

## State Management (React Contexts)

Three client-side contexts, all with `localStorage` persistence:

| Context | Location | Purpose |
|---|---|---|
| `LanguageContext` | [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx) | i18n (en/ar), RTL switching via `document.dir` |
| `CartContext` | [src/contexts/CartContext.tsx](src/contexts/CartContext.tsx) | Cart items, quantity, product condition tracking |
| `AdminAuthContext` | implicit in admin layout | Login state (credentials: `admin@revibe.me` / `admin123`) |

Store contexts are wrapped in [src/components/StoreProviders.tsx](src/components/StoreProviders.tsx), applied in [src/app/(store)/layout.tsx](src/app/(store)/layout.tsx).

## Admin Auth Pattern

Admin routes under `(dashboard)/` are wrapped with an `AdminGuard` component that reads from `AdminAuthContext` and redirects unauthenticated users to `/admin/login`. The login page lives in a separate `(auth)/` route group so it doesn't inherit the dashboard layout.

## i18n Pattern

Every user-facing string should go through the `t()` function from `LanguageContext`. Translation files are in [src/data/translations/](src/data/translations/) (`en.ts` and `ar.ts`). Arabic activates RTL mode (`document.dir = 'rtl'`).

## Styling

- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- Custom theme variables defined in [src/app/globals.css](src/app/globals.css):
  - Primary: `#00b3a4` (teal), Primary Dark: `#009688`
  - Accent: `#ff6f00` (orange)
- Path alias: `@/*` → `src/*`
- Icons: **Lucide React** throughout

## Key Conventions

- **Products support multiple conditions** (Excellent/Good/Fair) — condition + product ID together form the unique cart key
- Store theme: light (white background); Admin theme: dark (`gray-950`)
- `siteContent.ts` is the single source of truth for all store data — edit there to change products, categories, or copy
