# Accountability Atlas — Landing Page Design Spec

**Date:** 2026-07-09
**Branch:** `feature/landing-page`
**Status:** Approved — ready for implementation plan

---

## 1. Overview

Build the first public-facing landing page for Accountability Atlas. The page must communicate: *"This is serious, safe, structured, and open to contributors — not reckless, not a rage campaign, not a startup."*

**Target feeling:** 70% institutional archive, 30% civic action platform.

**Stack:** Vite + React + TypeScript + Tailwind CSS + Framer Motion (restrained use)

---

## 2. Creative Direction

### 2.1 Brand Personality

- Calm authority, human dignity, evidence-first structure
- Serious but not cold; urgent but not chaotic; moral but not hateful
- Avoid: rage visuals, gore, military aesthetics, hacker styling, overanimated SaaS hype, blood-red palettes

### 2.2 Visual Metaphor

A global evidence room. Think: document cards, map grids, coordinate points, source badges, quiet metadata, protective circles. The logo-mark is a globe/grid with one illuminated coordinate inside a protective circle.

### 2.3 Color Tokens

| Token | Hex | Role |
|---|---|---|
| Deep Ink Navy | `#101828` | Primary text, primary button bg, logo |
| Soft Charcoal | `#1F2937` | Secondary text, hover states |
| Warm Paper | `#F7F1E8` | Page background (odd sections) |
| Bone White | `#FAFAF7` | Card surface, alternating section bg |
| Muted Clay Red | `#B95C50` | Principle accents, alert badge |
| Signal Amber | `#D99A2B` | Logo coordinate, module accents, warning badge |
| Trust Blue | `#3B6EA8` | Roadmap accents, info badge, focus rings |
| Quiet Border Grey | `#D8D6D0` | Card borders, rules, grid texture |

### 2.4 Typography

| Level | Font | Weight | Usage |
|---|---|---|---|
| Display | IBM Plex Serif | 700 | Hero title only |
| H1–H2 | IBM Plex Serif | 600 | Section headings, card titles |
| Body | Inter | 400 | All body text, descriptions |
| Label/Meta | IBM Plex Mono | 500 | Badges, eyebrows, status, phase labels |

Google Fonts import via `@import` in `index.css`.

---

## 3. Logo-Mark System

### 3.1 The Mark

A minimal SVG logo: globe/grid with one illuminated coordinate inside a protective circle.

- **Outer ring:** Thin circle, slight gap at top-right (openness/transparency)
- **Grid sphere:** 3–4 latitude arcs + 3–4 longitude arcs, subtle line-weight variation
- **Illuminated coordinate:** Small filled circle at a grid intersection, Signal Amber (`#D99A2B`), subtle glow
- **All structural lines:** Deep Ink Navy (`#101828`)

### 3.2 Usage System

| Context | Variant | File |
|---|---|---|
| Header | Mark (32px) + Wordmark + Sub-label | `logo-mark.svg` |
| Favicon | Simplified: outer ring + coordinate dot + minimal crosslines | `logo-mark-simple.svg` |
| Social preview | Mark centered, large | `logo-mark.svg` |
| Footer | Mark (24px) + Wordmark | `logo-mark.svg` |

### 3.3 Wordmark

"Accountability Atlas" in IBM Plex Serif, weight 600. Sub-label: `CIVIC EVIDENCE PLATFORM` in IBM Plex Mono, `text-[10px] tracking-[0.15em] text-charcoal/60`.

---

## 4. Animation System

### 4.1 `Reveal.tsx` — Single Animation Wrapper

```tsx
interface RevealProps {
  direction?: "up" | "down" | "none";  // default: "up"
  delay?: number;                       // default: 0 (seconds)
  duration?: number;                    // default: 0.5 (seconds)
  once?: boolean;                       // default: true
  amount?: number;                      // default: 0.2 (viewport threshold)
  children: ReactNode;
}
```

- Wraps `motion.div` with `whileInView`
- Animates only `opacity` + `transform: translateY`
- Uses `useReducedMotion()` from Framer Motion — renders children instantly with no animation when reduced motion is preferred
- `once: true` so reveals fire only on first scroll

### 4.2 Where Framer Motion Is Used

