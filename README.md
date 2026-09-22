# jamiewilliams.website

My personal notebook and development lab. Experiments, short technical references, and work in progress live here; selected game-development work lives at [jamiegamedev.me](https://jamiegamedev.me).

## Run locally

Requires Node.js 22 or newer. There are no packages to install.

```sh
npm run build
npm run dev
```

Open `http://127.0.0.1:4173`. Rebuild and reload after editing source. Run `npm test` after building.

## Structure

- `src/pages.mjs` — homepage
- `src/detail-pages.mjs` — lab entries, reading pages, and 404
- `src/content.mjs` — archive metadata
- `src/layout.mjs` — shared document, navigation, and footer
- `src/assets/` — styles, locally hosted fonts, and spring experiment
- `scripts/` — static build and local preview
- `dist/` — generated site, committed so it can be served without a build service

The spring study uses the analytic response of a damped linear spring. Tests check its initial conditions, long-term behaviour, critical transition, and differential equation, along with internal links and page metadata.

## Content

Dates are written explicitly. Rebuilding must not make an old entry look updated. The RFID entry is based on the existing [project README](https://github.com/EyeInDisguise/Jamie-Hackathon-2026), and intentionally leaves room for real footage. See [content notes](docs/content.md) for the remaining material.

## Hosting

Serve `dist/` at the domain root with directory indexes and `404.html` as the missing-page response. There is no server runtime or client router. `.openai/hosting.json` connects this checkout to its Sites deployment; it contains no credentials. The custom domain uses the `notebook` branch of `EyeInDisguise.github.io`, preserving its original `main` branch. See [publishing notes](docs/publishing.md). GitHub Actions checks the build and tests without publishing automatically.

## Type

Public Sans and IBM Plex Mono are included as Latin WOFF2 fonts with their SIL Open Font Licenses in `src/assets/fonts/`. Georgia is a system fallback used for the homepage italic. [Design notes](docs/design.md) explain the choices and references.
