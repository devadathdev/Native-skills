---
id: nextjs-app-router
name: "Next.js App Router"
version: 1.0.0
description: "Inspect Next.js app directory layouts, server components, and route handlers"
author: "AURA Team"
category: development
tags:
  - "nextjs"
  - "app router"
  - "server component"
  - "rsc layout"
triggers:
  - "nextjs"
  - "app router"
  - "server component"
  - "rsc layout"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Next.js App Router

Inspect Next.js app directory layouts, server components, and route handlers

## Metadata

- **ID:** `nextjs-app-router`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `nextjs`
- `app router`
- `server component`
- `rsc layout`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nextjs-app-router', {
  /* input parameters */
});
```
