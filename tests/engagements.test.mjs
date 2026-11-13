import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = ts.transpileModule(readFileSync('lib/engagements.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
function catalog(env = {}) {
  const exports = {};
  vm.runInNewContext(source, { exports, process: { env } });
  return exports;
}
const approved = { id: 'example', name: 'Example', industry: 'Software', publicNameUseAuthorized: true, relationship: 'Founder’s prior work', description: 'Approved engineering contribution.', capabilities: [{ label: 'Engineering', href: '/services/forward-deployed-engineering' }] };

test('withholds entries without authorization, relationship, approved contribution or capabilities', () => {
  const { publishedEngagements } = catalog();
  for (const record of [
    { ...approved, publicNameUseAuthorized: false },
    { ...approved, relationship: undefined },
    { ...approved, description: ' ' },
    { ...approved, capabilities: [] },
  ]) assert.equal(publishedEngagements([record]).length, 0);
  const [entry] = publishedEngagements([approved]);
  assert.equal(entry.relationship, 'Founder’s prior work');
  assert.equal(entry.description, approved.description);
  assert.ok(!Object.hasOwn(entry, 'publicNameUseAuthorized'));
});

test('publishes the confirmed clients while keeping the restaurant client anonymous', () => {
  const entries = catalog().publishedEngagements();
  assert.deepEqual(Array.from(entries, entry => entry.name), ['Sultanahmet', 'Wiral', 'AI-Native Restaurant OS', 'SETCCO']);
  assert.ok(entries.every(entry => entry.relationship === 'Direct CoreFrame engagement'));
  const restaurant = entries.find(entry => entry.id === 'restaurant-os');
  assert.equal(restaurant.website, undefined);
  assert.equal(restaurant.logo, undefined);
  assert.equal(restaurant.market, undefined);
  assert.ok(!/marginx/i.test(JSON.stringify(entries)));
  assert.equal(entries.find(entry => entry.id === 'setcco').website, 'https://www.setcco.com/en');
});

test('fallback chat answers client questions with public labels before greeting/about rules', async () => {
  const chatCode = ts.transpileModule(readFileSync('app/api/chat/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(chatCode, {
    exports, process: { env: {} }, console: { log() {}, error() {} },
    fetch() { throw new Error('No external request is allowed in fallback chat tests'); },
    require(name) {
      if (name === 'next/server') return { NextResponse: { json: (data, init) => Response.json(data, init) } };
      if (name === '@/lib/engagements') return catalog();
      if (name === '@/lib/services') return { SERVICES: [] };
      if (name === '@/lib/region') return { region: { label: 'India & Global', delivery: '', origin: 'https://coreframetech.in' } };
      throw new Error(`Unexpected module ${name}`);
    },
  });
  for (const question of ['Which clients do you work with?', 'Who are your clients?', 'Tell me about your clients']) {
    const response = await exports.POST(new Request('http://localhost/api/chat', {
      method: 'POST', body: JSON.stringify({ sessionId: 'qa', messages: [{ role: 'user', content: question }] }),
    }));
    assert.equal(response.status, 200);
    const { reply } = await response.json();
    for (const name of ['Sultanahmet', 'Wiral', 'AI-Native Restaurant OS', 'SETCCO']) assert.ok(reply.includes(name), question);
    assert.ok(!/marginx/i.test(reply));
  }
});


test('only projects official logos when their usage is authorized', () => {
  const { publishedEngagements } = catalog();
  const logo = { src: '/logos/clients/example.png', width: 120, height: 40, backing: 'light' };
  const [withoutPermission] = publishedEngagements([{ ...approved, logo, logoUseAuthorized: false }]);
  assert.equal(withoutPermission.logo, undefined);
  const [withPermission] = publishedEngagements([{ ...approved, logo, logoUseAuthorized: true }]);
  assert.equal(withPermission.logo.src, logo.src);
  assert.ok(!Object.hasOwn(withPermission, 'logoUseAuthorized'));
});
