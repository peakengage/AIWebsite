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

### Text Externalization (CRITICAL)
- **NEVER hardcode user-facing strings in components.** All visible text (headings, descriptions, labels, button text, placeholders, error messages, aria-labels) MUST be externalized using the i18n library.
- This includes section headings, feature card titles/descriptions, badge labels, CTA text, nav items, footer content, form labels, and tooltip text.
- If adding a new section or component, define all strings in the i18n translation files first, then reference them in the component.
- The only exceptions are structural/layout strings like CSS class names or HTML attributes that are not user-visible.

### Responsive Design (CRITICAL)
- **Every component and layout MUST be tested and functional across all breakpoints** — mobile (375px), tablet (768px), and desktop (1024px+).
- Use mobile-first Tailwind classes: write base styles for mobile, then layer `sm:`, `md:`, `lg:`, `xl:` overrides.
- Never use fixed widths (`w-[500px]`) that break on small screens — use responsive units (`w-full`, `max-w-lg`, percentage-based).
- All grids must collapse gracefully: `grid-cols-1` base → `md:grid-cols-2` → `lg:grid-cols-3`.
- Text must remain readable at all sizes — no overflow, no truncation of critical content.
- Touch targets on mobile must be at least 44x44px (use `min-h-[44px] min-w-[44px]` or sufficient padding).
- Images and visuals must scale proportionally — use `w-full`, `aspect-[ratio]`, or responsive sizing classes.
- Horizontal scrolling on the page body is a bug. If content overflows the viewport, fix it.

# UI/UX Design System

You are an expert Frontend Developer and UI/UX Designer building a premium SaaS marketing website. Every component must feel polished, intentional, and conversion-oriented. Prioritize visual hierarchy, whitespace, and clarity over density.

## Design Principles
- **Whitespace is a feature** — generous padding between sections (`py-20 md:py-28`). Never crowd content.
- **Benefit-driven hierarchy** — lead with what the user gains, not what the product does. Headlines sell, body text explains.
- **Progressive disclosure** — show the most important information first; details on scroll or interaction.
- **Consistency over cleverness** — reuse existing components (`FeatureCard`, `SectionWrapper`, `GradientBadge`) rather than inventing new patterns.
- **Mobile-first, always** — design for 375px first, enhance at `md` (768px) and `lg` (1024px).

## Typography

**Font families:**
- Headings: Raleway (`font-heading`) — bold, clean, geometric
- Body: Inter (default) — highly legible, neutral

**Typographic scale (use these exact patterns):**

| Element | Classes | Notes |
|---------|---------|-------|
| Hero h1 | `text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight` | Max-width `max-w-4xl`, centered |
| Section h2 | `text-3xl sm:text-4xl font-bold font-heading` | Pair with `GradientBadge` above |
| Subsection h3 | `text-2xl font-bold font-heading` | Used in `SubSectionBlock` |
| Card title | `text-lg font-bold font-heading` | Inside `FeatureCard` |
| Body text | `text-base` or `text-lg` with `leading-relaxed` | `text-gray-600` on light, `text-gray-400` on dark |
| Small text | `text-sm text-gray-500` | Labels, metadata |
| Nav links | `text-base font-medium` | — |
| Buttons | `text-sm` (sm), `text-base` (md), `text-lg` (lg) with `font-semibold` | — |

**Rules:**
- Never use more than 2 font weights in a single section (typically `font-bold` + regular).
- Body text max-width should not exceed `max-w-2xl` for readability (~65 characters per line).
- Use `leading-relaxed` on all multi-line body text.
- Apply `font-heading` to all headings (h1–h4).

## Color System

**Tokens (defined in `globals.css` via `@theme`):**

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#009eff` | CTAs, links, active states, icon backgrounds |
| `primary-dark` | `#0080cc` | Button hover states |
| `tertiary` | `#43b2e6` | Gradient endpoints, icon color on dark backgrounds |
| `accent` | `#e6f4ff` | Light blue tinted backgrounds |
| `dark` | `#0f172a` | Dark section backgrounds, heading text |
| `dark-light` | `#1e293b` | Slightly lighter dark variant |

