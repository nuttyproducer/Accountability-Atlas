# Accountability Atlas Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first public-facing landing page for Accountability Atlas — a calm, credible, institution-grade civic-tech site with restrained Framer Motion animations, custom SVG logo-mark system, and polished typography.

**Architecture:** Vite + React + TypeScript SPA with React Router for three routes (`/`, `/methodology`, `/contribute`). Tailwind CSS with brand tokens for styling. Framer Motion used only through a single `Reveal.tsx` wrapper component for scroll-triggered fade-up reveals. All content lives in static TypeScript data files. No backend, no database, no authentication.

**Tech Stack:** Vite 6.x, React 19.x, TypeScript 5.x, Tailwind CSS 4.x (or 3.4.x for stable PostCSS plugin), Framer Motion 12.x, React Router 7.x

## Global Constraints

- **Source of truth:** `src/accountability-atlas-landing-page-implementation-plan.md` for structure, `docs/superpowers/specs/2026-07-09-landing-page-design.md` for design
- **Animation rule:** Framer Motion ONLY through `Reveal.tsx` wrapper. CSS transitions for hover/focus. No bouncy springs, no parallax, no infinite animations
- **Accessibility:** Respect `prefers-reduced-motion`, semantic HTML, one `<h1>` per page, logical heading order, visible focus rings, skip-to-content link
- **Brand colors:** ink `#101828`, charcoal `#1F2937`, paper `#F7F1E8`, bone `#FAFAF7`, clay `#B95C50`, amber `#D99A2B`, trust `#3B6EA8`, border `#D8D6D0`
- **Typography:** IBM Plex Serif (headings), Inter (body), IBM Plex Mono (labels/metadata) — loaded via Google Fonts `@import`
- **MVP scope only:** No database, auth, witness uploads, evidence forms, donation flows, live maps, partner claims
- **Tone:** 70% institutional archive, 30% civic action platform. Calm, credible, human, nonviolent, lawful
- **Copy:** Use exact copy from implementation plan sections 11 (homepage) and data files (section 12)
- **Background rule:** Use paper/bone alternation sparingly. Cards and spacing create rhythm; avoid striped-page feeling
- **Header:** Static (scrolls away), `bg-paper/95`, bottom border only. Mobile: "Menu" button with `aria-expanded`/`aria-controls`
- **CTA links:** Hero primary → `/methodology`, Hero secondary → GitHub repo. Contributor section: "View Good First Issues" → GitHub issues link, "Read the Contribution Guide" → `CONTRIBUTING.md`
- **Placeholder pages:** `/methodology` and `/contribute` must include real links to repo docs, not feel empty
- **Deployment:** `npm run build` produces `dist/`. Netlify: add `public/_redirects` with `/* /index.html 200`

---

## File Structure Map

```
accountability-atlas/
├── index.html                          (modify: SEO meta, font preconnect)
├── package.json                        (create: dependencies + scripts)
├── vite.config.ts                      (create: Vite config)
├── tsconfig.json                       (create: TypeScript config)
├── tsconfig.app.json                   (create: app-specific TS config)
├── tailwind.config.js                  (create: Tailwind with brand tokens)
├── postcss.config.js                   (create: PostCSS with Tailwind plugin)
├── public/
│   ├── favicon.svg                     (create: simplified logo-mark)
│   ├── social-preview.svg              (create: social card image)
│   ├── robots.txt                      (create: allow all)
│   └── _redirects                      (create: Netlify SPA fallback)
├── src/
│   ├── assets/
│   │   ├── logo-mark.svg              (create: full logo-mark)
│   │   ├── logo-mark-simple.svg       (create: favicon variant)
│   │   └── pattern-grid.svg           (create: map-grid texture)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             (create)
│   │   │   ├── Footer.tsx             (create)
│   │   │   └── PageShell.tsx          (create)
│   │   ├── landing/
│   │   │   ├── Hero.tsx               (create)
│   │   │   ├── StatusNotice.tsx       (create)
│   │   │   ├── MissionSection.tsx     (create)
│   │   │   ├── ModuleGrid.tsx         (create)
│   │   │   ├── SafetyPrinciples.tsx   (create)
│   │   │   ├── NotThisProject.tsx     (create)
│   │   │   ├── RoadmapPreview.tsx     (create)
│   │   │   └── ContributorCTA.tsx     (create)
│   │   └── ui/
│   │       ├── Badge.tsx              (create)
│   │       ├── Button.tsx             (create)
│   │       ├── Card.tsx               (create)
│   │       ├── Container.tsx          (create)
│   │       ├── Reveal.tsx             (create)
│   │       └── SectionHeading.tsx     (create)
│   ├── data/
│   │   ├── modules.ts                 (create)
│   │   ├── principles.ts              (create)
│   │   ├── roadmap.ts                 (create)
│   │   └── navigation.ts             (create)
│   ├── pages/
│   │   ├── HomePage.tsx               (create)
│   │   ├── MethodologyPage.tsx        (create)
│   │   └── ContributePage.tsx         (create)
│   ├── styles/
│   │   └── index.css                  (create)
│   ├── App.tsx                        (create)
│   ├── main.tsx                       (create)
│   └── vite-env.d.ts                  (create)
```

---

### Task 1: Scaffold Vite + React + TypeScript Project

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `index.html`
- Create: `src/vite-env.d.ts`

**Interfaces:**
- Produces: `package.json` with all dependencies declared, `vite.config.ts`, TypeScript configs, `index.html` with SEO meta

---

- [ ] **Step 1: Create package.json**

```json
{
  "name": "accountability-atlas",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  },
  "dependencies": {
    "framer-motion": "^12.7.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.4.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.4.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.7.0",
    "vite": "^6.3.0"
  }
}
```

- [ ] **Step 2: Create vite.config.ts**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" }
  ]
}
```

- [ ] **Step 4: Create tsconfig.app.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

- [ ] **Step 5: Update index.html with SEO metadata**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#101828" />

    <title>Accountability Atlas — Evidence for protection. Action for accountability.</title>
    <meta
      name="description"
      content="An open civic-technology project for verified atrocity documentation, humanitarian accountability, legal and policy tracking, and lawful public action."
    />

    <meta property="og:title" content="Accountability Atlas" />
    <meta
      property="og:description"
      content="Evidence for protection. Action for accountability."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/social-preview.svg" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Create src/vite-env.d.ts**

```ts
/// <reference types="vite/client" />
```

- [ ] **Step 7: Install dependencies and verify scaffold**

```bash
npm install
```

Expected: installs without errors.

```bash
npx tsc --noEmit --project tsconfig.app.json
```

Expected: no TypeScript errors (even though `src/main.tsx` doesn't exist yet — skip this check or accept "no inputs" message).

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vite.config.ts tsconfig.json tsconfig.app.json index.html src/vite-env.d.ts
git commit -m "Scaffold Vite React TypeScript project"
```

