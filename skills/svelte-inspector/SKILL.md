---
id: svelte-inspector
name: "Svelte Inspector"
version: 1.0.0
description: "Inspect Svelte 5 runes, stores, reactive declarations, and transitions"
author: "AURA Team"
category: development
tags:
  - "svelte"
  - "svelte5"
  - "svelte runes"
  - "svelte store"
triggers:
  - "svelte"
  - "svelte5"
  - "svelte runes"
  - "svelte store"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Svelte Inspector

Inspect Svelte 5 runes, stores, reactive declarations, and transitions

## Metadata

- **ID:** `svelte-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `svelte`
- `svelte5`
- `svelte runes`
- `svelte store`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('svelte-inspector', {
  /* input parameters */
});
```