**Color application rules:**
- **CTAs and interactive elements:** Always `bg-primary` with `hover:bg-primary-dark`. Never use other colors for primary actions.
- **Text on light backgrounds:** Headings `text-gray-900`, body `text-gray-600`, muted `text-gray-500`.
- **Text on dark backgrounds:** Headings `text-white`, body `text-gray-400`, muted `text-gray-500`.
- **Icon containers:** Light sections use `bg-primary/10` with `text-primary`. Dark sections use `bg-white/10` with `text-tertiary`.
- **Borders:** Light sections `border-gray-100` or `border-gray-200`. Dark sections `border-gray-800`.
- **Backgrounds:** Alternate between white and `bg-gray-50` for visual rhythm. Use `bg-gray-900` for dark sections sparingly (max 1–2 per page).
- **Never use raw hex values** — always reference theme tokens (`bg-primary`, `text-dark`, etc.) or Tailwind's gray scale.

**Gradients:**
- `.gradient-text` — `linear-gradient(135deg, primary → tertiary)` clipped to text. Use on 1–2 key words per section heading for emphasis.
- `.gradient-bg` — same gradient as full background. Used on hero section.
- Radial overlay on hero: `radial-gradient(ellipse_at_top_right, rgba(255,255,255,0.15))` for depth.
- `.glass-card` — `bg-white/5`, `backdrop-blur-[12px]`, `border border-white/10`. Only use on dark/gradient backgrounds.

## Spacing System

**All spacing uses Tailwind's 4px base scale. Stick to these consistent values:**

| Context | Value | Classes |
|---------|-------|---------|
| Section vertical padding | 80px / 112px | `py-20 md:py-28` |
| Section header to content | 64px | `mb-16` |
| Between subsections | 80px | `mb-20` |
| Two-column layout gap | 48px | `gap-12` |
| Card grid gap | 24px | `gap-6` |
| Inside cards | 24px | `p-6` |
| Bullet list items | 8px | `space-y-2` |
| Container max-width | 1304px | `max-w-[1304px]` |
| Container horizontal padding | 16→24→32px | `px-4 sm:px-6 lg:px-8` |
| Header height | 64px / 80px | `h-16 md:h-20` |

**Rules:**
- Never use arbitrary spacing values outside Tailwind's scale.
- Maintain consistent vertical rhythm — sections should breathe equally.
- Content areas should never touch the viewport edges (minimum `px-4`).

## Animation Guidelines

**All animation variants are defined in `lib/animations.ts`. Use these — do not create inline variants.**

| Variant | Effect | Duration | Use for |
|---------|--------|----------|---------|
| `fadeInUp` | Fade in + slide up 30px | 0.6s easeOut | Default for most content |
| `fadeIn` | Fade in only | 0.6s easeOut | Subtle reveals, badges |
| `scaleIn` | Fade in + scale from 0.9 | 0.5s easeOut | Images, showcase cards |
| `slideInLeft` | Fade in + slide from -40px | 0.6s easeOut | Left-side content in 2-col |
| `slideInRight` | Fade in + slide from +40px | 0.6s easeOut | Right-side content in 2-col |
| `staggerContainer` | Staggers children 0.1s apart | — | Wrap parent grids/lists |

**Rules:**
- Every section uses `SectionWrapper` which applies `staggerContainer` + `whileInView`.
- Viewport trigger: `viewport={{ once: true, margin: "-100px" }}` — animations fire once, 100px before entering view.
- Hero section animates on mount (`animate="visible"`), not on scroll.
- Duration range: 0.3s–0.6s. Never exceed 0.8s — it feels sluggish.
- Stagger between siblings: 0.1s. Never exceed 0.15s.
- Easing: always `easeOut`. Never use `linear` or `easeIn` for entrance animations.
- Do not animate layout-affecting properties (width, height, padding) — only `opacity`, `transform` (`x`, `y`, `scale`).
- If adding a new animation pattern, add it to `lib/animations.ts` as a named variant.

## Component Patterns

**Always use existing components. Only create new ones if no existing component fits.**

### SectionWrapper
Wraps every section. Provides max-width container, section padding, and stagger animation.
```
<SectionWrapper id={SECTION_IDS.xxx}>
  {/* section content */}
</SectionWrapper>
```

### GradientBadge
Small label above section headings. `px-4 py-1.5`, `rounded-full`, `text-sm font-semibold`, `bg-primary/10`, `text-primary`, `border-primary/20`.
Always place above h2 section headings with `mb-4` spacing.

