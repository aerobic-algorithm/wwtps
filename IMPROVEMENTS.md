# Site Improvement Ideas

Comprehensive upgrade proposals for Hub Wastewater Solutions website, grouped by impact vs. effort.

---

## Tier 1 — High Impact, Minimal Code

| # | Idea | Description | Files |
|---|---|---|---|
| 1 | **Page transition fade** | Wrap `<Outlet>` with a keyed `<div>` so each route change triggers a brief `fadeInUp` animation. Feels polished — no library needed. | `Layout.jsx`, `index.css` |
| 2 | **Hero visual upgrade** | Animated gradient background, floating decorative shapes, staggered word reveal on heading, subtle glow shift. | `Home.jsx`, `index.css` |
| 3 | **Micro-interactions** | Card shadow color-shift on hover (service/value cards), button press ripple on CTAs, nav underline sweeps from left instead of center. | `index.css`, `CTAButton.jsx` |
| 4 | **Animated stat counters** | `useAnimatedCounter` hook counts up (0→N) when scrolled into view. `StatsCounter` component + a stats row on the Home page. | new hook, new component, `Home.jsx`, `index.css` |
| 5 | **Form success celebration** | Replace the plain success text with an SVG checkmark draw animation + a "Thank you" card after form submission. | `Contact.jsx`, `index.css`, locale files |
| 6 | **Theme-aware smooth transitions** | Add `transition: background 0.3s ease, color 0.3s ease` to `body` and key elements so dark/light mode toggles smoothly. | `index.css` |

---

## Tier 2 — New Components, Moderate Effort

| # | Idea | Description |
|---|---|---|
| 7 | **Install framer-motion** | (~5KB gzipped) Enables spring-physics card hovers, drag-to-dismiss modals, `AnimatePresence` page transitions, and cleaner staggered children. |
| 8 | **Scroll-triggered parallax** | A `useParallax` hook that applies `translateY()` based on scroll position to the hero section for depth. |
| 9 | **Animated process diagram** | Connected SVG path draw animation between stages and horizontal scroll snap on mobile. |
| 10 | **Gallery image shimmer skeleton** | Replace solid `bg-muted` placeholder on gallery images with a CSS gradient sweep shimmer while loading. |

---

## Tier 3 — Highest Effort, Biggest "Wow"

| # | Idea | Description |
|---|---|---|
| 11 | **Interactive hero illustration** | Animated SVG water-treatment flow with droplets/pipes instead of the static hero card. |
| 12 | **Water ripple cursor** | A subtle mouse follower that creates expanding ring ripples — thematic and unique. |
| 13 | **Full-page scroll snap** | `scroll-snap-type: y mandatory` on the Home page so each section feels like a distinct slide. |

---

## Implemented

| # | Date | Status |
|---|---|---|
| 1 | 2026-06-22 | ✅ |
| 2 | 2026-06-22 | ✅ |
| 3 | 2026-06-22 | ✅ |
| 4 | 2026-06-22 | ✅ |
| 5 | 2026-06-22 | ✅ |
| 6 | 2026-06-22 | ✅ |

*Last updated: 2026-06-22*
