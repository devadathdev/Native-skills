---
id: eval-harness
name: "Eval Harness"
version: 1.0.0
description: "Benchmark LLM generations against assertion suites and deterministic test cases"
author: "AURA Team"
category: ai
tags:
  - "eval"
  - "evaluation"
  - "benchmark"
  - "model eval"
  - "test prompt eval"
  - "eval harness"
triggers:
  - "eval"
  - "evaluation"
  - "benchmark"
  - "model eval"
  - "test prompt eval"
  - "eval harness"
permissions:
  - type: model
    scope: [eval]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Eval Harness

Benchmark LLM generations against assertion suites and deterministic test cases

## Metadata

- **ID:** `eval-harness`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `eval`)

## Triggers

- `eval`
- `evaluation`
- `benchmark`
- `model eval`
- `test prompt eval`
- `eval harness`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('eval-harness', {
  /* input parameters */
});
```
