# jamiewilliams.website

My personal website, with notes, experiments, and a few things I like. My [game development portfolio](https://jamiegamedev.me) is where I keep the game projects.

## Run it locally

Use Node.js 22 or newer. There are no packages to install.

```sh
npm run build
npm run dev
```

Open `http://127.0.0.1:4173`. After editing `src/`, rebuild and reload. Run `npm test` to check page structure and internal links.

## How it works

The build script turns the page templates in `src/` into static files in `dist/`. Navigation, writing, and links work without JavaScript. The small scripts in `src/assets/` handle the opening doors, cursor, ability selector, and a couple of hidden extras.

The RFID project page is based on my [project repository](https://github.com/EyeInDisguise/Jamie-Hackathon-2026). The browser build is linked from the site.

Cormorant Garamond and IBM Plex Mono are hosted locally with their font licences in `src/assets/fonts/`. The landscape is an original SVG in `src/assets/`. [Design notes](docs/design.md) explain the visual direction and references.

## Publishing

The source lives on `main` in this repository. The generated `dist/` files are also committed. The custom domain is served by the `notebook` branch of [`EyeInDisguise.github.io`](https://github.com/EyeInDisguise/EyeInDisguise.github.io). See [publishing notes](docs/publishing.md) for the update steps.
