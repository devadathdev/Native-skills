---
id: wireguard-mesh
name: "WireGuard VPN Mesh"
version: 1.0.0
description: "Inspect wg0.conf interface keys, listen ports, allowed IPs, and persistent keepalives"
author: "AURA Team"
category: integration
tags:
  - "wireguard"
  - "vpn"
  - "wg0"
  - "allowed ips"
  - "wireguard conf"
triggers:
  - "wireguard"
  - "vpn"
  - "wg0"
  - "allowed ips"
  - "wireguard conf"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# WireGuard VPN Mesh

Inspect wg0.conf interface keys, listen ports, allowed IPs, and persistent keepalives

## Metadata

- **ID:** `wireguard-mesh`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `wireguard`
- `vpn`
- `wg0`
- `allowed ips`
- `wireguard conf`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('wireguard-mesh', {
  /* input parameters */
});
```
