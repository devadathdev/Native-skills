import { test } from 'node:test';
import assert from 'node:assert';
import {
  AuraContextAdapter,
  ForgeAdapter,
  SentinelAdapter,
  GitHubAdapter,
  ModelAdapter,
  MemoryAdapter,
  BrowserAdapter,
  HostAdapterRegistry
} from '../src/index.js';

test('HostAdapterRegistry registers and lists adapters', () => {
  const registry = new HostAdapterRegistry();
  registry.register(new ForgeAdapter());
  registry.register(new SentinelAdapter());

  assert.strictEqual(registry.has('forge'), true);
  assert.strictEqual(registry.has('sentinel'), true);
  assert.strictEqual(registry.list().length, 2);
});

test('AuraContextAdapter creates SkillContext from session state', () => {
  const adapter = new AuraContextAdapter({
    userId: 'user-123',
    currentModel: 'gemini-2.5-pro',
    memories: ['pref:dark-mode']
  });

  const ctx = adapter.createSkillContext('hello world');
  assert.strictEqual(ctx.userInput, 'hello world');
  assert.strictEqual(ctx.currentModel, 'gemini-2.5-pro');
  assert.deepStrictEqual(ctx.memories, ['pref:dark-mode']);
  assert.strictEqual(ctx.metadata?.userId, 'user-123');
});

test('ForgeAdapter triggers builds and workflows', async () => {
  const forge = new ForgeAdapter();
  const job = await forge.triggerBuild({ target: 'prod-bundle' });
  assert.strictEqual(job.status, 'completed');
  assert.strictEqual(job.name, 'prod-bundle');
});

test('SentinelAdapter scans code for security vulnerabilities', async () => {
  const sentinel = new SentinelAdapter();
  const clean = await sentinel.scanCode('index.ts', 'const x = 1;');
  assert.strictEqual(clean.passed, true);
  assert.strictEqual(clean.threatLevel, 'none');

  const dangerous = await sentinel.scanCode('bad.ts', 'eval("dangerous code"); password = "secret"');
  assert.strictEqual(dangerous.passed, false);
  assert.strictEqual(dangerous.threatLevel, 'critical');
  assert.strictEqual(dangerous.vulnerabilities.length, 2);
});

test('ModelAdapter routes models and generates completions', async () => {
  const model = new ModelAdapter();
  const selected = model.selectModel('please review and refactor this code');
  assert.strictEqual(selected, 'gemini-2.5-pro');

  const res = await model.complete('test prompt');
  assert.ok(res.content.includes('[AI generated response'));
});

test('MemoryAdapter stores, retrieves, and searches memories', async () => {
  const mem = new MemoryAdapter();
  await mem.set('user:pref', { theme: 'dark' }, ['preferences', 'ui']);

  const val = await mem.get('user:pref');
  assert.deepStrictEqual(val, { theme: 'dark' });

  const hits = await mem.search('preferences');
  assert.strictEqual(hits.length, 1);
  assert.strictEqual(hits[0].key, 'user:pref');
});

test('BrowserAdapter executes actions', async () => {
  const browser = new BrowserAdapter();
  const results = await browser.executeActions([
    { type: 'navigate', url: 'https://aura.local' }
  ]);
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].success, true);
});
