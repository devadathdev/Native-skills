---
id: tls-sni-inspector
name: "TLS SNI Inspector"
version: 1.0.0
description: "Inspect TLS handshake Server Name Indication (SNI) extensions and ALPN banners"
author: "AURA Team"
category: security
tags:
  - "sni"
  - "server name indication"
  - "tls handshake"
  - "tls banner"
triggers:
  - "sni"
  - "server name indication"
  - "tls handshake"
  - "tls banner"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TLS SNI Inspector

Inspect TLS handshake Server Name Indication (SNI) extensions and ALPN banners

## Metadata

- **ID:** `tls-sni-inspector`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `sni`
- `server name indication`
- `tls handshake`
- `tls banner`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tls-sni-inspector', {
  /* input parameters */
});
```