---

### Task 2: Install Tailwind CSS and Configure Brand Tokens

**Files:**
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/styles/index.css`

**Interfaces:**
- Produces: Tailwind theme with brand color tokens (`ink`, `charcoal`, `paper`, `bone`, `clay`, `amber`, `trust`, `border`), font families (`serif` → IBM Plex Serif, `sans` → Inter, `mono` → IBM Plex Mono), `shadow-soft` utility, Google Fonts import
- Produces: `index.css` with body background gradient, map-grid pattern, selection color, smooth scroll

---

- [ ] **Step 1: Create tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        charcoal: "#1F2937",
        paper: "#F7F1E8",
        bone: "#FAFAF7",
        clay: "#B95C50",
        amber: "#D99A2B",
        trust: "#3B6EA8",
        border: "#D8D6D0",
      },
      fontFamily: {
        serif: ["IBM Plex Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Create postcss.config.js**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 3: Create src/styles/index.css**

```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Serif:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color: #101828;
  background: #f7f1e8;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at top left, rgba(217, 154, 43, 0.10), transparent 34rem),
    linear-gradient(180deg, #f7f1e8 0%, #fafaf7 58%, #f7f1e8 100%);
  font-family: Inter, system-ui, sans-serif;
}

::selection {
  background: rgba(185, 92, 80, 0.24);
}

/* Subtle map-grid texture overlay */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url("../assets/pattern-grid.svg");
  background-repeat: repeat;
  background-size: 60px 60px;
  opacity: 0.4;
}

/* Skip-to-content link */
.skip-to-content {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 100;
  padding: 8px 16px;
  background: #101828;
  color: #fafaf7;
  font-family: Inter, system-ui, sans-serif;
  font-size: 14px;
  border-radius: 6px;
  text-decoration: none;
}

