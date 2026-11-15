---
id: preact-signals
name: "Preact Signals"
version: 1.0.0
description: "Inspect Preact lightweight virtual DOM, signals reactive primitives, and bundles"
author: "AURA Team"
category: development
tags:
  - "preact"
  - "preact signals"
  - "lightweight vdom"
triggers:
  - "preact"
  - "preact signals"
  - "lightweight vdom"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Preact Signals

Inspect Preact lightweight virtual DOM, signals reactive primitives, and bundles

## Metadata

- **ID:** `preact-signals`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `preact`
- `preact signals`
- `lightweight vdom`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('preact-signals', {
  /* input parameters */
});
```
