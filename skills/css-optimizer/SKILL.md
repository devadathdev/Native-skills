---
id: css-optimizer
name: "CSS Optimizer"
version: 1.0.0
description: "Minify CSS stylesheets, eliminate unused selectors, and autoprefix vendor rules"
author: "AURA Team"
category: development
tags:
  - "css optimize"
  - "minify css"
  - "purgecss"
  - "css clean"
  - "css prefix"
triggers:
  - "css optimize"
  - "minify css"
  - "purgecss"
  - "css clean"
  - "css prefix"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# CSS Optimizer

Minify CSS stylesheets, eliminate unused selectors, and autoprefix vendor rules

## Metadata

- **ID:** `css-optimizer`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `css optimize`
- `minify css`
- `purgecss`
- `css clean`
- `css prefix`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('css-optimizer', {
  /* input parameters */
});
```
