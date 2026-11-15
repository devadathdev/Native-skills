---
id: documentation
name: "Documentation"
version: 1.0.0
description: "Generate, maintain, and inspect technical documentation"
author: "AURA Team"
category: development
tags:
  - "docs"
  - "readme"
  - "api docs"
  - "markdown"
  - "jsdoc"
triggers:
  - "documentation"
  - "readme"
  - "docs"
  - "generate docs"
  - "api docs"
permissions:
  - type: filesystem
    scope: [read, write]
  - type: model
    scope: [generation]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Documentation

Generate, maintain, and inspect technical documentation

## Metadata

- **ID:** `documentation`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)
- `model` (scope: `generation`)

## Triggers

- `documentation`
- `readme`
- `docs`
- `generate docs`
- `api docs`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('documentation', {
  /* input parameters */
});
```
