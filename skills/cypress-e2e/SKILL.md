---
id: cypress-e2e
name: "Cypress E2E Tester"
version: 1.0.0
description: "Inspect cypress.config.ts baseUrl, cy commands, intercept stubs, and screenshots"
author: "AURA Team"
category: development
tags:
  - "cypress"
  - "cypress e2e"
  - "cy visit"
  - "cy intercept"
triggers:
  - "cypress"
  - "cypress e2e"
  - "cy visit"
  - "cy intercept"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Cypress E2E Tester

Inspect cypress.config.ts baseUrl, cy commands, intercept stubs, and screenshots

## Metadata

- **ID:** `cypress-e2e`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cypress`
- `cypress e2e`
- `cy visit`
- `cy intercept`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cypress-e2e', {
  /* input parameters */
});
```
