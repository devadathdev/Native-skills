---
id: apache-apisix
name: "Apache APISIX"
version: 1.0.0
description: "Inspect APISIX dynamic routing rules, upstream configurations, and Lua plugins"
author: "AURA Team"
category: integration
tags:
  - "apisix"
  - "apache apisix"
  - "cloud native gateway"
  - "apisix route"
triggers:
  - "apisix"
  - "apache apisix"
  - "cloud native gateway"
  - "apisix route"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache APISIX

Inspect APISIX dynamic routing rules, upstream configurations, and Lua plugins

## Metadata

- **ID:** `apache-apisix`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `apisix`
- `apache apisix`
- `cloud native gateway`
- `apisix route`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-apisix', {
  /* input parameters */
});
```
