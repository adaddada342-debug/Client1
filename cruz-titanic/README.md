# The 400lbs Beef Titanic — Cruz

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fadaddada342-debug%2FClient1&project-name=cruz-titanic&repository-name=cruz-titanic&root-directory=cruz-titanic)

A cinematic, mythic, scroll-driven experience for a fictional larger-than-life human figure named **Cruz**.

> If Apple designed a mythological character experience instead of a product page.

Built with restraint: deep black, warm ember accents, hairline glass, slow easings, deliberate motion. No neon. No clutter.

---

## Stack

- **Next.js 14** (App Router, RSC + dynamic client islands)
- **React 18**
- **TailwindCSS** with a custom design system (tokens, no utility spam)
- **Framer Motion** for UI motion
- **GSAP + ScrollTrigger** for scroll-pinned horizontal timeline
- **React Three Fiber + drei + three** for the hero monolith and the interactive 3D moment

---

## Run it

```bash
cd cruz-titanic
npm install
npm run dev
# open http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

---

## Project structure

```
cruz-titanic/
├─ app/                  # Next.js App Router (layout, page, icon)
├─ components/
│  ├─ ui/                # Section, GlassCard, Reveal, SplitWords, Scramble
│  ├─ three/             # HeroScene, CruzMonolith (R3F)
│  ├─ visuals/           # FeatVisual, GalleryArt (procedural SVG art)
│  ├─ Nav.tsx
│  ├─ Footer.tsx
│  ├─ CursorAura.tsx
│  ├─ GrainOverlay.tsx
│  └─ SmoothScrollProvider.tsx
├─ sections/             # Hero, Feats, Timeline, Gallery, Interactive3D, Closing
├─ lib/                  # data.ts (mythic content)
├─ hooks/                # useReducedMotion, useIsomorphicLayoutEffect
├─ utils/                # cn, easing
├─ styles/               # globals.css (design tokens, glass, typography)
└─ public/cruz/          # grain.svg + procedural assets
```

---

## Design system

- Palette: `ink-950 → ink-500`, `bone-50 → bone-400`, single warm `ember` accent (used sparingly)
- Typography: `Instrument Serif` (display) · `Inter` (sans) · `JetBrains Mono` (numerics & captions)
- Radius: max **8px** (hard rule — no pill shapes)
- Glass: subtle, layered (`.glass`, `.glass-strong`)
- Layered depth via `--mx` / `--my` cursor-driven CSS variables
- Easings: `cubic-bezier(0.16, 1, 0.3, 1)` for everything narrative

---

## Scroll experience

1. **Hero** — Cinematic 3D monolith of Cruz, breathing ember core, parallax camera, split-word title reveal.
2. **Feats** — Eight Apple-style alternating panels, each with its own procedural SVG composition and scroll parallax.
3. **Timeline** — GSAP-pinned horizontal scroll across years 1–16. Cards grow heavier and warmer with age.
4. **Gallery** — Six tilt-on-hover plates, click for blurred-backdrop lightbox.
5. **Interactive 3D** — Orbit Cruz, "Awaken" pulses the ember core.
6. **Closing** — A poetic coda. Glass footer.

All sections respect `prefers-reduced-motion`.

---

## Performance

- 3D scenes lazy-loaded with `next/dynamic` (`ssr: false`)
- DPR clamped to `[1, 1.6]`
- Particle counts, polygon counts, and lights kept minimal but cinematic
- `optimizePackageImports` for `framer-motion` & `@react-three/drei`
- All decorative art is SVG — zero raster image weight in the viewport
- GSAP horizontal scroll disabled on touch / reduced motion

---

## Notes

This is a fictional, mythic dossier — every line of copy is poetic and intentional. Tweak `lib/data.ts` to extend feats, timeline entries, or gallery plates without touching layout code.
