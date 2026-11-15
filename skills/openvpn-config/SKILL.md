---
id: openvpn-config
name: "OpenVPN Config"
version: 1.0.0
description: "Inspect .ovpn configuration directives, cipher suites, TLS auth keys, and routes"
author: "AURA Team"
category: integration
tags:
  - "openvpn"
  - "ovpn"
  - "vpn config"
  - "tls auth"
triggers:
  - "openvpn"
  - "ovpn"
  - "vpn config"
  - "tls auth"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# OpenVPN Config

Inspect .ovpn configuration directives, cipher suites, TLS auth keys, and routes

## Metadata

- **ID:** `openvpn-config`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `openvpn`
- `ovpn`
- `vpn config`
- `tls auth`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('openvpn-config', {
  /* input parameters */
});
```
