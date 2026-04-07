# Project Guidelines

## Code Style
- **TypeScript**: Strict mode enabled; all components receive typed props, no `any` types.
- **Tailwind CSS v4**: Custom theme colors (primary: `#00b3a4`, accent: `#ff6f00`, dark: `#1a1a2e`) defined in `src/app/globals.css`. Use utility classes for styling.
- **Component patterns**: Store components in `src/components/`, admin-specific in `src/components/admin/`. Use `"use client"` only for forms and state management.
- **Icons**: lucide-react for all icons (e.g., `Zap`, `ShoppingCart`).
- **Images**: Always use Next.js `Image` component with proper alt text and sizing.

## Architecture
- **Route groups**: `(store)` for public storefront (with Header/Footer), `(admin)` for dashboard (isolated with AdminGuard/Sidebar). Keep them separate to prevent cross-contamination.
- **Data sources**: All storefront content in `src/data/siteContent.ts`, admin data in `src/data/adminData.ts`. Fake API layer in `src/lib/api.ts` for easy backend swap.
- **Authentication**: Context-based (`AdminAuthContext.tsx`) with localStorage; demo credentials only—replace with real tokens for production.

## Build and Test
- Install: `npm install`
- Dev server: `npm run dev` (starts on localhost:3000)
- Build: `npm run build`
- Lint: `npm run lint`
- No environment variables required; all config in code.

## Conventions
- **Data access**: Always call functions from `src/lib/api.ts`, not raw data arrays, to maintain abstraction for backend integration.
- **Admin UI**: Dark theme (bg-gray-950, gray-800 inputs); use confirmation dialogs for destructive actions.
- **Store UI**: Light theme; responsive design with mobile/tablet/desktop breakpoints.
- **Path aliases**: Use `@/*` for imports from `src/`.
- **Forms**: Controlled components with `useState`; simulate API calls with setTimeout for demo.

## Known Limitations
- Checkout, payment integration (Stripe), and user authentication for storefront not implemented.

See [README.md](README.md) for feature overview, getting started, and demo credentials.</content>
<parameter name="filePath">d:\Ecommerce\.github\copilot-instructions.md