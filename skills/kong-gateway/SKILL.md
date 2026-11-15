---
id: kong-gateway
name: "Kong API Gateway"
version: 1.0.0
description: "Inspect Kong declarative kong.yml services, routes, consumers, and plugins (rate-limiting)"
author: "AURA Team"
category: integration
tags:
  - "kong"
  - "kong gateway"
  - "kong plugin"
  - "kong yml"
triggers:
  - "kong"
  - "kong gateway"
  - "kong plugin"
  - "kong yml"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kong API Gateway

Inspect Kong declarative kong.yml services, routes, consumers, and plugins (rate-limiting)

## Metadata

- **ID:** `kong-gateway`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `kong`
- `kong gateway`
- `kong plugin`
- `kong yml`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kong-gateway', {
  /* input parameters */
});
```
