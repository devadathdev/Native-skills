---
id: vue-inspector
name: "Vue Inspector"
version: 1.0.0
description: "Inspect Vue 3 single file components (SFC), reactivity ref/reactive, and props"
author: "AURA Team"
category: development
tags:
  - "vue"
  - "vue3"
  - "sfc"
  - "vue reactivity"
triggers:
  - "vue"
  - "vue3"
  - "sfc"
  - "vue reactivity"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vue Inspector

Inspect Vue 3 single file components (SFC), reactivity ref/reactive, and props

## Metadata

- **ID:** `vue-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `vue`
- `vue3`
- `sfc`
- `vue reactivity`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vue-inspector', {
  /* input parameters */
});
```
