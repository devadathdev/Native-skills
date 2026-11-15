---
id: radix-primitives
name: "Radix Primitives"
version: 1.0.0
description: "Inspect unstyled accessible primitive components (dialog, popover, dropdown)"
author: "AURA Team"
category: development
tags:
  - "radix"
  - "radix primitives"
  - "accessible ui"
  - "unstyled components"
triggers:
  - "radix"
  - "radix primitives"
  - "accessible ui"
  - "unstyled components"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Radix Primitives

Inspect unstyled accessible primitive components (dialog, popover, dropdown)

## Metadata

- **ID:** `radix-primitives`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `radix`
- `radix primitives`
- `accessible ui`
- `unstyled components`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('radix-primitives', {
  /* input parameters */
});
```
