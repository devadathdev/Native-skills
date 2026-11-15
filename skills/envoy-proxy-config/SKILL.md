---
id: envoy-proxy-config
name: "Envoy Proxy Config"
version: 1.0.0
description: "Inspect Envoy static listeners, clusters, filter chains, and route configurations"
author: "AURA Team"
category: integration
tags:
  - "envoy"
  - "envoy proxy"
  - "filter chain"
  - "envoy yaml"
triggers:
  - "envoy"
  - "envoy proxy"
  - "filter chain"
  - "envoy yaml"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Envoy Proxy Config

Inspect Envoy static listeners, clusters, filter chains, and route configurations

## Metadata

- **ID:** `envoy-proxy-config`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `envoy`
- `envoy proxy`
- `filter chain`
- `envoy yaml`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('envoy-proxy-config', {
  /* input parameters */
});
```
