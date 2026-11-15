---
id: jotai-atoms
name: "Jotai Atoms"
version: 1.0.0
description: "Inspect atomic state graphs, derived atoms, and atomWithStorage primitives"
author: "AURA Team"
category: development
tags:
  - "jotai"
  - "atoms"
  - "atom with storage"
  - "derived atom"
triggers:
  - "jotai"
  - "atoms"
  - "atom with storage"
  - "derived atom"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Jotai Atoms

Inspect atomic state graphs, derived atoms, and atomWithStorage primitives

## Metadata

- **ID:** `jotai-atoms`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `jotai`
- `atoms`
- `atom with storage`
- `derived atom`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jotai-atoms', {
  /* input parameters */
});
```
