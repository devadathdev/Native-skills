---
id: network-scanner
name: "Network Scanner"
version: 1.0.0
description: "Inspect target domains, SSL certificate expiration, and network endpoints"
author: "AURA Team"
category: security
tags:
  - "network scan"
  - "port scan"
  - "dns lookup"
  - "ssl check"
  - "ping host"
  - "network check"
triggers:
  - "network scan"
  - "port scan"
  - "dns lookup"
  - "ssl check"
  - "ping host"
  - "network check"
permissions:
  - type: network
    scope: [scan]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Network Scanner

Inspect target domains, SSL certificate expiration, and network endpoints

## Metadata

- **ID:** `network-scanner`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `scan`)

## Triggers

- `network scan`
- `port scan`
- `dns lookup`
- `ssl check`
- `ping host`
- `network check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('network-scanner', {
  /* input parameters */
});
```
