---
id: consul-service-mesh
name: "HashiCorp Consul"
version: 1.0.0
description: "Inspect Consul service catalog, health checks, intention rules, and connect mesh"
author: "AURA Team"
category: devops
tags:
  - "consul"
  - "service mesh consul"
  - "consul catalog"
  - "service discovery"
triggers:
  - "consul"
  - "service mesh consul"
  - "consul catalog"
  - "service discovery"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# HashiCorp Consul

Inspect Consul service catalog, health checks, intention rules, and connect mesh

## Metadata

- **ID:** `consul-service-mesh`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `consul`
- `service mesh consul`
- `consul catalog`
- `service discovery`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('consul-service-mesh', {
  /* input parameters */
});
```
