---
id: alpine-inspector
name: "Alpine.js Inspector"
version: 1.0.0
description: "Inspect Alpine x-data declarations, reactive attributes, and directive trees"
author: "AURA Team"
category: development
tags:
  - "alpine"
  - "alpinejs"
  - "x-data"
  - "alpine directive"
triggers:
  - "alpine"
  - "alpinejs"
  - "x-data"
  - "alpine directive"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Alpine.js Inspector

Inspect Alpine x-data declarations, reactive attributes, and directive trees

## Metadata

- **ID:** `alpine-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `alpine`
- `alpinejs`
- `x-data`
- `alpine directive`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('alpine-inspector', {
  /* input parameters */
});
```
