---
id: gateway-api
name: "Kubernetes Gateway API"
version: 1.0.0
description: "Inspect HTTPRoute, GRPCRoute, GatewayClass, and Gateway listener declarations"
author: "AURA Team"
category: devops
tags:
  - "gateway api"
  - "httproute"
  - "k8s gateway"
  - "gatewayclass"
triggers:
  - "gateway api"
  - "httproute"
  - "k8s gateway"
  - "gatewayclass"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kubernetes Gateway API

Inspect HTTPRoute, GRPCRoute, GatewayClass, and Gateway listener declarations

## Metadata

- **ID:** `gateway-api`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `gateway api`
- `httproute`
- `k8s gateway`
- `gatewayclass`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gateway-api', {
  /* input parameters */
});
```
