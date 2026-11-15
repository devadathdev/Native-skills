import { test } from 'node:test';
import assert from 'node:assert';
import { SkillDependencyGraph, NativeSkill } from '../src/index.js';

function mockSkill(id: string, dependencies: string[] = []): NativeSkill {
  return {
    manifest: {
      id,
      name: id,
      version: '1.0.0',
      description: '',
      author: '',
      category: 'utility',
      tags: [],
      permissions: [],
      dependencies
    },
    hooks: {}
  };
}

test('SkillDependencyGraph sorts dependencies in topological order', () => {
  const graph = new SkillDependencyGraph();
  const sA = mockSkill('A', []);
  const sB = mockSkill('B', ['A']);
  const sC = mockSkill('C', ['B']);

  graph.addSkill(sC);
  graph.addSkill(sB);
  graph.addSkill(sA);

  const order = graph.getExecutionOrder();
  assert.deepStrictEqual(order, ['A', 'B', 'C']);
});

test('SkillDependencyGraph detects cycles', () => {
  const graph = new SkillDependencyGraph();
  const sA = mockSkill('A', ['B']);
  const sB = mockSkill('B', ['A']);

  graph.addSkill(sA);
  graph.addSkill(sB);

  const cycles = graph.detectCycles();
  assert.ok(cycles.length > 0);
  assert.throws(() => {
    graph.getExecutionOrder();
  }, /Circular dependency detected/);
});

test('SkillDependencyGraph reports missing dependencies', () => {
  const graph = new SkillDependencyGraph();
  const sA = mockSkill('A', ['missing-dep']);
  graph.addSkill(sA);

  const validation = graph.validateDependencies();
  assert.strictEqual(validation.valid, false);
  assert.deepStrictEqual(validation.missing['A'], ['missing-dep']);
});
