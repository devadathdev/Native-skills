---
id: astro-builder
name: "Astro Island Builder"
version: 1.0.0
description: "Inspect Astro components, content collections, and island hydration directives"
author: "AURA Team"
category: development
tags:
  - "astro"
  - "astro islands"
  - "client load"
  - "astro content"
triggers:
  - "astro"
  - "astro islands"
  - "client load"
  - "astro content"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Astro Island Builder

Inspect Astro components, content collections, and island hydration directives

## Metadata

- **ID:** `astro-builder`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `astro`
- `astro islands`
- `client load`
- `astro content`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('astro-builder', {
  /* input parameters */
});
```
