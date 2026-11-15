---
id: tailscale-manager
name: "Tailscale Tailnet"
version: 1.0.0
description: "Inspect Tailnet node status, MagicDNS names, ACL rules, and exit node configs"
author: "AURA Team"
category: integration
tags:
  - "tailscale"
  - "tailnet"
  - "magicdns"
  - "tailscale acl"
triggers:
  - "tailscale"
  - "tailnet"
  - "magicdns"
  - "tailscale acl"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Tailscale Tailnet

Inspect Tailnet node status, MagicDNS names, ACL rules, and exit node configs

## Metadata

- **ID:** `tailscale-manager`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `tailscale`
- `tailnet`
- `magicdns`
- `tailscale acl`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tailscale-manager', {
  /* input parameters */
});
```
