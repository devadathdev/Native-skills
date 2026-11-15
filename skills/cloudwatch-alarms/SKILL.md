---
id: cloudwatch-alarms
name: "CloudWatch Alarms"
version: 1.0.0
description: "Inspect AWS CloudWatch metric alarms, threshold evaluations, and SNS actions"
author: "AURA Team"
category: devops
tags:
  - "cloudwatch alarm"
  - "metric alarm"
  - "cloudwatch metric"
  - "evaluation periods"
triggers:
  - "cloudwatch alarm"
  - "metric alarm"
  - "cloudwatch metric"
  - "evaluation periods"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# CloudWatch Alarms

Inspect AWS CloudWatch metric alarms, threshold evaluations, and SNS actions

## Metadata

- **ID:** `cloudwatch-alarms`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cloudwatch alarm`
- `metric alarm`
- `cloudwatch metric`
- `evaluation periods`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cloudwatch-alarms', {
  /* input parameters */
});
```
