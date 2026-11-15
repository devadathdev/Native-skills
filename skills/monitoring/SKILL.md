---
id: monitoring
name: "Monitoring"
version: 1.0.0
description: "Query system telemetry, check service health endpoints, and define alerts"
author: "AURA Team"
category: devops
tags:
  - "monitor"
  - "metrics"
  - "uptime"
  - "health check"
  - "ping service"
triggers:
  - "monitor"
  - "metrics"
  - "uptime"
  - "health check"
  - "ping service"
permissions:
  - type: network
    scope: [health]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Monitoring

Query system telemetry, check service health endpoints, and define alerts

## Metadata

- **ID:** `monitoring`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `health`)

## Triggers

- `monitor`
- `metrics`
- `uptime`
- `health check`
- `ping service`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('monitoring', {
  /* input parameters */
});
```
