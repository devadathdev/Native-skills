---
id: vite-config
name: "Vite Config Inspector"
version: 1.0.0
description: "Inspect vite.config.ts plugins, server HMR, proxy rules, and build targets"
author: "AURA Team"
category: development
tags:
  - "vite"
  - "vite config"
  - "hmr"
  - "vite plugins"
triggers:
  - "vite"
  - "vite config"
  - "hmr"
  - "vite plugins"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vite Config Inspector

Inspect vite.config.ts plugins, server HMR, proxy rules, and build targets

## Metadata

- **ID:** `vite-config`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `vite`
- `vite config`
- `hmr`
- `vite plugins`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vite-config', {
  /* input parameters */
});
```
