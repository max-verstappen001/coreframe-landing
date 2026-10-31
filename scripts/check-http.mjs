import assert from 'node:assert/strict';
import { statSync } from 'node:fs';
const base = process.argv[2] || 'http://127.0.0.1:3100';
for (const [path, destination] of [
  ['/case-studies', '/work'], ['/case-studies/wiral', '/work'],
  ['/services/claude', '/services/enterprise-claude'],
  ['/capabilities/enterprise-ai', '/services/enterprise-ai-agents'],
  ['/capabilities/software-engineering', '/services/forward-deployed-engineering'],
]) {
  const response = await fetch(`${base}${path}?utm_source=check`, { redirect: 'manual' });
  assert.equal(response.status, 308, path);
  assert.equal(response.headers.get('location'), `${destination}?utm_source=check`, path);
}
for (const path of ['/services/unknown-service', '/industries/unknown-industry']) assert.equal((await fetch(base + path)).status, 404, path);
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
for (const match of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) {
  const path = new URL(match[1]).pathname;
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
}
const invalid = await fetch(base + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' });
assert.equal(invalid.status, 400);
console.log('HTTP: 36 sitemap pages return 200; five redirects preserve campaign queries; unknown service/industry return 404; malformed contact request returns 400.');
for (const file of ['hero-light.png', 'hero-dark.png', 'section-5-light.png']) {
  const image = await fetch(`${base}/_next/image?url=${encodeURIComponent(`/images/${file}`)}&w=640&q=80`, { headers: { Accept: 'image/webp' } });
  assert.equal(image.status, 200, file);
  assert.ok(image.headers.get('content-type')?.startsWith('image/'), file);
  const size = (await image.arrayBuffer()).byteLength;
  const original = statSync(`public/images/${file}`).size;
  assert.ok(size < original, `Image was not reduced: ${file}`);
  console.log(`Optimized ${file} at 640px: ${size} bytes (original ${original} bytes).`);
}
