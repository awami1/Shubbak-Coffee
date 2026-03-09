# CLAUDE.md — Shubbak Coffee

## Project Overview

Shubbak Coffee (شُبّاك كوفي) is a pre-launch marketing website for a specialty coffee shop located in Al-Qaseeri area, Qatif, Saudi Arabia. The site is primarily Arabic (RTL) with English translations.

## Tech Stack

- **Framework**: React 18.3.1 (client-side rendering)
- **Build Tool**: Vite 6.0.0 with `@vitejs/plugin-react`
- **Module System**: ES modules (`"type": "module"`)
- **Styling**: Inline CSS-in-JS via React `style` prop — no CSS files, no CSS frameworks
- **Fonts**: Google Fonts loaded inline (Tajawal, Aref Ruqaa, Amiri, Reem Kufi)
- **Language**: JavaScript (JSX) — no TypeScript

## Repository Structure

```
Shubbak-Coffee/
├── index.html          # HTML entry point (RTL, lang="ar")
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration (output: dist/)
├── README.md           # Project docs (Arabic)
└── src/
    ├── main.jsx        # React root mount
    └── App.jsx         # Monolithic main component (~977 lines)
```

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

## Code Conventions

### Architecture

- **Single-file monolith**: All UI lives in `src/App.jsx`. There are no separate component files.
- **Functional components only**: Uses React hooks (`useState`, `useEffect`, `useRef`).
- **No external state management**: Local state only (`useState`).
- **Custom hook `useInView(threshold)`**: Intersection Observer wrapper for scroll-triggered animations.

### Styling

- All styles are **inline** via the `style` prop. Do not introduce CSS files or CSS-in-JS libraries.
- The color palette is defined as a constant object `C` at the top of `App.jsx`. Always reference colors from `C`.
- Use `clamp()` for fluid/responsive typography.
- Use `willChange: 'transform'` hints for animated elements.

### Color Palette (from `const C`)

Browns: `#B5722C` (copper), `#7A5C3E` (brown), `#4A3520` (brownDark), `#2E1E10` (brownDeep)
Creams: `#F0DCC8` (cream), `#FAF3EB` (creamLight), `#E8CDAE` (creamWarm), `#D4B896` (creamDark)
Golds: `#D4A043` (gold), `#E8C06A` (goldLight), `#F0D48A` (goldPale), `#FFD98E` (goldGlow)
Neutrals: `#1A1410` (black), `#231B14` (blackWarm), `#2C221A` (blackSoft)
Accent: `#2A9D8F` (teal), `#1E7A6F` (tealDark)

### RTL & Internationalization

- The app is **RTL-first** (`dir="rtl"`, `lang="ar"` on root).
- Arabic is the primary language; English appears as secondary labels.
- Always test layout in RTL mode.

### Animation Patterns

- **Phase-based intro**: Staggered animation via `setTimeout` controlling a `phase` state (0–3).
- **Scroll-based nav**: Navigation bar appearance changes based on `scrollY` state.
- **Reveal component**: Wraps elements with Intersection Observer fade-in, supports direction variants and delay.
- **Particle effects**: Floating particles in hero sections.
- **SVG patterns**: Mashrabiya (Islamic geometric) decorative patterns via SVG `<defs>`.

### Reusable Components (defined in App.jsx)

- `Reveal` — Scroll-triggered animation wrapper
- `MashrabiyaPattern` — SVG Islamic geometric pattern
- `MashrabiyaBand` — Decorative band using mashrabiya pattern
- `CoffeeBeanLogo` — SVG coffee bean logo
- `Particles` — Floating particle effect
- `StorefrontSign` — Animated SVG storefront sign

## Quality & Tooling

- **No linting** configured (no ESLint)
- **No formatting** configured (no Prettier)
- **No tests** configured (no Jest, Vitest, or testing library)
- **No CI/CD** pipelines
- **No `.gitignore`** — be careful not to commit `node_modules/` or `dist/`

## Deployment

Targets mentioned in README:
- **Vercel**: `vercel deploy`
- **Netlify**: Direct repo connection
- **GitHub Pages**: Requires `base` config in `vite.config.js`

## Guidelines for AI Assistants

1. **Maintain the monolithic pattern** — do not split `App.jsx` into separate files unless explicitly asked.
2. **Keep styles inline** — do not introduce CSS files, Tailwind, or styled-components.
3. **Use the `C` color palette** — never hardcode color hex values; add new colors to `C` if needed.
4. **RTL-aware** — all layout and text changes must work correctly in RTL mode.
5. **Performance** — the site is animation-heavy; use `passive: true` on scroll listeners, Intersection Observer for visibility, and `willChange` hints sparingly.
6. **No unnecessary dependencies** — the project is intentionally minimal. Do not add packages without being asked.
7. **Arabic content** — preserve Arabic text carefully; do not machine-translate or modify Arabic strings without confirmation.