| Location | Animation |
|---|---|
| Hero elements (5 children) | Staggered mount entrance, delays 0–0.45s |
| Section headings | `Reveal` fade-up, `amount: 0.3` |
| Module cards | `Reveal` stagger via `delay = index * 0.1` |
| Principle items | `Reveal` stagger via `delay = index * 0.08` |
| Roadmap phases | `Reveal` sequential, `delay = index * 0.12` |
| Contributor CTA | `Reveal` fade-up, `amount: 0.15` |
| NotThisProject | `Reveal` simple fade-up |

### 4.3 Where Framer Motion Is NOT Used

- Nav hover states → CSS `transition: color 200ms`
- Button hover/active → CSS `transition: background-color 200ms, transform 150ms`
- Card hover elevation → CSS `transition: box-shadow 300ms, transform 300ms, border-color 300ms`
- Badges → fully static
- Background texture → fully static (no animation)
- Footer → fully static (no animation)
- StatusNotice → fully static (always visible, no reveal)

### 4.4 Constraints

- Animate only `opacity` and `transform` (GPU-composited)
- No layout-animating properties (height, width, margin, padding)
- No continuous/infinite animations
- No parallax or scroll-linked transforms
- No spring physics — use `easeOut` easing
- Respect `prefers-reduced-motion` via `useReducedMotion()`

---

## 5. Component Designs

### 5.1 Button

Three variants, `transition-colors duration-200`:

| Variant | Default | Hover | Active | Focus |
|---|---|---|---|---|
| Primary | `bg-ink text-bone` | `bg-charcoal` | `scale-[0.98]` | `ring-2 ring-trust/50 ring-offset-2` |
| Secondary | `border border-ink text-ink bg-transparent` | `bg-ink/5` | `scale-[0.98]` | Same ring |
| Ghost | `text-ink bg-transparent` | `bg-ink/5` | `scale-[0.98]` | Same ring |

- Base: `px-6 py-3 text-base font-medium rounded-md`
- Icon support via `gap-2` with inline SVG
- No uppercase — sentence case
- External links get `↗` icon

### 5.2 Card

Base card: `bg-bone border border-border rounded-lg overflow-hidden`.

- **Accent bar:** 3px × 24px color bar at top-left, like a document tab
- **Mono label:** IBM Plex Mono above title (e.g., "MODULE 01", "PHASE 2")
- **Title:** IBM Plex Serif, weight 600
- **Body:** Inter, `text-charcoal`
- **Padding:** `p-6` mobile / `p-8` desktop

**Hover state (CSS only):**
- `shadow-soft` fades in
- Border shifts slightly darker
- `translateY(-2px)`
- Duration: 300ms

**Color variants:**
| Context | Accent bar | Label |
|---|---|---|
| Modules | Amber | "MODULE 0N" |
| Principles | Clay Red | Dot icon (no number) |
| Roadmap | Trust Blue | "PHASE N" |

### 5.3 Badge

Compact, mono, static labels:

| Variant | Background | Text | Border |
|---|---|---|---|
| `neutral` | `bg-border/30` | `text-charcoal` | `border-border` |
| `info` | `bg-trust/10` | `text-trust` | `border-trust/30` |
| `warning` | `bg-amber/10` | `text-amber` | `border-amber/30` |
| `alert` | `bg-clay/10` | `text-clay` | `border-clay/30` |

- Font: IBM Plex Mono, `text-xs font-medium`
- Shape: `px-2.5 py-0.5 rounded-sm`
- No hover animation

### 5.4 Container

`max-w-7xl mx-auto px-6 lg:px-8` — standard width wrapper.

### 5.5 SectionHeading

```ts
interface SectionHeadingProps {
  eyebrow?: string;   // mono, tracked, uppercase, text-charcoal/60
  title: string;      // IBM Plex Serif, text-3xl/4xl
  description?: string; // Inter, text-lg, text-charcoal/80 (optional)
}
```

- Centered text
- Thin rule (40px, `border-border`) between eyebrow and title
- Max-width: `max-w-2xl` for comfortable reading

---

## 6. Section Specifications

### 6.1 Header (static, not sticky)

