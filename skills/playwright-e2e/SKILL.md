---
id: playwright-e2e
name: "Playwright E2E Tester"
version: 1.0.0
description: "Inspect Playwright test fixtures, page actions, locator assertions, and traces"
author: "AURA Team"
category: development
tags:
  - "playwright"
  - "e2e test"
  - "browser test"
  - "page locator"
triggers:
  - "playwright"
  - "e2e test"
  - "browser test"
  - "page locator"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Playwright E2E Tester

Inspect Playwright test fixtures, page actions, locator assertions, and traces

## Metadata

- **ID:** `playwright-e2e`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `playwright`
- `e2e test`
- `browser test`
- `page locator`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('playwright-e2e', {
  /* input parameters */
});
```
