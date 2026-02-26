# PeakEngage Website

## Overview
Single-page marketing website for PeakEngage — a customer engagement platform for retail. Built with Next.js App Router as a scroll-based landing page with 6 feature sections.

## Tech Stack
- **Framework:** Next.js 15.1 (App Router), React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4.0 (via `@tailwindcss/postcss`)
- **Animations:** Framer Motion 11.15
- **Icons:** Lucide React
- **Fonts:** Raleway (headings), Inter (body) — loaded via `next/font/google`

## Commands
- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Project Structure
```
src/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx             # Main page — assembles all sections
│   ├── globals.css          # Tailwind theme tokens, utility classes
│   ├── robots.ts            # SEO robots.txt
│   ├── sitemap.ts           # SEO sitemap.xml
│   └── api/contact/route.ts # Contact form POST endpoint (stub)
├── components/
│   ├── layout/              # Header, Footer, Logo, MobileMenu
│   ├── sections/            # HeroSection, CrmSection, LoyaltySection,
│   │                        # IntegrationSection, PlatformSection, AiSection
│   └── ui/                  # Button, GradientBadge, SectionWrapper,
│                            # FeatureCard, FeatureGrid, PlaceholderImage, ContactForm
├── hooks/
│   └── useScrollspy.ts      # IntersectionObserver for active nav highlighting
├── lib/
│   ├── constants.ts         # SITE_CONFIG, SECTION_IDS, NAV_ITEMS
│   ├── animations.ts        # Framer Motion variant presets
│   └── utils.ts             # cn() class name helper
└── types/
    └── index.ts             # Shared TypeScript interfaces
```

## Architecture Notes
- All components use `"use client"` — Framer Motion requires client-side rendering.
- The page is a single route (`/`) with sections identified by IDs for scroll navigation.
- Header transitions from transparent (over hero gradient) to white/blur on scroll.
- Nav links highlight based on the `useScrollspy` hook (IntersectionObserver).
- Contact form is a modal overlay that POSTs to `/api/contact` (currently logs to console — TODO: wire to real backend).
- All visuals are inline SVG placeholders (phone mockup, dashboard, integration diagram) — no image assets yet.
- Path alias: `@/*` → `./src/*`

## Theme
- Primary: `#009eff`
- Primary dark: `#0080cc`
- Tertiary: `#43b2e6`
- Accent: `#e6f4ff`
- Dark: `#0f172a`
- Custom tokens defined in `globals.css` via Tailwind `@theme` block.

## Conventions
- Section IDs are defined in `lib/constants.ts` and referenced everywhere via `SECTION_IDS`.
- Reusable UI components live in `components/ui/`, layout pieces in `components/layout/`, and page sections in `components/sections/`.
- Animation variants are centralized in `lib/animations.ts`.
- Feature data (icons, titles, descriptions) is co-located as arrays at the top of each section file.

## Rules
- Externalize all strings using i18n library 

# UI Design Guidelines
 
You are an expert Frontend Developer and UI Designer. Your goal is to build, modern, accessible, and responsive user interfaces.
 
## Guidelines
- Use Tailwind CSS for styling.
- Use flexbox or grid for layout.
- Ensure all components are responsive (mobile-first).
- Use Tailwind spacing scales (e.g., p-4, m-2).
- Follow accessibility guidelines (ARIA labels, keyboard navigation).
 
## Component Standards
- Buttons: Rounded corners, consistent padding.
- Cards: White background, subtle shadow, padding, border-radius.
 
## Interaction
- Add hover states to all interactive elements.