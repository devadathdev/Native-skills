---
id: nuxt-inspector
name: "Nuxt Framework"
version: 1.0.0
description: "Inspect Nuxt 3 auto-imports, nitro server engine, and universal rendering"
author: "AURA Team"
category: development
tags:
  - "nuxt"
  - "nuxt3"
  - "nitro engine"
  - "vue universal"
triggers:
  - "nuxt"
  - "nuxt3"
  - "nitro engine"
  - "vue universal"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Nuxt Framework

Inspect Nuxt 3 auto-imports, nitro server engine, and universal rendering

## Metadata

- **ID:** `nuxt-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `nuxt`
- `nuxt3`
- `nitro engine`
- `vue universal`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nuxt-inspector', {
  /* input parameters */
});
```
