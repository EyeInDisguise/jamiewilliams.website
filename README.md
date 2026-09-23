# jamiewilliams.website

My personal website, with a few details about me and my projects. More game-development work lives at [jamiegamedev.me](https://jamiegamedev.me).

## Run locally

Requires Node.js 22 or newer. There are no packages to install.

```sh
npm run build
npm run dev
```

Open `http://127.0.0.1:4173`. Rebuild and reload after editing source. Run `npm test` after building.

## Structure

- `src/pages.mjs` — homepage
- `src/detail-pages.mjs` — project and about pages, site details, and 404
- `src/layout.mjs` — shared document, navigation, and footer
- `src/assets/` — styles, locally hosted fonts, and favicon
- `scripts/` — static build and local preview
- `dist/` — generated site, committed so it can be served without a build service

Tests check page metadata, internal links, fragments, asset references, and the font budget.

## Content

Project descriptions use verified material from my existing work. The RFID page is based on its [README](https://github.com/EyeInDisguise/Jamie-Hackathon-2026). The site was built with Codex assistance. Demo projects and articles created for the initial site have been removed; they weren’t my existing work.

## Hosting

Serve `dist/` at the domain root with directory indexes and `404.html` as the missing-page response. There is no server runtime or client router. `.openai/hosting.json` connects this checkout to its Sites deployment; it contains no credentials. The custom domain uses the `notebook` branch of `EyeInDisguise.github.io`, preserving its original `main` branch. See [publishing notes](docs/publishing.md). GitHub Actions checks the build and tests without publishing automatically.

## Type

Public Sans and IBM Plex Mono are included as Latin WOFF2 fonts with their SIL Open Font Licenses in `src/assets/fonts/`. Georgia is a system fallback used for the homepage italic. [Design notes](docs/design.md) explain the choices and references.
