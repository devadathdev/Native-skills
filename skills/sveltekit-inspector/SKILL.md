---
id: sveltekit-inspector
name: "SvelteKit Inspector"
version: 1.0.0
description: "Inspect SvelteKit +page.server.ts load functions, actions, and form enhancements"
author: "AURA Team"
category: development
tags:
  - "sveltekit"
  - "page server"
  - "sveltekit load"
  - "sveltekit action"
triggers:
  - "sveltekit"
  - "page server"
  - "sveltekit load"
  - "sveltekit action"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SvelteKit Inspector

Inspect SvelteKit +page.server.ts load functions, actions, and form enhancements

## Metadata

- **ID:** `sveltekit-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `sveltekit`
- `page server`
- `sveltekit load`
- `sveltekit action`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sveltekit-inspector', {
  /* input parameters */
});
```
