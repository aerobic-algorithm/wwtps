# At-A-Glance — Agent Guide

## Quick start

```bash
npm install      # uses package-lock.json (npm, not pnpm/yarn)
npm run dev      # Vite dev server at localhost, base path: /
npm run build    # production build, base path: /wwtps/
npm run preview  # preview production build locally
npm run lint     # ESLint flat config (no .eslintrc)
npm run deploy   # gh-pages -d dist (publishes to GitHub Pages)
```

## Architecture

- **React 19 + Vite 8** SPA. Single package (not a monorepo).
- **HashRouter** (not BrowserRouter) — required for GitHub Pages SPA routing.
- Routing in `src/App.jsx` with nested routes via `<Layout>` (Header/Footer/Outlet).
- Entrypoint: `src/main.jsx` → `src/App.jsx`.

## i18n

- **i18next + react-i18next** with two locales: English (`en`) and Amharic (`am`).
- Translation JSON in `src/locales/{en,am}/translation.json`.
- Init: `src/i18n/config.js`. User's language preference persisted in `localStorage` under key `language`.

## Notes

- **No tests** — no test framework is installed.
- **No typecheck step** — TypeScript types (`@types/react`) exist for editor hints only; source is `.jsx`.
- Contact form at `src/pages/Contact.jsx` sends to Formspree — replace placeholder `FORM_ENDPOINT` before use.
- Plausible analytics script in `index.html` — currently set to `aerobic-algorithm.github.io` — update if you add a custom domain.
- CI (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`/`master`.
- Vite production base path is `/wwtps/` (configured in `vite.config.js`).
