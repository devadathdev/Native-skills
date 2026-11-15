---
id: webpack-config
name: "Webpack Config Inspector"
version: 1.0.0
description: "Inspect webpack.config.js loaders, plugins, optimization, and chunk splitting"
author: "AURA Team"
category: development
tags:
  - "webpack"
  - "webpack config"
  - "module rules"
  - "optimization split"
triggers:
  - "webpack"
  - "webpack config"
  - "module rules"
  - "optimization split"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Webpack Config Inspector

Inspect webpack.config.js loaders, plugins, optimization, and chunk splitting

## Metadata

- **ID:** `webpack-config`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `webpack`
- `webpack config`
- `module rules`
- `optimization split`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('webpack-config', {
  /* input parameters */
});
```
