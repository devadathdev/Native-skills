---
id: zustand-inspector
name: "Zustand Inspector"
version: 1.0.0
description: "Inspect Zustand store slices, shallow selector subscriptions, and persist middleware"
author: "AURA Team"
category: development
tags:
  - "zustand"
  - "zustand store"
  - "zustand slice"
  - "shallow selector"
triggers:
  - "zustand"
  - "zustand store"
  - "zustand slice"
  - "shallow selector"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Zustand Inspector

Inspect Zustand store slices, shallow selector subscriptions, and persist middleware

## Metadata

- **ID:** `zustand-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `zustand`
- `zustand store`
- `zustand slice`
- `shallow selector`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('zustand-inspector', {
  /* input parameters */
});
```
