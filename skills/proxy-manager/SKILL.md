---
id: proxy-manager
name: "Proxy Manager"
version: 1.0.0
description: "Validate HTTP, HTTPS, and SOCKS5 proxy configurations, authentication, and routing rules"
author: "AURA Team"
category: integration
tags:
  - "proxy"
  - "socks5"
  - "http proxy"
  - "forward proxy"
  - "proxy routing"
triggers:
  - "proxy"
  - "socks5"
  - "http proxy"
  - "forward proxy"
  - "proxy routing"
permissions:
  - type: network
    scope: [proxy]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Proxy Manager

Validate HTTP, HTTPS, and SOCKS5 proxy configurations, authentication, and routing rules

## Metadata

- **ID:** `proxy-manager`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `proxy`)

## Triggers

- `proxy`
- `socks5`
- `http proxy`
- `forward proxy`
- `proxy routing`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('proxy-manager', {
  /* input parameters */
});
```
