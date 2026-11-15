---
id: storybook-manager
name: "Storybook Manager"
version: 1.0.0
description: "Inspect Storybook CSF3 story components, argTypes, decorators, and docs"
author: "AURA Team"
category: development
tags:
  - "storybook"
  - "stories"
  - "csf3"
  - "component playground"
triggers:
  - "storybook"
  - "stories"
  - "csf3"
  - "component playground"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Storybook Manager

Inspect Storybook CSF3 story components, argTypes, decorators, and docs

## Metadata

- **ID:** `storybook-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `storybook`
- `stories`
- `csf3`
- `component playground`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('storybook-manager', {
  /* input parameters */
});
```
