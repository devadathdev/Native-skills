---
id: zerotier-network
name: "ZeroTier Network"
version: 1.0.0
description: "Inspect ZeroTier virtual controller networks, peer nodes, and flow rules"
author: "AURA Team"
category: integration
tags:
  - "zerotier"
  - "virtual ethernet"
  - "zerotier member"
  - "flow rules"
triggers:
  - "zerotier"
  - "virtual ethernet"
  - "zerotier member"
  - "flow rules"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ZeroTier Network

Inspect ZeroTier virtual controller networks, peer nodes, and flow rules

## Metadata

- **ID:** `zerotier-network`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `zerotier`
- `virtual ethernet`
- `zerotier member`
- `flow rules`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('zerotier-network', {
  /* input parameters */
});
```
