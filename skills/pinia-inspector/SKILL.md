---
id: pinia-inspector
name: "Pinia Store Inspector"
version: 1.0.0
description: "Inspect Pinia defineStore state, getters, and action dispatches in Vue"
author: "AURA Team"
category: development
tags:
  - "pinia"
  - "pinia store"
  - "vue store"
  - "define store"
triggers:
  - "pinia"
  - "pinia store"
  - "vue store"
  - "define store"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Pinia Store Inspector

Inspect Pinia defineStore state, getters, and action dispatches in Vue

## Metadata

- **ID:** `pinia-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `pinia`
- `pinia store`
- `vue store`
- `define store`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pinia-inspector', {
  /* input parameters */
});
```
