---
id: benchmarkjs-runner
name: "Benchmark.js Runner"
version: 1.0.0
description: "Inspect microbenchmark suite definitions, operations per second, and margin of error"
author: "AURA Team"
category: development
tags:
  - "benchmarkjs"
  - "microbenchmark"
  - "ops per second"
  - "benchmark suite"
triggers:
  - "benchmarkjs"
  - "microbenchmark"
  - "ops per second"
  - "benchmark suite"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Benchmark.js Runner

Inspect microbenchmark suite definitions, operations per second, and margin of error

## Metadata

- **ID:** `benchmarkjs-runner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `benchmarkjs`
- `microbenchmark`
- `ops per second`
- `benchmark suite`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('benchmarkjs-runner', {
  /* input parameters */
});
```
