---
id: express-router
name: "Express Router"
version: 1.0.0
description: "Inspect Express middleware chains, route handlers, error handlers, and routers"
author: "AURA Team"
category: development
tags:
  - "express"
  - "express router"
  - "express middleware"
  - "nodejs api"
triggers:
  - "express"
  - "express router"
  - "express middleware"
  - "nodejs api"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Express Router

Inspect Express middleware chains, route handlers, error handlers, and routers

## Metadata

- **ID:** `express-router`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `express`
- `express router`
- `express middleware`
- `nodejs api`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('express-router', {
  /* input parameters */
});
```
