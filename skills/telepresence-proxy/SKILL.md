---
id: telepresence-proxy
name: "Telepresence Proxy"
version: 1.0.0
description: "Inspect Telepresence traffic intercepts, preview URLs, and cluster routing"
author: "AURA Team"
category: devops
tags:
  - "telepresence"
  - "traffic intercept"
  - "remote k8s debug"
  - "local cluster bridge"
triggers:
  - "telepresence"
  - "traffic intercept"
  - "remote k8s debug"
  - "local cluster bridge"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Telepresence Proxy

Inspect Telepresence traffic intercepts, preview URLs, and cluster routing

## Metadata

- **ID:** `telepresence-proxy`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `telepresence`
- `traffic intercept`
- `remote k8s debug`
- `local cluster bridge`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('telepresence-proxy', {
  /* input parameters */
});
```
