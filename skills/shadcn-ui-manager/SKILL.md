---
id: shadcn-ui-manager
name: "Shadcn UI Manager"
version: 1.0.0
description: "Inspect Radix-based copy-paste components, variants, and Tailwind integration"
author: "AURA Team"
category: development
tags:
  - "shadcn"
  - "shadcn ui"
  - "radix components"
  - "ui components"
triggers:
  - "shadcn"
  - "shadcn ui"
  - "radix components"
  - "ui components"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Shadcn UI Manager

Inspect Radix-based copy-paste components, variants, and Tailwind integration

## Metadata

- **ID:** `shadcn-ui-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `shadcn`
- `shadcn ui`
- `radix components`
- `ui components`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('shadcn-ui-manager', {
  /* input parameters */
});
```
