# AGENTS.md

## Cursor Cloud specific instructions

This repository (`deadning-v6`) is a single **static Astro site** (SSG) — a Japanese
SEO/marketing site for a car sound-deadening service. There is no backend, database, or
auth. Content is file-based: JSON region files in `src/content/regions/` and Markdown/MDX
blog posts in `src/content/blog/`.

### Services

- **Astro dev server** is the only runtime service. Start it with `npm run dev` (see
  `README.md` / `package.json`). It serves on **port 4321** with `host: true` set in
  `astro.config.mjs`. The root `/` redirects to `/deadning/osaka/` (per `vercel.json`).
  Pages live at `/deadning/[region]/` and SEO pages at `/[area]/[keyword]/`.

### Build / test / lint notes

- Build with `npm run build` (output to `./dist/`, also generates the sitemap). Preview a
  build with `npm run preview`.
- There is **no lint or unit-test setup** configured in this repo (no ESLint config, no
  test runner, no `lint`/`test` npm scripts).
- Do **not** run `npx astro check` non-interactively: it is not a configured script and
  prompts to install `@astrojs/check`, which hangs without a TTY. Skip it unless you first
  install `@astrojs/check` + `typescript` explicitly.

### Optional / CI-only

- `node scripts/index-urls.mjs` (Google Indexing API ping) runs only post-build in CI
  (`.github/workflows/deploy-and-index.yml`) and needs the `GOOGLE_INDEXING_CREDENTIALS`
  env var. It is **not** needed for local development.
- The root-level `aio_*.ps1` / `aio_update_final.py` files are one-off content tooling, not
  part of the dev/build flow.

### Gotchas

- `.npmrc` sets `legacy-peer-deps=true`; `npm install` relies on it (Astro 6 peer ranges).
