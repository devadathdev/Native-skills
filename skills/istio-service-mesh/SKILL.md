---
id: istio-service-mesh
name: "Istio Service Mesh"
version: 1.0.0
description: "Inspect Istio VirtualService, DestinationRule, Gateway, and EnvoyFilter declarations"
author: "AURA Team"
category: devops
tags:
  - "istio"
  - "virtualservice"
  - "destinationrule"
  - "service mesh"
triggers:
  - "istio"
  - "virtualservice"
  - "destinationrule"
  - "service mesh"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Istio Service Mesh

Inspect Istio VirtualService, DestinationRule, Gateway, and EnvoyFilter declarations

## Metadata

- **ID:** `istio-service-mesh`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `istio`
- `virtualservice`
- `destinationrule`
- `service mesh`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('istio-service-mesh', {
  /* input parameters */
});
```
