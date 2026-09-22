# Dhruv Rangani — Portfolio (Next.js)

A frontend-only portfolio built with **Next.js 14 (App Router)** using an **atomic design**
component structure. No backend — the contact form is client-side only.

Stack: Next.js · React 18 · **GSAP** (ScrollTrigger) for motion · **lucide-react** icons ·
**Roboto** via `next/font` · plain CSS with design tokens.

## Run it

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

Build for production (stop `npm run dev` first — both write to `.next/`):

```bash
npm run build
npm start
```

## Routing (App Router — file-based)

| URL          | File                        |
| ------------ | --------------------------- |
| `/`          | `src/app/page.js`           |
| `/projects`  | `src/app/projects/page.js`  |
| `/about`     | `src/app/about/page.js`     |
| `/services`  | `src/app/services/page.js`  |
| `/contact`   | `src/app/contact/page.js`   |
| (any other)  | `src/app/not-found.js` (404)|

The navbar + footer live in `src/app/layout.js`, so they persist across every route.

## Atomic design structure

```
src/
├── app/                     # routes (App Router) + layout + global CSS
├── data/
│   └── site.js              # ← ALL content lives here (edit this to update text)
└── components/
    ├── atoms/               # Button, Badge, Chip, Logo, Icon (Lucide), CountUp,
    │                        #   Reveal, Motion (GSAP), SectionHeading
    ├── molecules/           # StatItem, ServiceCard, ProjectCard, SkillBar,
    │                        #   TimelineItem, ContactLine, ServiceRow
    ├── organisms/           # Navbar, Footer, Hero, HeroOrbit (GSAP tech orbit), Marquee,
    │                        #   ServicesPreview, FeaturedProjects, Process, TechStack,
    │                        #   CtaBand, ProjectsGrid, AboutBlock, ServicesList,
    │                        #   ContactSection, ContactForm
    └── templates/           # PageShell (shared page wrapper)
```

- **Atoms** — smallest reusable UI pieces.
- **Molecules** — a few atoms combined into a unit.
- **Organisms** — full page sections built from molecules/atoms.
- **Templates** — page-level layout wrappers.
- **Pages** — the route files in `src/app/` that assemble organisms.

## Editing content

Open `src/data/site.js` and change the text, projects, skills, timeline, tech stack or
contact details. Every component reads from this file, so you never have to dig
through the markup.

- **Project images** are real Unsplash photos (`img`), overlaid with a gradient.
- **Project links** (`links: [{ label, href }]`) render as "Live site ↗" / "Shopify App ↗" buttons.
- **Icons** are Lucide names (`icon: "ai"`, `"map"`, …) mapped in `components/atoms/Icon.jsx`.
- **Tech logos** come from the devicon CDN (`logo` URL).

## Motion

GSAP is the animation engine everywhere (`src/lib/gsap.js` registers ScrollTrigger +
SplitText once):

- `atoms/Motion.jsx` — runs on every route change: page-enter fade, hero SplitText
  word-mask headline + staggered bits, section-heading stagger (`.shead`), tech-stack
  pop (`[data-gsap-stagger]`), GSAP-driven marquee (slows on hover), project-card image
  parallax + 3D tilt, magnetic primary buttons, background-blob parallax, and a 6s
  safety net so a stalled frame loop never leaves the hero hidden.
- `atoms/Reveal.jsx` — ScrollTrigger reveal with `variant` (up/left/right/scale),
  `delay` and `stagger` props. Grids of cards, timeline items and value cards use it.
- `atoms/CountUp.jsx`, `molecules/SkillBar.jsx` — GSAP number/width tweens on scroll.
- `organisms/HeroOrbit.jsx` — the hero visual: two rings of real tech logos orbiting a
  glowing "DR" core (logos counter-rotate to stay upright), floating capability pills.

Everything respects `prefers-reduced-motion` and is React StrictMode-safe (explicit
`fromTo`, guarded targets, `gsap.context().revert()` on cleanup). In development
`window.gsap` is exposed for DevTools poking.

## Notes

- Styling is a single global stylesheet (`src/app/globals.css`) driven by CSS
  variables (design tokens) at `:root`.
- Interactive bits (Motion, Reveal, CountUp, SkillBar, DashboardPanel, Navbar,
  ContactForm) are client components (`"use client"`); everything else is a
  server component.