.skip-to-content:focus {
  top: 16px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js postcss.config.js src/styles/index.css
git commit -m "Add Tailwind CSS with brand theme tokens"
```

---

### Task 3: Create SVG Assets

**Files:**
- Create: `src/assets/logo-mark.svg`
- Create: `src/assets/logo-mark-simple.svg`
- Create: `src/assets/pattern-grid.svg`
- Create: `public/favicon.svg`
- Create: `public/social-preview.svg`
- Create: `public/robots.txt`
- Create: `public/_redirects`

**Interfaces:**
- Produces: All SVG assets available for import in components and direct URL access in `public/`
- Logo-mark: globe grid with protective circle and amber coordinate point, Deep Ink Navy lines, Signal Amber dot
- Pattern grid: subtle cartographic grid lines for background texture

---

- [ ] **Step 1: Create src/assets/logo-mark.svg (full logo-mark, 48x48 viewBox)**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" role="img" aria-label="Accountability Atlas logo mark">
  <!-- Protective outer ring with gap at top-right -->
  <circle cx="24" cy="24" r="22" stroke="#101828" stroke-width="1.5" stroke-dasharray="138 140" stroke-dashoffset="35" />
  <!-- Longitude arcs -->
  <ellipse cx="24" cy="24" rx="10" ry="22" stroke="#101828" stroke-width="0.75" opacity="0.6" />
  <ellipse cx="24" cy="24" rx="18" ry="22" stroke="#101828" stroke-width="0.5" opacity="0.35" />
  <!-- Latitude arcs -->
  <path d="M6 24 Q24 10 42 24" stroke="#101828" stroke-width="0.75" opacity="0.5" />
  <path d="M8 30 Q24 40 40 30" stroke="#101828" stroke-width="0.5" opacity="0.35" />
  <path d="M8 18 Q24 8 40 18" stroke="#101828" stroke-width="0.5" opacity="0.35" />
  <!-- Central vertical line -->
  <line x1="24" y1="2" x2="24" y2="46" stroke="#101828" stroke-width="0.5" opacity="0.3" />
  <!-- Illuminated coordinate point -->
  <circle cx="32" cy="20" r="2.5" fill="#D99A2B" />
  <circle cx="32" cy="20" r="5" fill="#D99A2B" opacity="0.15" />
</svg>
```

- [ ] **Step 2: Create src/assets/logo-mark-simple.svg (simplified for favicon, 32x32 viewBox)**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" role="img" aria-label="Accountability Atlas favicon">
  <!-- Protective outer ring -->
  <circle cx="16" cy="16" r="14.5" stroke="#101828" stroke-width="2" stroke-dasharray="90 94" stroke-dashoffset="22" />
  <!-- Simplified cross lines -->
  <line x1="16" y1="2" x2="16" y2="30" stroke="#101828" stroke-width="1" opacity="0.5" />
  <line x1="2" y1="16" x2="30" y2="16" stroke="#101828" stroke-width="1" opacity="0.5" />
  <!-- Diagonal grid lines -->
  <line x1="5" y1="5" x2="27" y2="27" stroke="#101828" stroke-width="0.5" opacity="0.3" />
  <line x1="27" y1="5" x2="5" y2="27" stroke="#101828" stroke-width="0.5" opacity="0.3" />
  <!-- Illuminated coordinate -->
  <circle cx="21" cy="13" r="2" fill="#D99A2B" />
</svg>
```

- [ ] **Step 3: Create public/favicon.svg (symlink to simple variant)**

Use the same content as `src/assets/logo-mark-simple.svg` but placed in `public/` for direct access at `/favicon.svg`.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="14.5" stroke="#101828" stroke-width="2" stroke-dasharray="90 94" stroke-dashoffset="22" />
  <line x1="16" y1="2" x2="16" y2="30" stroke="#101828" stroke-width="1" opacity="0.5" />
  <line x1="2" y1="16" x2="30" y2="16" stroke="#101828" stroke-width="1" opacity="0.5" />
  <line x1="5" y1="5" x2="27" y2="27" stroke="#101828" stroke-width="0.5" opacity="0.3" />
  <line x1="27" y1="5" x2="5" y2="27" stroke="#101828" stroke-width="0.5" opacity="0.3" />
  <circle cx="21" cy="13" r="2" fill="#D99A2B" />
</svg>
```

- [ ] **Step 4: Create src/assets/pattern-grid.svg (map-grid texture)**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" aria-hidden="true">
  <!-- Cell border -->
  <rect x="0.5" y="0.5" width="59" height="59" stroke="#D8D6D0" stroke-width="0.5" />
  <!-- Crosshair at intersection -->
  <circle cx="30" cy="30" r="0.5" fill="#D8D6D0" opacity="0.6" />
  <!-- Subtle cross lines within cell -->
  <line x1="30" y1="0" x2="30" y2="60" stroke="#D8D6D0" stroke-width="0.25" opacity="0.3" />
  <line x1="0" y1="30" x2="60" y2="30" stroke="#D8D6D0" stroke-width="0.25" opacity="0.3" />
</svg>
```

- [ ] **Step 5: Create public/social-preview.svg (social card)**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" fill="none">
  <rect width="1200" height="630" fill="#F7F1E8" />
  <!-- Map grid background -->
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <rect width="60" height="60" fill="none" stroke="#D8D6D0" stroke-width="0.5" opacity="0.3" />
      <circle cx="30" cy="30" r="0.5" fill="#D8D6D0" opacity="0.2" />
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)" />
  <!-- Logo mark centered -->
  <g transform="translate(600, 240)">
    <circle cx="0" cy="0" r="70" stroke="#101828" stroke-width="3" stroke-dasharray="438 445" stroke-dashoffset="110" />
    <ellipse cx="0" cy="0" rx="30" ry="70" stroke="#101828" stroke-width="2" opacity="0.6" />
    <ellipse cx="0" cy="0" rx="55" ry="70" stroke="#101828" stroke-width="1.5" opacity="0.35" />
    <path d="M-70 0 Q0 -45 70 0" stroke="#101828" stroke-width="2" opacity="0.5" />
    <path d="M-64 20 Q0 52 64 20" stroke="#101828" stroke-width="1.5" opacity="0.35" />
    <path d="M-64 -20 Q0 -52 64 -20" stroke="#101828" stroke-width="1.5" opacity="0.35" />
    <line x1="0" y1="-73" x2="0" y2="73" stroke="#101828" stroke-width="1.5" opacity="0.3" />
    <circle cx="25" cy="-15" r="7" fill="#D99A2B" />
    <circle cx="25" cy="-15" r="15" fill="#D99A2B" opacity="0.12" />
  </g>
  <!-- Project name -->
  <text x="600" y="370" text-anchor="middle" font-family="IBM Plex Serif, Georgia, serif" font-size="52" font-weight="700" fill="#101828">Accountability Atlas</text>
  <!-- Tagline -->
  <text x="600" y="420" text-anchor="middle" font-family="IBM Plex Serif, Georgia, serif" font-size="28" font-weight="500" fill="#1F2937">Evidence for protection. Action for accountability.</text>
  <!-- Sub-label -->
  <text x="600" y="470" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="500" fill="#3B6EA8" letter-spacing="3">OPEN CIVIC EVIDENCE PLATFORM</text>
</svg>
```

- [ ] **Step 6: Create public/robots.txt**

```txt
User-agent: *
Allow: /
```

- [ ] **Step 7: Create public/_redirects**

```txt
/* /index.html 200
```

- [ ] **Step 8: Commit**

```bash
git add src/assets/logo-mark.svg src/assets/logo-mark-simple.svg src/assets/pattern-grid.svg public/favicon.svg public/social-preview.svg public/robots.txt public/_redirects
git commit -m "Add SVG assets, favicon, social preview, and deploy config"
```

---

### Task 4: Create Data Files

**Files:**
- Create: `src/data/modules.ts`
- Create: `src/data/principles.ts`
- Create: `src/data/roadmap.ts`
- Create: `src/data/navigation.ts`

**Interfaces:**
- Produces: `modules: { title: string; description: string }[]`
- Produces: `principles: string[]`
- Produces: `roadmap: { phase: string; title: string; description: string }[]`
- Produces: `navigation: { label: string; href: string; external?: boolean }[]`

---

- [ ] **Step 1: Create src/data/modules.ts**

```ts
export interface Module {
  title: string;
  description: string;
}

export const modules: Module[] = [
  {
    title: "Evidence Library",
    description:
      "Organize public-interest sources, reports, legal records, and documentation with clear source labels.",
  },
  {
    title: "Legal Tracker",
    description:
      "Track public court processes, institutional findings, and legal accountability mechanisms.",
  },
  {
    title: "Country Accountability",
    description:
      "Show what governments and institutions say, do, vote for, fund, block, or fail to do.",
  },
  {
    title: "Organization Directory",
    description:
      "List humanitarian, legal, documentation, research, and civic organizations without implying partnership.",
  },
  {
    title: "Action Hub",
    description:
      "Provide lawful templates and routes for citizens to contact representatives and act responsibly.",
  },
  {
    title: "Policy Dossiers",
    description:
      "Turn source-cited information into concise briefings for citizens, journalists, and policymakers.",
  },
];
```

- [ ] **Step 2: Create src/data/principles.ts**

```ts
export const principles: string[] = [
  "Accuracy before speed",
  "Protection before publication",
  "Evidence before opinion",
  "Consent before exposure",
  "Accountability without dehumanization",
  "Lawful action only",
  "No doxing",
  "No sensitive uploads before secure review",
];
```

- [ ] **Step 3: Create src/data/roadmap.ts**

```ts
export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Credibility Landing Page",
    description:
      "Create a public landing page, methodology placeholder, contribute page, and safe project framing.",
  },
  {
    phase: "Phase 2",
    title: "Methodology and Country Pages",
    description:
      "Publish the first source methodology, Belgium page, EU page, legal tracker structure, and organization directory.",
  },
  {
    phase: "Phase 3",
    title: "Static Evidence Dossiers",
    description:
      "Add source-cited public dossiers and downloadable briefing formats.",
  },
  {
    phase: "Phase 4",
    title: "Reviewed Dynamic Features",
    description:
      "Only after review: maps, search, secure workflows, and structured data.",
  },
];
```

- [ ] **Step 4: Create src/data/navigation.ts**

```ts
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "Methodology", href: "/methodology" },
  { label: "Contribute", href: "/contribute" },
];

export const githubLink: NavItem = {
  label: "GitHub",
  href: "https://github.com/nuttyproducer/accountability-atlas",
  external: true,
};
```

- [ ] **Step 5: Commit**

```bash
git add src/data/modules.ts src/data/principles.ts src/data/roadmap.ts src/data/navigation.ts
git commit -m "Add landing page data files"
```

---

### Task 5: Create UI Primitives — Container, Reveal, SectionHeading

**Files:**
- Create: `src/components/ui/Container.tsx`
- Create: `src/components/ui/Reveal.tsx`
- Create: `src/components/ui/SectionHeading.tsx`

**Interfaces:**
- Produces: `Container` — wraps children in `max-w-7xl mx-auto px-6 lg:px-8`, accepts optional `className` prop
- Produces: `Reveal` — Framer Motion wrapper with `direction`, `delay`, `duration`, `once`, `amount` props; respects `prefers-reduced-motion`
- Produces: `SectionHeading` — renders optional eyebrow (mono, tracked), title (serif), optional description (sans), thin rule between eyebrow and title

---

- [ ] **Step 1: Create src/components/ui/Container.tsx**

```tsx
import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create src/components/ui/Reveal.tsx**

```tsx
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2,
  className = "",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const yOffset = direction === "up" ? 24 : direction === "down" ? -24 : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create src/components/ui/SectionHeading.tsx**

```tsx
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {eyebrow && (
        <p className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-charcoal/60 mb-4">
          {eyebrow}
        </p>
      )}
      <div className="w-10 h-px bg-border mx-auto mb-6" aria-hidden="true" />
      <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-ink mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Container.tsx src/components/ui/Reveal.tsx src/components/ui/SectionHeading.tsx
git commit -m "Add Container, Reveal, and SectionHeading UI primitives"
```

---

### Task 6: Create UI Primitives — Button, Badge, Card

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Card.tsx`

**Interfaces:**
- Produces: `Button` — `variant: "primary" | "secondary" | "ghost"`, `href` (renders `<a>`) or `onClick` (renders `<button>`), optional `icon`, optional `external`, optional `className`
- Produces: `Badge` — `variant: "neutral" | "info" | "warning" | "alert"`, renders inline `<span>`
- Produces: `Card` — `accent?: "amber" | "clay" | "blue"`, `label?: string`, `title: string`, `children: ReactNode`, optional `className`; top-left accent bar + mono label + serif title + body content

---

- [ ] **Step 1: Create src/components/ui/Button.tsx**

```tsx
import { type ReactNode } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<string, string> = {
  primary:
    "bg-ink text-bone hover:bg-charcoal active:scale-[0.98]",
  secondary:
    "border border-ink text-ink bg-transparent hover:bg-ink/5 active:scale-[0.98]",
  ghost:
    "text-ink bg-transparent hover:bg-ink/5 active:scale-[0.98]",
};

export function Button({
  variant = "primary",
  children,
  icon,
  className = "",
  href,
  external,
  onClick,
}: ButtonProps) {
  const classes = `
    inline-flex items-center gap-2 px-6 py-3 text-base font-medium
    rounded-md transition-colors duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2
    ${variantClasses[variant]}
    ${className}
  `.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
}

export function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10.5 8.5V11.5C10.5 11.7652 10.3946 12.0196 10.2071 12.2071C10.0196 12.3946 9.76522 12.5 9.5 12.5H2.5C2.23478 12.5 1.98043 12.3946 1.79289 12.2071C1.60536 12.0196 1.5 11.7652 1.5 11.5V4.5C1.5 4.23478 1.60536 3.98043 1.79289 3.79289C1.98043 3.60536 2.23478 3.5 2.5 3.5H5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1.5H12.5V5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8.5L12.5 1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

- [ ] **Step 2: Create src/components/ui/Badge.tsx**

```tsx
import { type ReactNode } from "react";

interface BadgeProps {
  variant?: "neutral" | "info" | "warning" | "alert";
  children: ReactNode;
  className?: string;
}

const badgeVariants: Record<string, string> = {
  neutral: "bg-border/30 text-charcoal border-border",
  info: "bg-trust/10 text-trust border-trust/30",
  warning: "bg-amber/10 text-amber border-amber/30",
  alert: "bg-clay/10 text-clay border-clay/30",
};

export function Badge({ variant = "neutral", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-block font-mono text-xs font-medium
        px-2.5 py-0.5 rounded-sm border
        ${badgeVariants[variant]}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Create src/components/ui/Card.tsx**

```tsx
import { type ReactNode } from "react";

interface CardProps {
  accent?: "amber" | "clay" | "blue";
  label?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const accentColors: Record<string, string> = {
  amber: "bg-amber",
  clay: "bg-clay",
  blue: "bg-trust",
};

export function Card({
  accent,
  label,
  title,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        relative bg-bone border border-border rounded-lg
        p-6 lg:p-8
        transition-shadow duration-300 transition-transform duration-300
        hover:shadow-soft hover:-translate-y-0.5 hover:border-charcoal/20
        ${className}
      `.trim()}
    >
      {accent && (
        <div
          className={`absolute top-0 left-0 w-[3px] h-6 rounded-br-sm ${accentColors[accent]}`}
          aria-hidden="true"
        />
      )}
      <div className={accent ? "pl-1" : ""}>
        {label && (
          <p className="font-mono text-xs font-medium text-charcoal/60 mb-2 tracking-wider">
            {label}
          </p>
        )}
        <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink mb-3">
          {title}
        </h3>
        <p className="text-charcoal leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Button.tsx src/components/ui/Badge.tsx src/components/ui/Card.tsx
git commit -m "Add Button, Badge, and Card UI components"
```

---

### Task 7: Create Layout Components — Header, Footer, PageShell

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/PageShell.tsx`

**Interfaces:**
- Produces: `Header` — static header with logo-mark + wordmark, nav links, mobile "Menu" toggle with `aria-expanded`/`aria-controls`, closes on nav click, scrolls away naturally
- Produces: `Footer` — dark navy background, logo + wordmark, link columns, license/safety disclaimers, legal text at `text-sm`
- Produces: `PageShell` — wraps children with Header + `<main>` + Footer, includes skip-to-content link

---

- [ ] **Step 1: Create src/components/layout/Header.tsx**

```tsx
import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainNavItems, githubLink } from "../../data/navigation";
import logoMark from "../../assets/logo-mark.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-paper/95 border-b border-border/50" role="banner">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2"
            aria-label="Accountability Atlas — Home"
          >
            <img
              src={logoMark}
              alt=""
              className="w-8 h-8 flex-shrink-0"
              aria-hidden="true"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-semibold text-ink leading-tight block">
                Accountability Atlas
              </span>
              <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-charcoal/60 uppercase">
                Civic Evidence Platform
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50
                  ${isActive(item.href)
                    ? "text-ink"
                    : "text-charcoal hover:text-ink"
                  }
                `.trim()}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal hover:text-ink rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50"
            >
              {githubLink.label}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M9 6.5V9.5C9 9.76522 8.89464 10.0196 8.70711 10.2071C8.51957 10.3946 8.26522 10.5 8 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H5.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 1.5H10.5V4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 7.5L10.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal hover:text-ink rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile nav panel */}
        <div
          id="mobile-nav"
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${menuOpen ? "max-h-64 pb-4" : "max-h-0"}
          `.trim()}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 py-2 border-t border-border/30">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                  ${isActive(item.href) ? "text-ink bg-ink/5" : "text-charcoal hover:text-ink hover:bg-ink/3"}
                `.trim()}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal hover:text-ink rounded-md transition-colors duration-200"
              onClick={closeMenu}
            >
              {githubLink.label}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M9 6.5V9.5C9 9.76522 8.89464 10.0196 8.70711 10.2071C8.51957 10.3946 8.26522 10.5 8 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H5.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 1.5H10.5V4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 7.5L10.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create src/components/layout/Footer.tsx**

```tsx
import { Link } from "react-router-dom";
import logoMark from "../../assets/logo-mark.svg";

const footerLinks = [
  { label: "Methodology", href: "/methodology" },
  { label: "Contribute", href: "/contribute" },
  {
    label: "GitHub",
    href: "https://github.com/nuttyproducer/accountability-atlas",
    external: true,
  },
  {
    label: "Security",
    href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/SECURITY.md",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-bone/70" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoMark}
                alt=""
                className="w-6 h-6 flex-shrink-0 opacity-80"
                aria-hidden="true"
              />
              <div>
                <span className="font-serif text-lg font-semibold text-bone/90 leading-tight block">
                  Accountability Atlas
                </span>
                <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-bone/50 uppercase">
                  Civic Evidence Platform
                </span>
              </div>
            </div>
          </div>

          {/* Links column */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-bone/70 hover:text-bone transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-bone/70 hover:text-bone transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="border-bone/20 mb-8" aria-hidden="true" />

        <div className="space-y-3 text-sm">
          <p>
            Code licensed under{" "}
            <a
              href="https://github.com/nuttyproducer/accountability-atlas/blob/main/LICENSE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/80 hover:text-bone underline underline-offset-2 transition-colors duration-200"
            >
              AGPL-3.0-or-later
            </a>
            . Content licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/80 hover:text-bone underline underline-offset-2 transition-colors duration-200"
            >
              CC BY-SA 4.0
            </a>
            .
          </p>
          <p>
            This project does not provide legal advice. This is not a
            registered NGO or charity. No partnership with listed
            organizations is implied.
          </p>
          <p className="font-mono text-xs text-bone/50 pt-4">
            &copy; {new Date().getFullYear()} Accountability Atlas contributors.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Create src/components/layout/PageShell.tsx**

```tsx
import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx src/components/layout/PageShell.tsx
git commit -m "Add Header, Footer, and PageShell layout components"
```

---

### Task 8: Create Landing Page Sections — Hero, StatusNotice

**Files:**
- Create: `src/components/landing/Hero.tsx`
- Create: `src/components/landing/StatusNotice.tsx`

**Interfaces:**
- Consumes: `Button` + `ArrowIcon` from `../ui/Button`, `Reveal` from `../ui/Reveal`, `Container` from `../ui/Container`
- Produces: `Hero` — staggered Framer Motion entrance on mount with eyebrow, h1, tagline, description, CTAs, amber accent line
- Produces: `StatusNotice` — static amber-bordered disclosure panel (no animation)

---

- [ ] **Step 1: Create src/components/landing/Hero.tsx**

```tsx
import { Button, ArrowIcon, ExternalIcon } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24" aria-labelledby="hero-title">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal delay={0} duration={0.6}>
            <p className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-charcoal/60 mb-6">
              Open Civic Evidence Platform
            </p>
          </Reveal>

          <Reveal delay={0.12} duration={0.6}>
            <h1
              id="hero-title"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] mb-6"
            >
              Accountability Atlas
            </h1>
          </Reveal>

          <Reveal delay={0.22} duration={0.6}>
            <p className="font-serif text-2xl lg:text-3xl font-semibold text-charcoal leading-tight mb-6">
              Evidence for protection.
              <br />
              Action for accountability.
            </p>
          </Reveal>

          {/* Amber accent line — coordinate marker motif */}
          <Reveal delay={0.28} duration={0.5}>
            <div
              className="w-6 h-0.5 bg-amber mx-auto mb-6"
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={0.32} duration={0.5}>
            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-10">
              An open civic-technology project for verified atrocity
              documentation, humanitarian accountability, legal and policy
              tracking, and lawful public action.
            </p>
          </Reveal>

          <Reveal delay={0.42} duration={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/methodology" variant="primary" icon={<ArrowIcon />}>
                Read the Methodology
              </Button>
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas"
                variant="secondary"
                icon={<ExternalIcon />}
                external
              >
                Contribute on GitHub
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Create src/components/landing/StatusNotice.tsx**

```tsx
export function StatusNotice() {
  return (
    <section aria-label="Project status">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="bg-amber/5 border-l-2 border-amber py-6 px-5 rounded-r-md">
          <p className="font-mono text-xs font-medium tracking-wider text-charcoal/60 uppercase mb-2">
            Project Status
          </p>
          <p className="text-sm text-charcoal leading-relaxed">
            Early-stage open-source initiative. Not yet a registered NGO,
            charity, legal entity, or formal partner of any listed
            organization.
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Hero.tsx src/components/landing/StatusNotice.tsx
git commit -m "Add Hero section and StatusNotice component"
```

---

### Task 9: Create Landing Page Sections — MissionSection, ModuleGrid, SafetyPrinciples

**Files:**
- Create: `src/components/landing/MissionSection.tsx`
- Create: `src/components/landing/ModuleGrid.tsx`
- Create: `src/components/landing/SafetyPrinciples.tsx`

**Interfaces:**
- Consumes: `Reveal`, `Container`, `SectionHeading`, `Card`; `modules` data, `principles` data
- Produces: `MissionSection` — single centered paragraph explaining why the project exists
- Produces: `ModuleGrid` — 3-col responsive grid of Cards with amber accent, staggered reveal
- Produces: `SafetyPrinciples` — 2-col grid of principle items with clay dot markers

---

- [ ] **Step 1: Create src/components/landing/MissionSection.tsx**

```tsx
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function MissionSection() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="mission-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why This Exists"
            title="Building calm public-interest infrastructure."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto text-center">
            Accountability Atlas is being built as calm public-interest
            infrastructure for people who need evidence to be organized,
            sourced, contextualized, and connected to lawful action.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Create src/components/landing/ModuleGrid.tsx**

```tsx
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { modules } from "../../data/modules";

export function ModuleGrid() {
  return (
    <section className="py-24 lg:py-32 bg-bone" aria-labelledby="modules-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We're Building"
            title="Core Modules"
            description="Each module is designed to connect evidence, context, and lawful action — without collecting sensitive data prematurely."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Card
                accent="amber"
                label={`Module ${String(i + 1).padStart(2, "0")}`}
                title={mod.title}
              >
                {mod.description}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Create src/components/landing/SafetyPrinciples.tsx**

```tsx
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { principles } from "../../data/principles";

export function SafetyPrinciples() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="principles-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Safety Principles"
            description="These principles guide every decision, from code to content to community."
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {principles.map((principle, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 bg-bone border border-border rounded-lg p-5 transition-shadow duration-300 hover:shadow-soft hover:border-charcoal/20">
                {/* Clay dot — echo of the coordinate point motif */}
                <span
                  className="flex-shrink-0 w-2 h-2 rounded-full bg-clay mt-2"
                  aria-hidden="true"
                />
                <span className="text-charcoal leading-relaxed">
                  {principle}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/landing/MissionSection.tsx src/components/landing/ModuleGrid.tsx src/components/landing/SafetyPrinciples.tsx
git commit -m "Add Mission, ModuleGrid, and SafetyPrinciples sections"
```

---

### Task 10: Create Landing Page Sections — NotThisProject, RoadmapPreview, ContributorCTA

**Files:**
- Create: `src/components/landing/NotThisProject.tsx`
- Create: `src/components/landing/RoadmapPreview.tsx`
- Create: `src/components/landing/ContributorCTA.tsx`

**Interfaces:**
- Consumes: `Reveal`, `Container`, `SectionHeading`, `Card`, `Badge`, `Button`, `ExternalIcon`; `roadmap` data
- Produces: `NotThisProject` — single statement in bordered panel
- Produces: `RoadmapPreview` — vertical stack of Cards with blue accent, Phase 1 gets "Current" badge
- Produces: `ContributorCTA` — centered CTA with "View Good First Issues" + "Read the Contribution Guide" buttons

---

- [ ] **Step 1: Create src/components/landing/NotThisProject.tsx**

```tsx
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function NotThisProject() {
  return (
    <section className="py-24 lg:py-32 bg-bone" aria-labelledby="not-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Clarity"
            title="What This Project Will Not Do"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto bg-bone border border-border rounded-lg p-8">
            <p className="text-charcoal leading-relaxed text-lg">
              This is not a rage platform, a doxing project, a donation
              intermediary, a replacement for humanitarian organizations, or
              a legal authority.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Create src/components/landing/RoadmapPreview.tsx**

```tsx
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { roadmap } from "../../data/roadmap";

export function RoadmapPreview() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="roadmap-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where We're Going"
            title="Roadmap"
            description="Each phase builds on the last. We move carefully — accuracy and safety before speed."
          />
        </Reveal>
        <div className="space-y-4 max-w-2xl mx-auto">
          {roadmap.map((phase, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <Card accent="blue" label={phase.phase} title={phase.title}>
                <span>{phase.description}</span>
                {i === 0 && (
                  <span className="block mt-3">
                    <Badge variant="info">Current phase</Badge>
                  </span>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Create src/components/landing/ContributorCTA.tsx**

```tsx
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { Button, ExternalIcon } from "../ui/Button";

export function ContributorCTA() {
  return (
    <section className="py-24 lg:py-32 bg-bone" aria-labelledby="cta-title">
      <Container>
        <Reveal amount={0.15}>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="cta-title"
              className="font-serif text-3xl lg:text-4xl font-semibold text-ink mb-6"
            >
              Help build the foundation.
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-10 max-w-xl mx-auto">
              We are looking for careful contributors: developers, designers,
              researchers, legal and human-rights reviewers, security
              reviewers, writers, translators, and civic-tech contributors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                variant="primary"
                icon={<ExternalIcon />}
                external
              >
                View Good First Issues
              </Button>
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/CONTRIBUTING.md"
                variant="secondary"
                icon={<ExternalIcon />}
                external
              >
                Read the Contribution Guide
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/landing/NotThisProject.tsx src/components/landing/RoadmapPreview.tsx src/components/landing/ContributorCTA.tsx
git commit -m "Add NotThisProject, RoadmapPreview, and ContributorCTA sections"
```

---

### Task 11: Create Pages — HomePage

**Files:**
- Create: `src/pages/HomePage.tsx`

**Interfaces:**
- Consumes: All landing section components
- Produces: `HomePage` — composes all landing sections in order with restrained paper/bone alternation

Section order and background alternation:
1. Hero — no background override (inherits body gradient)
2. StatusNotice — no background override
3. MissionSection — no override (paper)
4. ModuleGrid — `bg-bone` (first shift)
5. SafetyPrinciples — no override (paper)
6. NotThisProject — `bg-bone`
7. RoadmapPreview — no override (paper)
8. ContributorCTA — `bg-bone`

This limits alternation to 3 shifts, avoiding a striped feel. The shifts happen only where cards cluster (ModuleGrid, NotThisProject, ContributorCTA).

---

- [ ] **Step 1: Create src/pages/HomePage.tsx**

```tsx
import { Hero } from "../components/landing/Hero";
import { StatusNotice } from "../components/landing/StatusNotice";
import { MissionSection } from "../components/landing/MissionSection";
import { ModuleGrid } from "../components/landing/ModuleGrid";
import { SafetyPrinciples } from "../components/landing/SafetyPrinciples";
import { NotThisProject } from "../components/landing/NotThisProject";
import { RoadmapPreview } from "../components/landing/RoadmapPreview";
import { ContributorCTA } from "../components/landing/ContributorCTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="mt-8">
        <StatusNotice />
      </div>
      <div className="mt-20">
        <MissionSection />
      </div>
      <ModuleGrid />
      <SafetyPrinciples />
      <NotThisProject />
      <RoadmapPreview />
      <ContributorCTA />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/HomePage.tsx
git commit -m "Add HomePage composing all landing sections"
```

---

### Task 12: Create Pages — MethodologyPage, ContributePage

**Files:**
- Create: `src/pages/MethodologyPage.tsx`
- Create: `src/pages/ContributePage.tsx`

**Interfaces:**
- Consumes: `Container`, `Reveal`, `Badge`, `Button`, `ExternalIcon`, `ArrowIcon`
- Produces: `MethodologyPage` — useful preview page with source hierarchy, verification states, safety boundaries, links to GitHub docs
- Produces: `ContributePage` — intentional page with role categories, real links to CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, and GitHub issues

---

- [ ] **Step 1: Create src/pages/MethodologyPage.tsx**

```tsx
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { Button, ExternalIcon, ArrowIcon } from "../components/ui/Button";

export function MethodologyPage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-charcoal/60 mb-4">
              Methodology
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-4">
              How We Work With Evidence
            </h1>
            <div className="w-10 h-px bg-border mb-8" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
              Our full source methodology, verification model, and evidence
              standards are published and versioned in the project repository.
              This page is a preview — the complete documentation lives on
              GitHub and will expand through Phase 2.
            </p>
          </Reveal>

          {/* Source hierarchy preview */}
          <Reveal delay={0.15}>
            <section className="mb-10" aria-labelledby="sources-heading">
              <h2 id="sources-heading" className="font-serif text-2xl font-semibold text-ink mb-4">
                Source Hierarchy
              </h2>
              <div className="space-y-2">
                {[
                  { label: "Primary", desc: "Court records, UN documents, official government statements, verified audiovisual evidence", variant: "info" as const },
                  { label: "Secondary", desc: "NGO reports, investigative journalism, academic research, institutional findings", variant: "neutral" as const },
                  { label: "Tertiary", desc: "News reports, public statements, civil society documentation, unverified leads", variant: "warning" as const },
                ].map((level) => (
                  <div key={level.label} className="flex items-start gap-3 bg-bone border border-border rounded-md p-4">
                    <Badge variant={level.variant}>{level.label}</Badge>
                    <p className="text-sm text-charcoal leading-relaxed">{level.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Verification states preview */}
          <Reveal delay={0.2}>
            <section className="mb-10" aria-labelledby="verification-heading">
              <h2 id="verification-heading" className="font-serif text-2xl font-semibold text-ink mb-4">
                Verification States
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Every piece of evidence is assigned a verification state. This
                system is part of our identity — it tells readers exactly how
                confident we are in each source.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Lead", "Preserved", "Corroborated", "Verified", "Disputed", "Corrected", "Withdrawn"].map((state) => (
                  <Badge key={state} variant="neutral">{state}</Badge>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Safety boundaries */}
          <Reveal delay={0.25}>
            <section className="mb-10" aria-labelledby="safety-heading">
              <h2 id="safety-heading" className="font-serif text-2xl font-semibold text-ink mb-4">
                Safety Boundaries
              </h2>
              <ul className="space-y-2 text-charcoal/80 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>No personally identifiable information is published without verified consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>No graphic or sensitive content is displayed without content warnings and secure review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>All sources are assessed for authenticity, context, and potential harm before publication.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>Corrections are issued publicly and promptly when errors are identified.</span>
                </li>
              </ul>
            </section>
          </Reveal>

          {/* Links to full docs */}
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/docs/methodology.md"
                variant="primary"
                icon={<ExternalIcon />}
                external
              >
                Read Full Methodology
              </Button>
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/docs/source-policy.md"
                variant="secondary"
                icon={<ExternalIcon />}
                external
              >
                Source Policy
              </Button>
              <Button href="/" variant="ghost" icon={<ArrowIcon />}>
                Back home
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
```

- [ ] **Step 2: Create src/pages/ContributePage.tsx**

```tsx
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button, ExternalIcon, ArrowIcon } from "../components/ui/Button";

const roleCategories = [
  {
    title: "Developers",
    description:
      "Frontend, backend, data engineering, and security. TypeScript, Python, or experience with civic-tech tools.",
  },
  {
    title: "Designers",
    description:
      "UI/UX, information architecture, accessibility, and visual design for public-interest tools.",
  },
  {
    title: "Researchers",
    description:
      "Open-source intelligence, legal research, human rights documentation, policy analysis.",
  },
  {
    title: "Reviewers",
    description:
      "Legal, human-rights, security, and editorial review of evidence, copy, and methodology.",
  },
  {
    title: "Writers & Translators",
    description:
      "Documentation, methodology writing, translation, and plain-language summaries.",
  },
];

export function ContributePage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-charcoal/60 mb-4">
              Contribute
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-4">
              Help Build the Foundation
            </h1>
            <div className="w-10 h-px bg-border mb-8" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
              Accountability Atlas is an open-source project built by careful
              contributors. We welcome developers, designers, researchers,
              legal reviewers, security auditors, writers, and translators.
              Every contribution is reviewed for safety and accuracy.
            </p>
          </Reveal>

          {/* Role categories */}
          <Reveal delay={0.15}>
            <section className="mb-10" aria-labelledby="roles-heading">
              <h2 id="roles-heading" className="font-serif text-2xl font-semibold text-ink mb-6">
                Contributor Roles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roleCategories.map((role) => (
                  <div
                    key={role.title}
                    className="bg-bone border border-border rounded-lg p-5"
                  >
                    <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                      {role.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Before contributing */}
          <Reveal delay={0.2}>
            <section className="mb-10" aria-labelledby="before-heading">
              <h2 id="before-heading" className="font-serif text-2xl font-semibold text-ink mb-4">
                Before You Start
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Please read these documents before contributing. They define
                how we work together safely and effectively.
              </p>
              <ul className="space-y-2">
                {[
                  { label: "Contribution Guide", href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/CONTRIBUTING.md" },
                  { label: "Code of Conduct", href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/CODE_OF_CONDUCT.md" },
                  { label: "Security Policy", href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/SECURITY.md" },
                  { label: "Open Roles", href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/docs/open-roles.md" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200"
                    >
                      {link.label}
                      <ExternalIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Links */}
          <Reveal delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                variant="primary"
                icon={<ExternalIcon />}
                external
              >
                View Good First Issues
              </Button>
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/CONTRIBUTING.md"
                variant="secondary"
                icon={<ExternalIcon />}
                external
              >
                Read the Contribution Guide
              </Button>
              <Button href="/" variant="ghost" icon={<ArrowIcon />}>
                Back home
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/MethodologyPage.tsx src/pages/ContributePage.tsx
git commit -m "Add Methodology and Contribute pages with real content"
```

---

### Task 13: Set Up App Entry Point and Routing

**Files:**
- Create: `src/App.tsx`
- Create: `src/main.tsx`

**Interfaces:**
- Consumes: `PageShell`, `HomePage`, `MethodologyPage`, `ContributePage`; `react-router-dom`, `index.css`
- Produces: Running SPA with three routes, all wrapped in `PageShell` (header + main + footer)

---

- [ ] **Step 1: Create src/App.tsx**

```tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { HomePage } from "./pages/HomePage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { ContributePage } from "./pages/ContributePage";

export default function App() {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/contribute" element={<ContributePage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}
```

- [ ] **Step 2: Create src/main.tsx**

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 3: Verify the app builds**

```bash
npm run build
```

Expected: TypeScript compilation and Vite build succeed with no errors. Output in `dist/`.

- [ ] **Step 4: Verify the app runs in dev mode**

```bash
npm run dev
```

Expected: Vite dev server starts. Open the URL in a browser and verify:
- Homepage renders all sections in order
- `/methodology` route works
- `/contribute` route works
- No console errors

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/main.tsx
git commit -m "Set up App entry point with routing"
```

---

### Task 14: Accessibility and Responsive Polish

**Files:**
- Modify: All component files that need accessibility or responsive refinements

**Checks to perform:**

---

- [ ] **Step 1: Verify semantic HTML structure**

Checklist:
- [ ] One `<h1>` on each page
- [ ] Logical heading order (h1 → h2 → h3)
- [ ] `<header>`, `<main>`, `<nav>`, `<footer>` used correctly
- [ ] `aria-labelledby` on sections that need it
- [ ] `aria-label` on nav elements
- [ ] `role="banner"` on header, `role="contentinfo"` on footer
- [ ] Skip-to-content link present and functional

Run:
```bash
npm run build
```
Expected: no TypeScript errors.

- [ ] **Step 2: Test keyboard navigation**

Manual checks:
- [ ] Tab through all interactive elements
- [ ] All links and buttons have visible `focus-visible` rings
- [ ] Mobile menu opens with Enter/Space, closes on nav link click
- [ ] Skip-to-content link is first focusable element

- [ ] **Step 3: Test responsive behavior**

Manual checks at these widths:
- [ ] 375px (mobile): single column, readable text, stacked CTAs, menu button visible
- [ ] 768px (tablet): 2-col grids, inline nav, reasonable spacing
- [ ] 1280px (desktop): full layout, 3-col module grid, `text-7xl` hero

Check:
- [ ] No horizontal scroll at any width
- [ ] Touch targets ≥ 44px on mobile
- [ ] Text is readable at all widths

- [ ] **Step 4: Test prefers-reduced-motion**

In Chrome DevTools: Rendering → "Emulate CSS media feature prefers-reduced-motion: reduce"

- [ ] All Framer Motion animations disabled
- [ ] All CSS transitions/animations disabled
- [ ] Content still fully visible and readable

- [ ] **Step 5: Check color contrast**

Spot-check:
- [ ] `text-ink` (#101828) on `bg-paper` (#F7F1E8) → contrast ratio ~16:1 ✓
- [ ] `text-charcoal/80` on `bg-bone` → check passes
- [ ] `text-amber` on amber backgrounds → check badge text is readable
- [ ] `text-bone/70` on `bg-ink` footer → check passes

- [ ] **Step 6: Commit any fixes**

```bash
git add .
git commit -m "Add accessibility and responsive polish"
```

---

### Task 15: Final Verification and Build

**Files:**
- None modified — verification only

---

- [ ] **Step 1: Clean build**

```bash
npm run build
```

Expected: builds successfully with no TypeScript or Vite errors.

- [ ] **Step 2: Preview production build**

```bash
npm run preview
```

Manual checks in browser:
- [ ] Homepage renders correctly
- [ ] `/methodology` renders with real content
- [ ] `/contribute` renders with real content
- [ ] All links work (internal + external)
- [ ] No console errors
- [ ] Responsive at mobile, tablet, desktop
- [ ] Animations are subtle and calm
- [ ] Footer disclaimers are readable

- [ ] **Step 3: Run through acceptance criteria**

- [ ] App runs locally with `npm run dev`
- [ ] Build passes with `npm run build`
- [ ] Landing page is responsive
- [ ] `/methodology` route exists with useful preview content
- [ ] `/contribute` route exists with real links to repo docs
- [ ] No sensitive submission forms exist
- [ ] No false partnership claims exist
- [ ] Footer includes safety/license notes at `text-sm`
- [ ] README remains intact (verify: `git status` shows no README changes)
- [ ] No major accessibility issues
- [ ] No console errors
- [ ] All links functional (internal routes + external GitHub links)

- [ ] **Step 4: Final commit if any last fixes**

```bash
git status
git add .
git commit -m "Final build verification and polish"
```

---

## Spec Coverage Cross-Reference

| Spec Section | Task(s) |
|---|---|
| 2. Creative Direction (colors, typography) | Task 2 |
| 3. Logo-Mark System | Task 3 |
| 4. Animation System | Task 5 (Reveal) + Tasks 8-10 (usage) |
| 5. Component Designs (Button, Card, Badge) | Tasks 5-6 |
| 6.1 Header | Task 7 |
| 6.2 Hero | Task 8 |
| 6.3 StatusNotice | Task 8 |
| 6.4 MissionSection | Task 9 |
| 6.5 ModuleGrid | Task 9 |
| 6.6 SafetyPrinciples | Task 9 |
| 6.7 NotThisProject | Task 10 |
| 6.8 RoadmapPreview | Task 10 |
| 6.9 ContributorCTA | Task 10 |
| 6.10 Footer | Task 7 |
| 7. Placeholder Pages | Task 12 |
| 8. Background & Texture | Tasks 2-3 |
| 9. Responsive Strategy | Task 14 |
| 10. Accessibility | Tasks 7, 13-14 |
| 11. SEO Metadata | Task 1 |
| 12. File Architecture | Tasks 1-13 |
| 14. Deployment | Tasks 1, 3 (`_redirects`) |

---

## Review Corrections Incorporated

1. **`/methodology` as useful preview** — Task 12: source hierarchy, verification states, safety boundaries, GitHub doc links
2. **Contributor CTA buttons** — Task 10: "View Good First Issues" + "Read the Contribution Guide"
3. **Header static, `bg-paper/95`** — Task 7: no `backdrop-blur`, calm bottom border
4. **Subtle hero visual anchor** — Task 8: amber coordinate accent line between tagline and description (satisfies "abstract evidence-card" suggestion without slowing implementation)
5. **Sparing paper/bone alternation** — Task 11: only 3 shifts across 8 sections, clustered where cards appear
6. **Mobile "Menu" button** — Task 7: `aria-expanded`, `aria-controls`, keyboard support, closes on nav link click
7. **Placeholder pages with real links** — Task 12: links to CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, methodology.md, source-policy.md, open-roles.md, good-first-issues
