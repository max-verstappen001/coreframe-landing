import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const code = ts.transpileModule(readFileSync('app/api/contact/route.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
function handler({ env = {}, send = async () => ({ error: null }), webhook = async () => ({ ok: true }) } = {}) {
  const exports = {};
  vm.runInNewContext(code, {
    exports, process: { env }, console: { error() {} }, AbortSignal,
    fetch: webhook,
    require(name) {
      if (name === 'next/server') return { NextResponse: { json: (data, init) => Response.json(data, init) } };
      if (name === 'resend') return { Resend: class { emails = { send }; } };
      if (name === '@/lib/region') return { region: { id: 'uae', label: 'UAE & GCC', origin: 'https://coreframe.ae' } };
      throw new Error(`Unexpected module ${name}`);
    },
  });
  return exports.POST;
}
const valid = { name: 'Buyer', email: 'buyer@example.com', company: 'Enterprise', message: 'Assess our workflow' };
const request = body => new Request('http://localhost/api/contact', { method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body) });

test('rejects malformed, null, array, missing and invalid email payloads', async () => {
  for (const body of ['{', 'null', '[]', {}, { ...valid, email: 'bad' }, { ...valid, name: { unsafe: true } }]) {
    assert.equal((await handler()(request(body))).status, 400);
  }
});
test('rejects oversized enquiries before delivery', async () => {
  assert.equal((await handler()(request('x'.repeat(21000)))).status, 413);
});
test('rejects oversized fields without silently truncating contact details', async () => {
  for (const [key, length] of [['name', 151], ['email', 255], ['company', 201], ['message', 12001]]) {
    assert.equal((await handler()(request({ ...valid, [key]: 'x'.repeat(length) }))).status, 400, key);
  }
});
test('preserves a complete brief with service and timeline context', async () => {
  const message = `Project: Enterprise Claude implementation\nTimeline: 1–3 months\n\n${'x'.repeat(10000)}`;
  let delivered;
  const post = handler({ env: { WEBHOOK_URL: 'https://example.com/hook' }, webhook: async (_url, init) => { delivered = JSON.parse(init.body); return { ok: true }; } });
  assert.equal((await post(request({ ...valid, message }))).status, 200);
  assert.equal(delivered.data.message, message);
});
test('does not report success when delivery is unconfigured', async () => {
  const response = await handler()(request(valid));
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, false);
});
test('escapes email HTML and derives region from server config', async () => {
  let sent;
  const post = handler({ env: { RESEND_API_KEY: 'test', NOTIFICATION_EMAIL: 'owner@example.com' }, send: async data => { sent = data; return { error: null }; } });
  const response = await post(request({ ...valid, name: '<img src=x>', message: '<script>alert(1)</script>', attribution: { region: 'global', domain: 'https://attacker.test', intent: 'assessment', utm_source: 'launch' } }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.ok(!sent.html.includes('<script>'));
  assert.ok(sent.html.includes('&lt;script&gt;'));
  assert.ok(sent.html.includes('coreframe.ae'));
  assert.ok(!sent.html.includes('attacker.test'));
  assert.ok(sent.html.includes('launch'));
});
test('provider errors cannot produce false success', async () => {
  const post = handler({ env: { RESEND_API_KEY: 'test', NOTIFICATION_EMAIL: 'owner@example.com' }, send: async () => ({ error: { message: 'provider failed' } }) });
  assert.equal((await post(request(valid))).status, 503);
});
test('confirmed webhook can deliver enquiry when email is unavailable', async () => {
  let payload;
  const post = handler({ env: { WEBHOOK_URL: 'https://example.com/hook' }, webhook: async (_url, init) => { payload = JSON.parse(init.body); return { ok: true }; } });
  const response = await post(request(valid));
  assert.equal(response.status, 200);
  assert.equal(payload.data.attribution.region, 'uae');
  assert.equal(payload.data.message, valid.message);
});
test('webhook rejection and timeout cannot produce false success', async () => {
  for (const webhook of [async () => ({ ok: false }), async () => { throw new Error('timeout'); }]) {
    assert.equal((await handler({ env: { WEBHOOK_URL: 'https://example.com' }, webhook })(request(valid))).status, 503);
  }
});
