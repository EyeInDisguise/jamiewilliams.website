import { mkdir, writeFile, cp } from 'node:fs/promises';
import { pages } from '../src/pages.mjs';
import { layout } from '../src/layout.mjs';

await mkdir('dist', { recursive: true });
await cp('src/assets', 'dist/assets', { recursive: true });
await cp('src/assets/CNAME', 'dist/CNAME');
for (const page of pages) {
  const path = page.path === '/404/' ? 'dist/404.html' : `dist${page.path}index.html`;
  await mkdir(path.slice(0, path.lastIndexOf('/')), { recursive: true });
  await writeFile(path, layout(page));
}
await writeFile('dist/.nojekyll', '');
console.log(`Built ${pages.length} static pages.`);
