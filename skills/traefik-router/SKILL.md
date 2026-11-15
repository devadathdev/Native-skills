---
id: traefik-router
name: "Traefik Router"
version: 1.0.0
description: "Inspect Traefik dynamic routers, middlewares (stripPrefix, basicAuth), and entryPoints"
author: "AURA Team"
category: integration
tags:
  - "traefik"
  - "traefik router"
  - "traefik middleware"
  - "entrypoint"
triggers:
  - "traefik"
  - "traefik router"
  - "traefik middleware"
  - "entrypoint"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Traefik Router

Inspect Traefik dynamic routers, middlewares (stripPrefix, basicAuth), and entryPoints

## Metadata

- **ID:** `traefik-router`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `traefik`
- `traefik router`
- `traefik middleware`
- `entrypoint`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('traefik-router', {
  /* input parameters */
});
```
