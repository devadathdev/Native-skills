---
id: nginx-config-linter
name: "Nginx Config Linter"
version: 1.0.0
description: "Validate nginx.conf syntax, upstream pools, server blocks, and proxy headers"
author: "AURA Team"
category: integration
tags:
  - "nginx lint"
  - "nginx conf"
  - "upstream server"
  - "server block"
triggers:
  - "nginx lint"
  - "nginx conf"
  - "upstream server"
  - "server block"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Nginx Config Linter

Validate nginx.conf syntax, upstream pools, server blocks, and proxy headers

## Metadata

- **ID:** `nginx-config-linter`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `nginx lint`
- `nginx conf`
- `upstream server`
- `server block`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nginx-config-linter', {
  /* input parameters */
});
```
