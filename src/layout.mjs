export const portfolio = 'https://jamiegamedev.me';
export const github = 'https://github.com/EyeInDisguise';
const esc = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export function layout(page) {
  const nav = [['/', 'Index'], ['/lab/', 'Lab'], ['/notes/', 'Notes'], ['/about/', 'About']];
  const current = (path) => page.path === path || (path !== '/' && page.path.startsWith(path));
  return `<!doctype html>
<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)} — Jamie Williams</title><meta name="description" content="${esc(page.description)}">
<meta name="theme-color" content="#11120f"><meta name="color-scheme" content="dark light">
<meta property="og:title" content="${esc(page.title)} — Jamie Williams"><meta property="og:description" content="${esc(page.description)}"><meta property="og:type" content="website">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="preload" href="/assets/fonts/cormorant-roman.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/style.css?v=archive-1">
<script type="module" src="/assets/site-interactions.js?v=archive-1"></script><!-- Try the backtick key. --></head>
<body class="${page.path === '/' ? 'page-home' : 'page-interior'}"><a class="skip-link" href="#main">Skip to content</a><div class="site-shell">
<header class="site-header"><a class="identity" href="/" aria-label="Jamie Williams, home"><span class="identity-mark" aria-hidden="true">JW<span class="identity-spark">✳</span></span><span class="identity-text">JAMIE WILLIAMS<span>PERSONAL SITE</span></span></a>
<nav aria-label="Main">${nav.map(([path, label])=>`<a href="${path}"${current(path) ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav><a class="portfolio-link" href="${portfolio}">GAME PORTFOLIO <span aria-hidden="true">↗</span></a></header>
<main id="main" tabindex="-1">${page.body}</main>
<footer class="site-footer"><div class="footer-top"><span>END OF PAGE</span><a href="#main">BACK TO TOP ↑</a></div><div class="footer-body"><a href="/" class="footer-name">Jamie<br>Williams.</a><div class="footer-links"><a href="/lab/">Lab</a><a href="/notes/">Notes</a><a href="/about/">About</a><a href="/now/">Now</a><a href="/colophon/">Colophon</a><a href="${github}">GitHub ↗</a></div></div><div class="footer-base"><span>JAMIEWILLIAMS.WEBSITE</span><span>© JAMIE WILLIAMS</span></div></footer>
</div></body></html>`;
}
