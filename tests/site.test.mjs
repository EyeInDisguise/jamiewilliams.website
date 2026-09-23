import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { pages } from '../src/pages.mjs';
import { layout } from '../src/layout.mjs';
const fileFor = path => path === '/404/' ? 'dist/404.html' : `dist${path}index.html`;

test('every page has one main heading and unique metadata', () => {
  const titles = new Set();
  for (const page of pages) {
    const html = layout(page);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, page.path);
    assert.equal((html.match(/<main\b/g) || []).length, 1, page.path);
    assert.ok(!titles.has(page.title), `duplicate title: ${page.title}`);
    titles.add(page.title);
    assert.ok(page.description.length > 30);
  }
});
test('local links, fragment targets, and assets resolve in the generated site', () => {
  for (const page of pages) {
    const html = readFileSync(fileFor(page.path), 'utf8');
    for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const url = new URL(href, `https://example.test${page.path}`);
      const file = url.pathname.includes('.') ? `dist${url.pathname}` : fileFor(url.pathname);
      assert.ok(existsSync(file), `${page.path} → ${href}`);
      if (url.hash) assert.ok(readFileSync(file,'utf8').includes(`id="${url.hash.slice(1)}"`), `Missing anchor: ${href}`);
    }
  }
});
test('only pages with the ability selector load its script, and font budget stays below 80 KB', () => {
  assert.deepEqual(pages.filter(page => page.script).map(page => page.path), ['/', '/lab/rfid/']);
  const fontBytes = ['public-sans.woff2','plex-mono.woff2'].reduce((sum,name) => sum + statSync(`src/assets/fonts/${name}`).size,0);
  assert.ok(fontBytes < 80000, `Font budget exceeded: ${fontBytes}`);
});
