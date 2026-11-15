---
id: thanos-architect
name: "Thanos Metrics System"
version: 1.0.0
description: "Inspect Thanos sidecars, store gateways, compactors, and object storage retention"
author: "AURA Team"
category: devops
tags:
  - "thanos"
  - "long term prometheus"
  - "thanos sidecar"
  - "thanos store"
triggers:
  - "thanos"
  - "long term prometheus"
  - "thanos sidecar"
  - "thanos store"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Thanos Metrics System

Inspect Thanos sidecars, store gateways, compactors, and object storage retention

## Metadata

- **ID:** `thanos-architect`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `thanos`
- `long term prometheus`
- `thanos sidecar`
- `thanos store`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('thanos-architect', {
  /* input parameters */
});
```
