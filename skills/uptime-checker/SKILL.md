---
id: uptime-checker
name: "Uptime & SLA Checker"
version: 1.0.0
description: "Calculate SLA availability percentages (99.9% / 99.99%) and inspect regional synthetic pings"
author: "AURA Team"
category: devops
tags:
  - "uptime"
  - "sla check"
  - "availability"
  - "nine nines"
  - "synthetic ping"
  - "uptime monitor"
triggers:
  - "uptime"
  - "sla check"
  - "availability"
  - "nine nines"
  - "synthetic ping"
  - "uptime monitor"
permissions:
  - type: network
    scope: [uptime]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Uptime & SLA Checker

Calculate SLA availability percentages (99.9% / 99.99%) and inspect regional synthetic pings

## Metadata

- **ID:** `uptime-checker`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `uptime`)

## Triggers

- `uptime`
- `sla check`
- `availability`
- `nine nines`
- `synthetic ping`
- `uptime monitor`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('uptime-checker', {
  /* input parameters */
});
```
