---
id: mock-data
name: "Mock Data Generator"
version: 1.0.0
description: "Generate synthetic test fixtures, realistic schemas, and mock record collections"
author: "AURA Team"
category: data
tags:
  - "mock data"
  - "generate data"
  - "fake data"
  - "test fixture"
  - "synthetic data"
  - "mock generator"
triggers:
  - "mock data"
  - "generate data"
  - "fake data"
  - "test fixture"
  - "synthetic data"
  - "mock generator"
permissions:
  - type: filesystem
    scope: [write]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Mock Data Generator

Generate synthetic test fixtures, realistic schemas, and mock record collections

## Metadata

- **ID:** `mock-data`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `write`)

## Triggers

- `mock data`
- `generate data`
- `fake data`
- `test fixture`
- `synthetic data`
- `mock generator`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('mock-data', {
  /* input parameters */
});
```
