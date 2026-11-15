---
id: caddy-server
name: "Caddyfile Server"
version: 1.0.0
description: "Inspect Caddyfile directives, automatic HTTPS provisioning, and reverse proxy rules"
author: "AURA Team"
category: integration
tags:
  - "caddy"
  - "caddyfile"
  - "auto https"
  - "caddy reverse proxy"
triggers:
  - "caddy"
  - "caddyfile"
  - "auto https"
  - "caddy reverse proxy"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Caddyfile Server

Inspect Caddyfile directives, automatic HTTPS provisioning, and reverse proxy rules

## Metadata

- **ID:** `caddy-server`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `caddy`
- `caddyfile`
- `auto https`
- `caddy reverse proxy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('caddy-server', {
  /* input parameters */
});
```
