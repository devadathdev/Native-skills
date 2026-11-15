---
id: pagerduty-api
name: "PagerDuty API"
version: 1.0.0
description: "Inspect PagerDuty on-call schedules, escalation policies, and incident creation"
author: "AURA Team"
category: productivity
tags:
  - "pagerduty"
  - "oncall"
  - "escalation policy"
  - "trigger incident"
triggers:
  - "pagerduty"
  - "oncall"
  - "escalation policy"
  - "trigger incident"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PagerDuty API

Inspect PagerDuty on-call schedules, escalation policies, and incident creation

## Metadata

- **ID:** `pagerduty-api`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `pagerduty`
- `oncall`
- `escalation policy`
- `trigger incident`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pagerduty-api', {
  /* input parameters */
});
```
