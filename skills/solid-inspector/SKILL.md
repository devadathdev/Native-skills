---
id: solid-inspector
name: "SolidJS Inspector"
version: 1.0.0
description: "Inspect SolidJS fine-grained signals, createEffect bindings, and JSX trees"
author: "AURA Team"
category: development
tags:
  - "solidjs"
  - "solid signals"
  - "fine grained reactivity"
triggers:
  - "solidjs"
  - "solid signals"
  - "fine grained reactivity"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SolidJS Inspector

Inspect SolidJS fine-grained signals, createEffect bindings, and JSX trees

## Metadata

- **ID:** `solid-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `solidjs`
- `solid signals`
- `fine grained reactivity`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('solid-inspector', {
  /* input parameters */
});
```
