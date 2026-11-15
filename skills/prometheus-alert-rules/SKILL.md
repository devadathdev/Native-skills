---
id: prometheus-alert-rules
name: "Prometheus Alert Rules"
version: 1.0.0
description: "Validate Prometheus alert rule definitions, expressions, duration, and annotations"
author: "AURA Team"
category: devops
tags:
  - "alert rule"
  - "prometheus alert"
  - "alertmanager rule"
  - "for duration"
triggers:
  - "alert rule"
  - "prometheus alert"
  - "alertmanager rule"
  - "for duration"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Prometheus Alert Rules

Validate Prometheus alert rule definitions, expressions, duration, and annotations

## Metadata

- **ID:** `prometheus-alert-rules`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `alert rule`
- `prometheus alert`
- `alertmanager rule`
- `for duration`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('prometheus-alert-rules', {
  /* input parameters */
});
```
