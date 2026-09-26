export const portfolio = 'https://jamiegamedev.me';
export const github = 'https://github.com/EyeInDisguise';
const esc = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
export function layout(page) {
  const nav = [['/', 'Home'], ['/lab/', 'Projects'], ['/about/', 'About']];
  return `<!doctype html>
<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)} — Jamie Williams</title><meta name="description" content="${esc(page.description)}">
<meta name="theme-color" content="#191b18"><meta name="color-scheme" content="dark">
<meta property="og:title" content="${esc(page.title)} — Jamie Williams"><meta property="og:description" content="${esc(page.description)}"><meta property="og:type" content="website">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="stylesheet" href="/assets/style.css?v=probe-1">
<script type="module" src="/assets/site-interactions.js?v=probe-1"></script></head>
<body><a class="skip-link" href="#main">Skip to content</a><div class="site-shell">
<header class="site-header"><a class="identity" href="/" aria-label="Jamie Williams, home"><span class="monogram" aria-hidden="true">jw<span>_</span></span><span>Jamie Williams</span></a>
<nav aria-label="Main">${nav.map(([path, label])=>`<a href="${path}"${page.path === path || (path !== '/' && page.path.startsWith(path)) ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav><a class="portfolio-link" href="${portfolio}">Game dev portfolio <span aria-hidden="true">↗</span></a></header>
<main id="main" tabindex="-1">${page.body}</main>
<footer class="site-footer"><a href="/" class="footer-name">Jamie Williams</a><div><a href="${github}">GitHub ↗</a><a href="/about/#contact">Contact</a><a href="/colophon/">Colophon</a><a href="#main" aria-label="Back to top">↑</a></div></footer>
</div></body></html>`;
}
