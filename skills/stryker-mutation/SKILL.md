---
id: stryker-mutation
name: "Stryker Mutation Testing"
version: 1.0.0
description: "Inspect Stryker mutator configurations, survival rates, and mutant kill counts"
author: "AURA Team"
category: development
tags:
  - "stryker"
  - "mutation testing"
  - "mutation score"
  - "mutant killed"
triggers:
  - "stryker"
  - "mutation testing"
  - "mutation score"
  - "mutant killed"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Stryker Mutation Testing

Inspect Stryker mutator configurations, survival rates, and mutant kill counts

## Metadata

- **ID:** `stryker-mutation`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `stryker`
- `mutation testing`
- `mutation score`
- `mutant killed`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('stryker-mutation', {
  /* input parameters */
});
```
