import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const uae = process.argv[2] === 'uae';
const origin = uae ? 'https://coreframe.ae' : 'https://coreframetech.in';
const root = '.next/server/app';
const sitemap = readFileSync(`${root}/sitemap.xml.body`, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.ok(urls.length >= 35);
let services = 0, industries = 0;
const broken = [];
for (const url of urls) {
  assert.ok(url.startsWith(origin + '/'), `Incorrect regional URL: ${url}`);
  const path = new URL(url).pathname;
  const html = readFileSync(`${root}${path === '/' ? '/index' : path}.html`, 'utf8');
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `One h1 expected: ${path}`);
  assert.ok(html.includes(`rel="canonical" href="${path === '/' ? origin : url}"`), `Canonical mismatch: ${path}`);
  for (const [language, domain] of [['en-IN', 'https://coreframetech.in'], ['en-AE', 'https://coreframe.ae'], ['x-default', 'https://coreframetech.in']]) {
    const expected = `hrefLang="${language}" href="${domain}${path === '/' ? '' : path}"`.toLowerCase();
    assert.ok(html.toLowerCase().includes(expected), `Incorrect ${language} alternate: ${path}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(match[1]);
  for (const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const target = match[1];
    if (target.startsWith('/_next/') || /\.(png|jpg|svg|ico|css|woff2?)$/.test(target) || ['/opengraph-image', '/llms.txt', '/sitemap.xml', '/robots.txt', '/api/agent'].includes(target)) continue;
    if (!existsSync(`${root}${target === '/' ? '/index' : target}.html`)) broken.push(`${path} → ${target}`);
  }
  if (path.startsWith('/services/')) { services++; assert.ok(html.includes('Discover') && html.includes('Operate')); }
  if (path.startsWith('/industries/')) industries++;
}
assert.deepEqual([...new Set(broken)], [], 'Broken internal page links');
assert.equal(services, 8);
assert.equal(industries, 4);
const home = readFileSync(`${root}/index.html`, 'utf8');
assert.ok(home.includes(uae ? 'UAE &amp; GCC' : 'India &amp; Global'), 'Homepage region mismatch');
assert.ok(home.includes('/_next/image?url=%2Fimages%2Fhero-light.png'), 'Responsive hero optimization missing');
const robots = readFileSync(`${root}/robots.txt.body`, 'utf8');
assert.ok(robots.includes(`${origin}/sitemap.xml`));
const llms = readFileSync(`${root}/llms.txt.body`, 'utf8');
assert.ok(llms.includes(`${origin}/services/enterprise-claude`));
const agent = JSON.parse(readFileSync(`${root}/api/agent.body`, 'utf8'));
assert.equal(agent.organization.url, origin);
assert.equal(agent.services.length, 8);
console.log(`${uae ? 'UAE' : 'Global'} build: ${urls.length} pages, 8 services, 4 industries; canonical URLs, regional alternates, JSON-LD, internal links, robots, llms.txt and agent data passed.`);
