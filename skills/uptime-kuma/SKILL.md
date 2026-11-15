---
id: uptime-kuma
name: "Uptime Kuma"
version: 1.0.0
description: "Inspect Uptime Kuma monitor definitions, status page configurations, and heartbeat intervals"
author: "AURA Team"
category: devops
tags:
  - "uptime kuma"
  - "status page"
  - "monitor ping"
  - "kuma uptime"
triggers:
  - "uptime kuma"
  - "status page"
  - "monitor ping"
  - "kuma uptime"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Uptime Kuma

Inspect Uptime Kuma monitor definitions, status page configurations, and heartbeat intervals

## Metadata

- **ID:** `uptime-kuma`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `uptime kuma`
- `status page`
- `monitor ping`
- `kuma uptime`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('uptime-kuma', {
  /* input parameters */
});
```
