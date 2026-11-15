---
id: network-traceroute
name: "Traceroute & MTR"
version: 1.0.0
description: "Inspect hop-by-hop network routing paths, latency variance, and packet loss"
author: "AURA Team"
category: integration
tags:
  - "traceroute"
  - "mtr"
  - "network hops"
  - "packet loss check"
triggers:
  - "traceroute"
  - "mtr"
  - "network hops"
  - "packet loss check"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Traceroute & MTR

Inspect hop-by-hop network routing paths, latency variance, and packet loss

## Metadata

- **ID:** `network-traceroute`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `traceroute`
- `mtr`
- `network hops`
- `packet loss check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('network-traceroute', {
  /* input parameters */
});
```