- Logo-mark (32px) + wordmark + sub-label, linked to `/`
- Nav links: Methodology, Contribute, GitHub (external icon)
- Active state: `text-ink` + underline on current route
- Hover: CSS color transition
- Background: `bg-paper/80 backdrop-blur-sm`
- Border-bottom: `border-b border-border/50`
- Mobile: hamburger trigger → slide-down panel (CSS max-height transition)
- Mobile menu closes on nav link click
- No animation on header itself

### 6.2 Hero

Staggered mount entrance via Framer Motion:

1. Eyebrow: "OPEN CIVIC EVIDENCE PLATFORM" (mono, tracked)
2. H1: "Accountability Atlas" (IBM Plex Serif, `text-6xl`/`text-7xl`)
3. Tagline: "Evidence for protection. Action for accountability." (IBM Plex Serif, `text-2xl`/`text-3xl`)
4. Description paragraph (Inter, `text-lg`)
5. CTA buttons: Primary "Read the Methodology" + Secondary "Contribute on GitHub"

- Tiny amber accent line (24px × 2px) between tagline and description as coordinate-marker motif
- No illustration, no hero image — typography carries it
- `pt-32 pb-24`
- Each child enters 100–150ms after the previous

### 6.3 StatusNotice

Honest disclosure panel between Hero and Mission:
- `bg-amber/5 border-l-2 border-amber`
- Mono eyebrow "PROJECT STATUS"
- Message: "Early-stage open-source initiative. Not yet a registered NGO, charity, legal entity, or formal partner of any listed organization."
- `py-6 px-5`, max-w-2xl, centered
- No animation, no dismiss button, no icon — static and always visible

### 6.4 MissionSection

- SectionHeading: eyebrow "WHY THIS EXISTS", title from plan copy
- Single paragraph, max-w-3xl, centered, `text-lg`
- Background: `bg-bone`

### 6.5 ModuleGrid

- SectionHeading: "WHAT WE'RE BUILDING" / "Core Modules"
- 3 columns desktop, 2 tablet, 1 mobile
- Each card: amber accent bar, "MODULE 0N" label, title, description
- Staggered Reveal: `delay = index * 0.1`
- Background: `bg-paper`

### 6.6 SafetyPrinciples

- SectionHeading: "HOW WE WORK" / "Safety Principles"
- 2-column grid
- Each item: compact card with clay red dot marker + principle text
- Staggered Reveal: `delay = index * 0.08`
- Background: `bg-bone`

### 6.7 NotThisProject

- SectionHeading: "CLARITY" / "What This Project Will Not Do"
- Single statement in a bordered panel, max-w-3xl
- Simple Reveal wrapper
- Background: `bg-paper`

### 6.8 RoadmapPreview

- SectionHeading: "WHERE WE'RE GOING" / "Roadmap"
- Vertical stack, max-w-2xl
- Each phase: Card with blue accent bar, "PHASE N" label, title, description
- Phase 1 gets `Badge variant="info"` — "Current"
- Staggered Reveal: `delay = index * 0.12`
- Background: `bg-bone`

### 6.9 ContributorCTA

- Centered, max-w-2xl
- Heading: "Help build the foundation."
- Body text from plan
- Two buttons: "View GitHub Issues ↗" (primary) + "Contribute on GitHub ↗" (secondary)
- "View Open Roles" → uses "View GitHub Issues" until a real roles page exists
- `py-24`, generous whitespace
- Reveal with `amount: 0.15`
- Background: `bg-paper`

### 6.10 Footer

Static. Dark navy background. No animation.

- Logo-mark (24px) + wordmark + sub-label
- Link columns: Methodology, Contribute, GitHub, Security
- Horizontal rule (`border-bone/20`)
- License: AGPL-3.0-or-later (code), CC BY-SA 4.0 (content)
- Disclaimer: no legal advice, not a registered NGO/charity, no implied partnerships
- Copyright line
- All text `text-bone/70`, links `text-bone/90` → hover `text-bone`
- Legal text at `text-sm` (readable, not tiny)
- `py-16`

---

## 7. Placeholder Pages

### 7.1 `/methodology`

