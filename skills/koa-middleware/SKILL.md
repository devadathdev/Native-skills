---
id: koa-middleware
name: "Koa Middleware"
version: 1.0.0
description: "Inspect Koa cascading middleware execution, ctx context, and async delegates"
author: "AURA Team"
category: development
tags:
  - "koa"
  - "koa middleware"
  - "koa router"
  - "ctx body"
triggers:
  - "koa"
  - "koa middleware"
  - "koa router"
  - "ctx body"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Koa Middleware

Inspect Koa cascading middleware execution, ctx context, and async delegates

## Metadata

- **ID:** `koa-middleware`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `koa`
- `koa middleware`
- `koa router`
- `ctx body`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('koa-middleware', {
  /* input parameters */
});
```
