---
id: hono-router
name: "Hono Router"
version: 1.0.0
description: "Inspect Ultrafast Hono edge routes, regex trie routing, and middleware adapters"
author: "AURA Team"
category: development
tags:
  - "hono"
  - "hono edge"
  - "cloudflare workers hono"
  - "ultrafast router"
triggers:
  - "hono"
  - "hono edge"
  - "cloudflare workers hono"
  - "ultrafast router"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Hono Router

Inspect Ultrafast Hono edge routes, regex trie routing, and middleware adapters

## Metadata

- **ID:** `hono-router`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `hono`
- `hono edge`
- `cloudflare workers hono`
- `ultrafast router`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('hono-router', {
  /* input parameters */
});
```
