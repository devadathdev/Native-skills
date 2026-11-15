---
id: wails-app
name: "Wails Desktop App"
version: 1.0.0
description: "Inspect Go Wails frontend-to-Go runtime bindings and application windowing"
author: "AURA Team"
category: development
tags:
  - "wails"
  - "wails app"
  - "go desktop"
  - "wails bind"
triggers:
  - "wails"
  - "wails app"
  - "go desktop"
  - "wails bind"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Wails Desktop App

Inspect Go Wails frontend-to-Go runtime bindings and application windowing

## Metadata

- **ID:** `wails-app`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `wails`
- `wails app`
- `go desktop`
- `wails bind`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('wails-app', {
  /* input parameters */
});
```
