/** Local portfolio QA. Requires Playwright; optional axe-core bundle enables accessibility scans. */
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const { chromium } = await import(process.env.COREFRAME_PLAYWRIGHT_MODULE || 'playwright');
const base = process.argv[2] || 'http://127.0.0.1:3100';
const output = process.env.COREFRAME_QA_OUTPUT || '/private/tmp/coreframe-clients-approved-qa';
const names = ['Sultanahmet', 'Wiral', 'AI-Native Restaurant OS', 'SETCCO'];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const failures = [];
const results = [];
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => failures.push(error.message));
  page.on('console', message => { if (message.type() === 'error') failures.push(message.text()); });
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('coreframe-theme', theme), theme);
      for (const path of ['/', '/work']) {
        assert.equal((await page.goto(base + path, { waitUntil: 'networkidle' })).status(), 200);
        assert.ok(!/marginx/i.test(await page.content()), 'Anonymous identity leaked into page HTML');
        assert.equal(await page.locator('h1').count(), 1);
        const selector = path === '/' ? '#selected-clients' : '#selected-engagements';
        const section = page.locator(selector);
        assert.equal(await section.count(), 1);
        const labels = path === '/' ? await section.locator('.client-wordmark').evaluateAll(cards => cards.map(card => card.dataset.clientName)) : await section.locator('h3').allTextContents();
        assert.deepEqual(labels, names);
        assert.equal(await section.locator('img').count(), 3, 'Three authorized official logos are expected');
        for (const logo of await section.locator("img").all()) await logo.scrollIntoViewIfNeeded();
        await section.scrollIntoViewIfNeeded();
        await page.waitForFunction(selector => [...document.querySelectorAll(`${selector} img`)].every(image => image.complete && image.naturalWidth > 0), selector);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        if (path === '/work') {
          const restaurant = page.locator('#engagement-restaurant-os');
          assert.equal(await restaurant.locator('a[href^="http"]').count(), 0);
          assert.equal(await restaurant.locator('img').count(), 0);
          assert.equal(await section.getByRole('heading', { name: "CoreFrame's contribution", exact: true }).count(), 4);
          assert.ok((await section.innerText()).includes('STAAD'));
          assert.ok((await section.innerText()).includes('Retrieval-augmented generation'));
          assert.ok((await restaurant.innerText()).includes('Hardware and IoT'));
          assert.equal(await section.getByText('Direct CoreFrame engagement', { exact: true }).count(), 4);
          assert.equal(await section.locator('a[href^="http"]').count(), 3);
        }
        let violations = [];
        if (process.env.COREFRAME_AXE_PATH) {
          await page.addScriptTag({ path: process.env.COREFRAME_AXE_PATH });
          const scan = await page.evaluate(async selector => window.axe.run(document.querySelector(selector), { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }), selector);
          violations = scan.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }));
        }
        results.push({ width, theme, path, violations });
        await section.screenshot({ path: `${output}/${path === '/' ? 'home' : 'work'}-${width}-${theme}.png` });
      }
    }
  }
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.locator('#selected-clients').getByRole('link', { name: 'AI-Native Restaurant OS View engagement', exact: true }).click();
  await page.waitForURL('**/work#engagement-restaurant-os');
  assert.equal(await page.locator('#engagement-restaurant-os').count(), 1);
  for (const path of ['/llms.txt', '/api/agent']) {
    const response = await context.request.get(base + path);
    assert.equal(response.status(), 200);
    const body = await response.text();
    assert.ok(!/marginx/i.test(body), `${path}: anonymous identity leaked`);
    for (const name of names) assert.ok(body.includes(name), `${path}: ${name} missing`);
  }
  await writeFile(`${output}/results.json`, JSON.stringify({ results, failures }, null, 2));
  assert.deepEqual(results.filter(r => r.violations.length), [], 'Accessibility findings');
  assert.deepEqual(failures, [], 'Browser console/runtime errors');
  console.log('Portfolio: 12 responsive/theme/page checks passed, including official logo loading, contribution details, website/capability links, accessibility, navigation and anonymous identity protection.');
} finally {
  await browser.close();
}