### FeatureCard
Two variants:
- **"default"** — White bg, `shadow-sm`, `border-gray-100`, hover border effect. Icons: `bg-primary/10` + `text-primary`. Text: gray-900 title, gray-600 body.
- **"glass"** — Semi-transparent blur card for dark/gradient backgrounds. Icons: `bg-white/10` + `text-tertiary`. Text: white title, gray-300 body.

### FeatureGrid
Responsive grid wrapper. Columns: 2, 3, or 4. Uses `staggerContainer` for child animation.
```
<FeatureGrid columns={3}>
  <FeatureCard ... />
</FeatureGrid>
```

### SubSectionBlock
Two-column layout: text on one side, visual on the other. Use `reverse` prop to alternate left/right across subsections for visual rhythm.

### Button
Variants: `"primary"` (filled blue), `"secondary"` (white with blue border), `"outline"` (transparent with white border, for dark bgs).
Sizes: `"sm"`, `"md"`, `"lg"`. All use `rounded-lg`, `transition-all duration-200`.

### ImageShowcase
Visual display component with layouts: `"phone-carousel"`, `"grid"`, `"tabs"`, `"single"`. Includes phone frames (dark border, notch) and browser frames (traffic light dots).

## Layout Patterns

### Section Header (standard pattern)
```
<GradientBadge>Badge Text</GradientBadge>
<h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
  Headline with <span className="gradient-text">emphasis</span>
</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
  Supporting description text.
</p>
```
Center-aligned. Always include badge + heading + description as a group with `text-center mb-16`.

### Two-Column Content Section
Use `SubSectionBlock` with alternating `reverse` prop. Text side includes h3, description paragraph, and optional bullet list. Visual side uses `ImageShowcase`.

### Feature Grid Section
Use `FeatureGrid` with `FeatureCard` children. 3 columns for feature lists, 4 columns for capability overviews, 2 columns for detailed feature pairs.

### Dark Section
- Background: `bg-gray-900`
- Swap all text colors to dark-mode equivalents (see Color System)
- Use `glass` variant for FeatureCards
- Icons use `text-tertiary` instead of `text-primary`
- Dividers use `border-gray-800`

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Base | <768px | Single column, stacked layouts, hidden desktop nav, hamburger menu |
| `md` | 768px+ | 2-column grids, desktop nav visible, side-by-side layouts |
| `lg` | 1024px+ | 3–4 column grids, full section layouts, larger spacing |
| `xl` | 1280px+ | Larger hero text, max-width containers |

**Rules:**
- Navigation: hidden on mobile, `md:flex` for desktop. Mobile uses `MobileMenu` component.
- Feature grids: 1 col → `md:grid-cols-2` → `lg:grid-cols-3` (or 4).
- Two-column layouts: stack on mobile, side-by-side at `lg`.
- Hero text scales: `text-3xl` → `sm:text-4xl` → `lg:text-5xl` → `xl:text-6xl`.
- Never hide critical content at any breakpoint — rearrange, don't remove.

## Accessibility

- All interactive elements must have visible focus states (`focus:ring-2 ring-primary/20`).
- Use semantic HTML: `<nav>`, `<section>`, `<footer>`, `<button>` (not div-as-button).
- Images/icons need `aria-label` or `aria-hidden="true"` (decorative).
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text (headings).
- Form inputs: visible labels or `aria-label`, clear error states.
- Modal overlays: trap focus, close on Escape, restore focus on close.
- Skip links and keyboard navigation should work across all sections.

## Do's and Don'ts

**Do:**
- Use `SectionWrapper` for every new section
- Alternate section backgrounds (white → gray-50 → white) for visual rhythm
- Use `GradientBadge` + h2 + subtitle as the standard section header
- Apply `gradient-text` to 1–2 key words per heading (not the entire heading)
- Stagger card animations using `FeatureGrid` (built-in)
- Use existing `lib/animations.ts` variants
- Keep CTAs prominent — one primary CTA per section maximum

**Don't:**
- Create one-off styled divs when a reusable component exists
- Use more than 2 gradient-text spans per section
- Mix font families within a single text block
- Use raw color values — always use theme tokens
- Add animations longer than 0.6s or with non-easeOut easing
- Stack multiple CTAs side-by-side (use primary + secondary pairing if needed)
- Use stock-photo aesthetic — prefer clean SVG illustrations and data visualizations
- Create walls of text — break into bullet points, cards, or visual layouts
- Override SectionWrapper padding with custom values