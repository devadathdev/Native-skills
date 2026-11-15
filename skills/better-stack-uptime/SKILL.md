---
id: better-stack-uptime
name: "Better Stack Uptime"
version: 1.0.0
description: "Inspect Better Stack heartbeat monitors, incident post-mortems, and status dashboards"
author: "AURA Team"
category: devops
tags:
  - "better stack"
  - "better uptime"
  - "status dashboard"
  - "heartbeat monitor"
triggers:
  - "better stack"
  - "better uptime"
  - "status dashboard"
  - "heartbeat monitor"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Better Stack Uptime

Inspect Better Stack heartbeat monitors, incident post-mortems, and status dashboards

## Metadata

- **ID:** `better-stack-uptime`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `better stack`
- `better uptime`
- `status dashboard`
- `heartbeat monitor`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('better-stack-uptime', {
  /* input parameters */
});
```
