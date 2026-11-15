---
id: linkerd-mesh
name: "Linkerd Service Mesh"
version: 1.0.0
description: "Inspect Linkerd lightweight mTLS proxies, traffic split Server CRDs, and viz metrics"
author: "AURA Team"
category: devops
tags:
  - "linkerd"
  - "linkerd mesh"
  - "rust proxy k8s"
  - "linkerd mTLS"
triggers:
  - "linkerd"
  - "linkerd mesh"
  - "rust proxy k8s"
  - "linkerd mTLS"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Linkerd Service Mesh

Inspect Linkerd lightweight mTLS proxies, traffic split Server CRDs, and viz metrics

## Metadata

- **ID:** `linkerd-mesh`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `linkerd`
- `linkerd mesh`
- `rust proxy k8s`
- `linkerd mTLS`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('linkerd-mesh', {
  /* input parameters */
});
```
