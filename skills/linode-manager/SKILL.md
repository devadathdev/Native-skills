---
id: linode-manager
name: "Akamai Linode Manager"
version: 1.0.0
description: "Inspect Linode virtual instances, NodeBalancers, Object Storage, and block storage"
author: "AURA Team"
category: devops
tags:
  - "linode"
  - "akamai cloud"
  - "nodebalancer"
  - "linode instance"
triggers:
  - "linode"
  - "akamai cloud"
  - "nodebalancer"
  - "linode instance"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Akamai Linode Manager

Inspect Linode virtual instances, NodeBalancers, Object Storage, and block storage

## Metadata

- **ID:** `linode-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `linode`
- `akamai cloud`
- `nodebalancer`
- `linode instance`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('linode-manager', {
  /* input parameters */
});
```
