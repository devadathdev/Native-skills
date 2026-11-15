---
id: bundle-analyzer
name: "Bundle Analyzer"
version: 1.0.0
description: "Inspect JavaScript/TypeScript bundle sizes, module dependencies, and tree-shaking efficacy"
author: "AURA Team"
category: development
tags:
  - "bundle analyzer"
  - "bundle size"
  - "webpack bundle"
  - "vite bundle"
  - "treeshaking"
triggers:
  - "bundle analyzer"
  - "bundle size"
  - "webpack bundle"
  - "vite bundle"
  - "treeshaking"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Bundle Analyzer

Inspect JavaScript/TypeScript bundle sizes, module dependencies, and tree-shaking efficacy

## Metadata

- **ID:** `bundle-analyzer`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `bundle analyzer`
- `bundle size`
- `webpack bundle`
- `vite bundle`
- `treeshaking`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('bundle-analyzer', {
  /* input parameters */
});
```
