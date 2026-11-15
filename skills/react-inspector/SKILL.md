---
id: react-inspector
name: "React Inspector"
version: 1.0.0
description: "Inspect React component hierarchy, render trees, and hook dependencies"
author: "AURA Team"
category: development
tags:
  - "react"
  - "react hooks"
  - "useeffect"
  - "jsx render"
triggers:
  - "react"
  - "react hooks"
  - "useeffect"
  - "jsx render"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# React Inspector

Inspect React component hierarchy, render trees, and hook dependencies

## Metadata

- **ID:** `react-inspector`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `react`
- `react hooks`
- `useeffect`
- `jsx render`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('react-inspector', {
  /* input parameters */
});
```
