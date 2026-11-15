import { test } from 'node:test';
import assert from 'node:assert';
import { SchemaValidator, JSONSchemaDefinition } from '../src/index.js';

test('SchemaValidator validates types, required fields, and enums', () => {
  const schema: JSONSchemaDefinition = {
    type: 'object',
    required: ['id', 'count'],
    properties: {
      id: { type: 'string' },
      count: { type: 'number' },
      role: { type: 'string', enum: ['admin', 'user'], default: 'user' }
    }
  };

  const valid = SchemaValidator.validate(schema, { id: 'usr-1', count: 5 });
  assert.strictEqual(valid.valid, true);
  assert.strictEqual((valid.data as any).role, 'user', 'Should apply default value');

  const invalid = SchemaValidator.validate(schema, { id: 'usr-1' });
  assert.strictEqual(invalid.valid, false);
  assert.ok(invalid.errors.some(e => e.includes('count')));

  const invalidEnum = SchemaValidator.validate(schema, { id: 'usr-1', count: 5, role: 'guest' });
  assert.strictEqual(invalidEnum.valid, false);
  assert.ok(invalidEnum.errors.some(e => e.includes('one of [admin, user]')));
});

test('SchemaValidator validates arrays', () => {
  const schema: JSONSchemaDefinition = {
    type: 'array',
    items: { type: 'string' }
  };

  const valid = SchemaValidator.validate(schema, ['a', 'b', 'c']);
  assert.strictEqual(valid.valid, true);

  const invalid = SchemaValidator.validate(schema, ['a', 123]);
  assert.strictEqual(invalid.valid, false);
});
