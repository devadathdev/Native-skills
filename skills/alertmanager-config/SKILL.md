---
id: alertmanager-config
name: "Alertmanager Config"
version: 1.0.0
description: "Inspect Alertmanager routing trees, receivers (Slack, PagerDuty), and inhibition rules"
author: "AURA Team"
category: devops
tags:
  - "alertmanager"
  - "alert routing"
  - "pagerduty alert"
  - "inhibition rule"
triggers:
  - "alertmanager"
  - "alert routing"
  - "pagerduty alert"
  - "inhibition rule"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Alertmanager Config

Inspect Alertmanager routing trees, receivers (Slack, PagerDuty), and inhibition rules

## Metadata

- **ID:** `alertmanager-config`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `alertmanager`
- `alert routing`
- `pagerduty alert`
- `inhibition rule`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('alertmanager-config', {
  /* input parameters */
});
```
