# GetYourPlace

A reproduction of [GetYourPlace.com](https://www.getyourplace.com) — a furnished apartment rental platform for international students and young professionals in Montreal. Built with Next.js, Tailwind CSS, and TypeScript.

## Startup

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)
- (Optional) A free [Mapbox](https://www.mapbox.com/) access token for the interactive map on the listings page

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd get-your-place

# Install dependencies
npm install
```

### Environment Variables (Optional)

Create a `.env.local` file at the project root if you want to enable the Mapbox map:

```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

The app works fully without this — the map will show a placeholder message instead.

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will redirect to `/en` (English) or `/fr` (French) based on your browser language.

### Building for Production

```bash
npm run build
npm start
```

### GitHub Codespaces

Try this project instantly in the browser with zero local setup:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/migos1990/get-your-place?quickstart=1)

When you click the badge:
1. GitHub creates a cloud dev environment with Node 22 and all dependencies pre-installed
2. The Next.js dev server starts automatically
3. A browser tab opens with the running app

> **Note:** The Mapbox map is optional. To enable it, add your token as a
> [Codespaces secret](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-secrets-for-your-codespaces)
> named `NEXT_PUBLIC_MAPBOX_TOKEN`. The app works fully without it.

### Linting

```bash
npm run lint
```

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [next-intl](https://next-intl.dev/) | Internationalization (EN/FR) |
| [Zustand](https://zustand.docs.pmnd.rs/) | Cart state management |
| [Lucide React](https://lucide.dev/) | Icons |
| [Embla Carousel](https://www.embla-carousel.com/) | Image carousel |
| [Radix UI](https://www.radix-ui.com/) | Accordion (FAQ) & Slider (price range) |
| [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) | Interactive apartment map |

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # i18n dynamic segment (en | fr)
│   │   ├── page.tsx           # Homepage
│   │   ├── browse/
│   │   │   └── [city]/
│   │   │       ├── page.tsx           # City → university selection
│   │   │       └── [university]/
│   │   │           ├── page.tsx       # Apartment listings + filters + map
│   │   │           └── [apartment]/
│   │   │               └── page.tsx   # Apartment detail
│   │   ├── cart/page.tsx      # Shopping cart
│   │   ├── checkout/page.tsx  # Multi-step checkout
│   │   ├── why-us/page.tsx    # Why choose us
│   │   ├── faq/page.tsx       # FAQ with accordion
│   │   ├── owner/page.tsx     # Landlord landing page
│   │   ├── team/page.tsx      # Team page
│   │   ├── contact/page.tsx   # Contact form
│   │   ├── cities/page.tsx    # City selection
│   │   └── auth/              # Sign in & reset password
│   └── api/                   # Mock API routes
├── components/
│   ├── layout/                # Navbar, Footer, Breadcrumb, CookieBanner
│   ├── home/                  # Hero, Features, HowItWorks
│   ├── browse/                # UniversityCard, ApartmentCard, Filters, Map
│   ├── apartment/             # ImageCarousel, ApartmentInfo, RoomSelector
│   ├── cart/                  # CartPopup, CartTimer, CartSummary
│   └── checkout/              # FurnitureOption, PriceSummary
├── data/                      # Mock data (apartments, universities, FAQ, team)
├── hooks/                     # useCart (Zustand), useFilters
├── i18n/                      # next-intl config
├── messages/                  # en.json, fr.json translation files
└── lib/                       # Types & utilities
```

## Features

- **Bilingual** — Full EN/FR support with language toggle
- **Browse flow** — Cities → Universities → Apartment listings with filters
- **Apartment detail** — Photo carousel, room info, amenities, room selector
- **Cart system** — Add rooms, 20-minute countdown timer, mini cart popup
- **Multi-step checkout** — Cart review, furniture option, personal info, arrival details, emergency contact
- **Interactive map** — Mapbox GL JS with apartment pins (optional, requires token)
- **Responsive** — Mobile-first design matching the original site
- **Cookie banner** — GDPR-style consent with localStorage persistence
- **Static pages** — Why Us, FAQ, Owner, Team, Contact

## User Flow

1. **Homepage** → Hero with CTA "Start my search"
2. **Cities** → Select Montreal
3. **University** → Pick your university (HEC, McGill, UdeM, etc.)
4. **Listings** → Filter by price, lease duration, roommates, distance; toggle map/list view
5. **Apartment** → View photos, info, amenities; ask a question; select a room
6. **Cart** → Review selection with countdown timer
7. **Checkout** → Sign in, personal info, arrival details, emergency contact
