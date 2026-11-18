import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const uae = process.argv[2] === 'uae';
const origin = uae ? 'https://coreframe.ae' : 'https://coreframetech.in';
const root = '.next/server/app';
const sitemap = readFileSync(`${root}/sitemap.xml.body`, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.ok(urls.length >= 35);
assert.ok(urls.includes(origin + '/products'));
assert.ok(!urls.includes(origin + '/about') && !urls.includes(origin + '/projects'), 'Redirected pages must not be indexed');
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
  assert.ok(html.includes('CoreFrame'), `Brand identity missing: ${path}`);
  assert.ok(!html.includes('Coreframe'), `Inconsistent brand capitalization: ${path}`);
  assert.ok(!/marginx/i.test(html), `Anonymous client identity leaked: ${path}`);
  assert.ok(!html.includes('organizational ineligibility') && !html.includes('nvidia-inception-readiness'), `Internal readiness information leaked: ${path}`);
  assert.ok(html.includes('name="description"') && html.includes('property="og:image"'), `Metadata missing: ${path}`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(match[1]);
  for (const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const target = match[1];
    assert.ok(!['/about', '/projects'].includes(target), `Link to legacy page: ${path} → ${target}`);
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
assert.equal(agent.version, '2.0');
assert.equal(agent.products.length, 2);
assert.equal(agent.engineeringOfferings.length, 2);
assert.ok(agent.products.every(p => p.kind !== 'Engineering offering'));
assert.ok(agent.products.some(p => p.url.endsWith('/products/ai-call-intelligence') && p.status === 'Under development'));
assert.equal(agent.openSource.license, 'Apache-2.0');
assert.equal(agent.location, uae ? 'Dubai, UAE' : 'Chennai, India');
const company = readFileSync(`${root}/company.html`, 'utf8');
assert.ok(company.includes(uae ? 'Dubai, UAE' : 'Chennai, India'));
assert.ok(company.includes('Sanjay Nanda N J') && company.includes('Sarvam Startup Program'));
assert.ok(!company.includes('Co-founder &amp; CEO'));
const products = readFileSync(`${root}/products.html`, 'utf8');
assert.ok(products.includes('Under development') && products.includes('Customer-specific engineering'));
for (const path of ['/products/ai-call-intelligence', '/products/custos']) assert.ok(urls.includes(origin + path));
const callProduct = readFileSync(`${root}/products/ai-call-intelligence.html`, 'utf8');
assert.ok(callProduct.includes('Interactive concept preview') && callProduct.includes('synthetic data'));
assert.ok(callProduct.includes('Under development') && callProduct.includes('Planned capabilities'));
assert.ok(callProduct.includes('Technical direction') && callProduct.includes('proposed evaluation'));
assert.ok(callProduct.includes('Request a Product Demo') && callProduct.includes('Discuss a Pilot Deployment'));
assert.ok(!callProduct.includes('application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication"'), 'No released software markup for the concept');
const custos = readFileSync(`${root}/products/custos.html`, 'utf8');
assert.ok(custos.includes('npm install custos-mcp') && custos.includes('Apache-2.0') && custos.includes('pre-1.0'));
assert.ok(custos.includes('https://www.npmjs.com/package/custos-mcp'));
assert.ok(home.indexOf('id="products"') < home.indexOf('id="capabilities"'), 'Products should precede services');
assert.ok(!home.includes('NVIDIA Inception') && !llms.includes('organizational ineligibility') && !JSON.stringify(agent).includes('organizational ineligibility'), 'Internal readiness information must not be published');
const work = readFileSync(`${root}/work.html`, 'utf8');
assert.ok(work.includes('Illustrative use case') && !work.includes('Pilot ROAS'));
for (const name of ['Sultanahmet', 'Wiral', 'AI-Native Restaurant OS', 'SETCCO']) {
  assert.ok(home.includes(name) && work.includes(name), `Confirmed client missing: ${name}`);
}
assert.ok(work.includes('engagement-restaurant-os') && !work.includes('Local review preview'));
assert.equal(agent.engagements.length, 4);
assert.ok(!/marginx/i.test(JSON.stringify(agent)) && !/marginx/i.test(llms), 'Anonymous identity leaked into discovery endpoints');


console.log(`${uae ? 'UAE' : 'Global'} build: ${urls.length} pages, 8 services, 4 industries; canonical URLs, regional alternates, JSON-LD, internal links, robots, llms.txt and agent data passed.`);
