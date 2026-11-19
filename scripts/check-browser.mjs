/** Local QA only. Requires Playwright via installation or COREFRAME_PLAYWRIGHT_MODULE. */
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const { chromium } = await import(process.env.COREFRAME_PLAYWRIGHT_MODULE || 'playwright');
const base = process.argv[2] || 'http://127.0.0.1:3100';
const output = process.env.COREFRAME_QA_OUTPUT || '/private/tmp/coreframe-qa';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const failures = [];
const results = [];
const accessibility = [];
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => failures.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && !message.text().includes('503') && !message.text().includes('400')) failures.push(message.text()); });
  const paths = ['/', '/products', '/products/ai-call-intelligence', '/products/custos', '/services', '/capabilities', '/company', '/work', '/labs', '/labs/open-source', '/labs/research', '/labs/publications', '/contact', '/insights', '/security', '/responsible-ai'];
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('coreframe-theme', theme), theme);
      for (const path of paths) {
        const response = await page.goto(base + path, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200, path);
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 600) {
            window.scrollTo(0, y);
            await new Promise(resolve => requestAnimationFrame(resolve));
          }
          window.scrollTo(0, 0);
        });
        assert.equal(await page.locator('h1').count(), 1, `${path}: one h1`);
        const dimensions = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
        assert.ok(dimensions.document <= width + 1, `${path}: overflow at ${width}, ${theme}: ${JSON.stringify(dimensions)}`);
        if (width === 390 && process.env.COREFRAME_AXE_PATH) {
          await page.addScriptTag({ path: process.env.COREFRAME_AXE_PATH });
          const scan = await page.evaluate(async () => window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }));
          accessibility.push({ path, theme, violations: scan.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })) });
        }
        const brokenImages = await page.locator('img').evaluateAll(images => images.filter(img => img.complete && img.naturalWidth === 0).map(img => img.src));
        assert.deepEqual(brokenImages, [], `${path}: broken images`);
        results.push({ path, width, theme, status: response.status(), overflow: false });
        await page.waitForFunction(() => [...document.querySelectorAll('[style*="opacity"]')].filter(el => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom <= innerHeight).every(el => !el.style.opacity || Number(el.style.opacity) >= 0.99));
        await page.evaluate(async () => { window.scrollTo(0, 0); await new Promise(resolve => requestAnimationFrame(resolve)); });
        if (['/', '/products', '/products/ai-call-intelligence', '/products/custos', '/company', '/contact'].includes(path) && width !== 768) {
          await page.screenshot({ path: `${output}/${path === '/' ? 'home' : path.slice(1).replaceAll('/', '-')}-${width}-${theme}.png`, fullPage: width !== 390 });
        }
      }
    }
  }
  // Mobile menu: products link, Escape and focus restoration.
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  const menu = page.locator('#mobile-navigation');
  await menu.getByRole('link', { name: 'Products', exact: true }).click();
  await page.waitForURL(base + '/products');
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await page.keyboard.press('Escape');
  await assert.doesNotReject(() => page.getByRole('button', { name: 'Open menu', exact: true }).waitFor());
  assert.equal(await page.getByRole('button', { name: 'Open menu', exact: true }).evaluate(el => el === document.activeElement), true);
  // Desktop keyboard dropdown and theme toggle.
  await page.setViewportSize({ width: 1440, height: 1000 });
  const services = page.locator('nav[aria-label="Main navigation"]').getByRole('link', { name: 'Services', exact: true });
  assert.equal(await services.count(), 1);
  {
    await services.focus();
    assert.equal(await services.getAttribute('aria-expanded'), 'true');
    await page.keyboard.press('Escape');
    assert.equal(await services.getAttribute('aria-expanded'), 'false');
  }
  const rootTheme = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', { name: `Switch to ${rootTheme === 'light' ? 'dark' : 'light'} mode` }).click();
  assert.notEqual(await page.locator('html').getAttribute('data-theme'), rootTheme);
  // Form behavior: native validation, provider error retention, successful mocked delivery.
  await page.goto(base + '/contact?intent=call-intelligence&source=browser-qa', { waitUntil: 'networkidle' });
  assert.match(await page.locator('h1').innerText(), /future call-intelligence pilot/);
  const form = page.getByRole('form', { name: 'AI initiative enquiry' });
  await form.getByRole('button', { name: 'Send enquiry' }).click();
  assert.equal(await page.locator('#name').evaluate(el => el.validity.valueMissing), true);
  await page.getByLabel('Name', { exact: true }).fill('QA Reviewer');
  await page.getByLabel('Work email', { exact: true }).fill('reviewer@example.com');
  await page.getByLabel('Company', { exact: true }).fill('Example Company');
  await page.getByLabel('Business challenge', { exact: true }).fill('Evaluate a representative operational workflow.');
  let payload;
  await page.route('**/api/contact', async route => {
    payload = route.request().postDataJSON();
    await route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ success: false, error: 'Delivery unavailable for QA.' }) });
  });
  await form.getByRole('button', { name: 'Send enquiry' }).click();
  await form.getByRole('alert').waitFor();
  assert.match(await form.getByRole('alert').innerText(), /answers are still here/);
  assert.equal(await page.getByLabel('Business challenge', { exact: true }).inputValue(), 'Evaluate a representative operational workflow.');
  assert.equal(payload.attribution.intent, 'call-intelligence');
  assert.equal(payload.attribution.source, 'browser-qa');
  assert.equal(payload.interest, 'call-intelligence');
  assert.equal(payload.website, '');
  await page.unroute('**/api/contact');
  await page.route('**/api/contact', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) }));
  await form.getByRole('button', { name: 'Send enquiry' }).click();
  await page.getByRole('heading', { name: 'Thanks, QA.' }).waitFor();
  assert.equal(await page.getByRole('heading', { name: 'Thanks, QA.' }).evaluate(el => el === document.activeElement), true);
  // Demo and partnership CTAs preselect their own enquiry intent; visitors can change it.
  for (const [intent, heading] of [['call-intelligence-demo', 'Request a Product Demo'], ['partnership', 'Explore Partnerships']]) {
    await page.goto(`${base}/contact?intent=${intent}&source=browser-qa`, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('h1').innerText(), heading);
    assert.equal(await page.getByLabel('Area of interest', { exact: true }).inputValue(), intent);
  }
  await page.getByLabel('Area of interest', { exact: true }).selectOption('private-ai');
  assert.equal(await page.locator('h1').innerText(), 'Discuss a private AI deployment');
  // Concept behavior: sample selection, view switching, review/reopen and reload reset.
  await page.goto(base + '/products/ai-call-intelligence', { waitUntil: 'networkidle' });
  const preview = page.getByRole('region', { name: 'Call intelligence concept', exact: true });
  const beforePreviewRequests = [];
  const onRequest = request => { if (['xhr', 'fetch'].includes(request.resourceType())) beforePreviewRequests.push(request.url()); };
  page.on('request', onRequest);
  assert.equal(await preview.getByRole('radio').count(), 2);
  await preview.getByRole('button', { name: 'Quality review', exact: true }).click();
  assert.equal(await preview.getByRole('heading', { name: 'Example scorecard', exact: true }).count(), 1);
  assert.match(await preview.innerText(), /3\/4 criteria met/);
  await preview.getByRole('radio', { name: 'Billing clarification', exact: false }).check();
  assert.match(await preview.innerText(), /2\/4 criteria met/);
  await preview.getByRole('button', { name: 'Follow-up', exact: true }).click();
  assert.match(await preview.innerText(), /Duplicate-charge investigation/);
  await preview.getByRole('button', { name: 'Mark sample reviewed', exact: true }).click();
  assert.match(await preview.getByRole('status').innerText(), /marked reviewed/);
  await preview.getByRole('button', { name: 'Reopen sample review', exact: true }).click();
  assert.match(await preview.getByRole('status').innerText(), /awaiting review/);
  await preview.getByRole('button', { name: 'Mark sample reviewed', exact: true }).click();
  assert.deepEqual(beforePreviewRequests, [], 'Concept interaction must not send data or call AI services');
  page.off('request', onRequest);
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await preview.getByRole('button', { name: 'Reopen sample review', exact: true }).count(), 0);
  assert.match(await preview.innerText(), /Authored text and translations/);
  // Fragment links on products and work resolve to real content.
  for (const path of ['/products', '/work', '/capabilities', '/products/ai-call-intelligence']) {
    await page.goto(base + path, { waitUntil: 'networkidle' });
    const missing = await page.locator('a[href^="#"]').evaluateAll(links => links.map(a => a.getAttribute('href')).filter(href => href.length > 1 && !document.getElementById(decodeURIComponent(href.slice(1)))));
    assert.deepEqual(missing, [], path);
  }
  // Exercise the homepage with normal motion as well as the reduced-motion matrix.
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => Number(getComputedStyle(document.querySelector('h1')).opacity) > 0.99);
  await page.getByRole('button', { name: 'Next use case', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('.case-idx').textContent.includes('02 / 03'));
  await page.getByRole('button', { name: 'Previous use case', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('.case-idx').textContent.includes('01 / 03'));
  await writeFile(`${output}/accessibility.json`, JSON.stringify(accessibility, null, 2));
  assert.deepEqual(accessibility.filter(result => result.violations.length), [], 'Accessibility violations');
  assert.deepEqual([...new Set(failures)], [], 'Browser console or runtime errors');
  await writeFile(`${output}/results.json`, JSON.stringify({ results, checks: ['navigation', 'theme toggle', 'native validation', 'failure retention', 'mocked success', 'CTA attribution', 'interest selection', 'concept sample/view/review/reset controls', 'no concept API calls', 'fragment links', 'console errors'], failures }, null, 2));
  console.log(`Browser QA: ${results.length} route/viewport/theme checks passed; navigation, forms, interest selection, concept controls, attribution, fragments and console passed. Screenshots: ${output}`);
} finally {
  await browser.close();
}
