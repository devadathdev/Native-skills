import { test } from 'node:test';
import assert from 'node:assert';
import { SkillLifecycleManager, NativeSkillRuntime } from '../src/index.js';

test('SkillLifecycleManager emits lifecycle events', async () => {
  const manager = new SkillLifecycleManager();
  const events: string[] = [];

  manager.on('skill:beforeExecute', (payload) => {
    events.push(`before:${payload.skillId}`);
  });

  manager.on('skill:afterExecute', (payload) => {
    events.push(`after:${payload.skillId}`);
  });

  await manager.emit('skill:beforeExecute', {
    skillId: 'test-skill',
    params: { input: {}, context: {} as any, tools: {} as any }
  });

  await manager.emit('skill:afterExecute', {
    skillId: 'test-skill',
    params: { input: {}, context: {} as any, tools: {} as any },
    result: { success: true }
  });

  assert.deepStrictEqual(events, ['before:test-skill', 'after:test-skill']);
});

test('SkillLifecycleManager interceptors intercept execution', async () => {
  const manager = new SkillLifecycleManager();

  manager.use(async (skillId, params, next) => {
    params.input.intercepted = true;
    const res = await next();
    res.metadata = { ...res.metadata, wrapped: true };
    return res;
  });

  const res = await manager.runWithInterceptors(
    'sample',
    { input: {}, context: {} as any, tools: {} as any },
    async () => ({ success: true, output: 'core' })
  );

  assert.strictEqual(res.success, true);
  assert.strictEqual(res.metadata?.wrapped, true);
});
