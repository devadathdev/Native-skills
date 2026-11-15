---
id: haproxy-config
name: "HAProxy Config"
version: 1.0.0
description: "Inspect haproxy.cfg frontend, backend, listen blocks, and balance algorithms"
author: "AURA Team"
category: integration
tags:
  - "haproxy"
  - "haproxy cfg"
  - "frontend backend"
  - "haproxy balance"
triggers:
  - "haproxy"
  - "haproxy cfg"
  - "frontend backend"
  - "haproxy balance"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# HAProxy Config

Inspect haproxy.cfg frontend, backend, listen blocks, and balance algorithms

## Metadata

- **ID:** `haproxy-config`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `haproxy`
- `haproxy cfg`
- `frontend backend`
- `haproxy balance`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('haproxy-config', {
  /* input parameters */
});
```
