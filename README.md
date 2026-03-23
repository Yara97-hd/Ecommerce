# Revibe — Refurbished Electronics E-Commerce

A full-stack e-commerce storefront and admin dashboard built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Inspired by [revibe.me](https://revibe.me/).

## Features

### Customer Storefront
- Hero banner, trust badges, category grid
- Product carousels (featured, express delivery)
- Product listing pages with filters
- Product detail pages with specs, condition selector, related products
- Testimonials, news section, responsive footer
- Fully responsive (mobile / tablet / desktop)

### Admin Dashboard (`/admin`)
- **Login** — auth-gated, separate from storefront (no header/footer leak)
- **Dashboard** — revenue stats, bar chart, order status breakdown, recent activity
- **Products** — list, search, filter, add new, edit, delete with confirmation
- **Orders** — list with status tabs, order detail with progress tracker, status update
- **Customers** — sortable table, search, slide-over detail panel
- **Settings** — store info, shipping/returns, notification preferences

### Architecture
- All content (images, text, products) centralized in **`src/data/siteContent.ts`**
- Admin data (orders, customers, stats) in **`src/data/adminData.ts`**
- Fake API layer in **`src/lib/api.ts`** — swap with real API without changing components
- Next.js **route groups** keep storefront `(store)` and admin `(admin)` fully isolated

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the storefront.

Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login) for the admin dashboard.

**Demo admin credentials:**
| Field    | Value             |
|----------|-------------------|
| Email    | admin@revibe.me   |
| Password | admin123          |

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── (store)/              # Customer-facing pages
│   │   ├── page.tsx          # Homepage
│   │   ├── category/[slug]/  # Category listing
│   │   └── products/[id]/    # Product detail
│   ├── (admin)/admin/        # Admin dashboard
│   │   ├── (auth)/login/     # Login (no sidebar)
│   │   └── (dashboard)/      # Guarded pages (sidebar + header)
│   │       ├── page.tsx      # Dashboard overview
│   │       ├── products/     # Products CRUD
│   │       ├── orders/       # Orders management
│   │       ├── customers/    # Customers list
│   │       └── settings/     # Store settings
│   ├── layout.tsx            # Root layout (minimal)
│   └── globals.css           # Tailwind + custom theme
├── components/               # Reusable UI components
│   └── admin/                # Admin-specific components
├── contexts/                 # React contexts (admin auth)
├── data/
│   ├── siteContent.ts        # ← Edit all store content here
│   └── adminData.ts          # ← Edit all admin fake data here
└── lib/
    └── api.ts                # Fake API (replace with real API)
```

## Editing Content

All images, text, and product data live in **one file**: `src/data/siteContent.ts`

| Section                  | What it controls                          |
|--------------------------|-------------------------------------------|
| `brand`                  | Site name, tagline, currency              |
| `announcement`           | Top banner text                           |
| `navLinks`               | Navigation menu                           |
| `heroBanner`             | Hero section text, images, CTA            |
| `trustBadges`            | Warranty, delivery, return badges         |
| `categories`             | Category cards with images                |
| `products`               | All product data                          |
| `homepageProductSections`| Which categories appear on homepage       |
| `features`               | Value proposition cards                   |
| `testimonials`           | Customer reviews                          |
| `newsSection`            | Press mentions                            |
| `footer`                 | Footer links, contact, social             |

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Auth:** Client-side context (fake — replace with real auth)

## License

MIT