- Title: "Methodology"
- Description: "Our full source methodology, verification model, and evidence standards will be published here."
- Badge: "Coming in Phase 2" (info variant)
- Link: "← Back home" (ghost button)
- Wrapped in PageShell, centered, `py-24`

### 7.2 `/contribute`

- Title: "Contribute"
- Description: "Contribution guides, role descriptions, and open issues will be listed here."
- Badge: "Coming in Phase 2" (info variant)
- Links: "View GitHub Issues ↗" (secondary) + "← Back home" (ghost)
- Wrapped in PageShell, centered, `py-24`

---

## 8. Background & Texture

- Body background: radial amber glow (top-left) + linear gradient (paper → bone → paper) — from the plan
- Map-grid SVG pattern: faint lines (`#D8D6D0` at 15% opacity), ~60px cells, fixed position, `z-index: 0`
- The grid is static — no animation, no parallax
- Sections alternate `bg-paper` and `bg-bone` subtly (difference should be barely perceptible)

---

## 9. Responsive Strategy

| Breakpoint | Layout |
|---|---|
| < 640px | Single column, `text-4xl` hero, stacked CTAs, hamburger menu, `py-16` sections |
| 640–1024px | 2-col grids, `text-5xl` hero, inline nav, `py-20` sections |
| ≥ 1024px | 3-col module grid, `text-6xl`/`text-7xl` hero, `py-24`–`py-32` sections |

- Container handles max-width consistently
- No horizontal scroll
- Touch targets ≥ 44px

---

## 10. Accessibility

- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`
- One `<h1>` per page
- Logical heading order
- Keyboard-focusable links/buttons with visible `focus-visible` ring
- Color contrast: all text/background pairs meet WCAG AA minimum (4.5:1)
- `prefers-reduced-motion` respected in Reveal + all CSS animations
- Alt text on logo-mark; decorative SVGs `aria-hidden="true"`
- Skip-to-content link as first focusable element

---

## 11. SEO Metadata

In `index.html`:
- `<title>`: "Accountability Atlas — Evidence for protection. Action for accountability."
- `<meta name="description">`: full project description
- `<meta property="og:title">`, `og:description`, `og:image`, `og:type`
- `<meta name="twitter:card">`: `summary_large_image`
- `public/social-preview.svg` as OG image
- `public/robots.txt` allowing indexing

---

## 12. File Architecture

```
src/
├── assets/
│   ├── logo-mark.svg
│   ├── logo-mark-simple.svg
│   └── pattern-grid.svg
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageShell.tsx
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── StatusNotice.tsx
│   │   ├── MissionSection.tsx
│   │   ├── ModuleGrid.tsx
│   │   ├── SafetyPrinciples.tsx
│   │   ├── NotThisProject.tsx
│   │   ├── RoadmapPreview.tsx
│   │   └── ContributorCTA.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Reveal.tsx
│       └── SectionHeading.tsx
├── data/
│   ├── modules.ts
│   ├── principles.ts
│   ├── roadmap.ts
│   └── navigation.ts
├── pages/
│   ├── HomePage.tsx
│   ├── MethodologyPage.tsx
│   └── ContributePage.tsx
├── styles/index.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## 13. MVP Scope Boundaries

**In scope:** static landing page, placeholder sub-pages, brand identity, responsive layout, accessibility, SEO metadata, Netlify/Vercel deploy config.

**Out of scope:** database, authentication, admin panel, witness submission, evidence upload, live maps, donation flow, partner portal, email automation, AI translation, public action tracking, sensitive data collection, real partnership claims.

---

## 14. Deployment

- **Netlify:** Build `npm run build`, publish `dist`, `public/_redirects` with `/* /index.html 200`
- **Vercel:** Framework preset Vite, build `npm run build`, output `dist`

---

## 15. Acceptance Criteria

- [ ] Runs locally with `npm run dev`
- [ ] Builds without errors with `npm run build`
- [ ] Landing page renders all sections in order
- [ ] Responsive at mobile, tablet, desktop
- [ ] `/methodology` and `/contribute` routes exist with intentional content
- [ ] No sensitive submission forms
- [ ] No false partnership claims
- [ ] Footer includes license, safety, and legal disclaimers
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard-navigable with visible focus states
- [ ] No console errors
- [ ] README remains intact
