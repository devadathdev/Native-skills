---
id: material-ui-manager
name: "Material UI Manager"
version: 1.0.0
description: "Inspect MUI themes, sx prop performance, component slots, and emotion styles"
author: "AURA Team"
category: development
tags:
  - "mui"
  - "material ui"
  - "mui theme"
  - "sx prop"
triggers:
  - "mui"
  - "material ui"
  - "mui theme"
  - "sx prop"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Material UI Manager

Inspect MUI themes, sx prop performance, component slots, and emotion styles

## Metadata

- **ID:** `material-ui-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `mui`
- `material ui`
- `mui theme`
- `sx prop`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('material-ui-manager', {
  /* input parameters */
});
```
