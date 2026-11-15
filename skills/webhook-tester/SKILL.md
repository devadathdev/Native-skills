---
id: webhook-tester
name: "Webhook Tester"
version: 1.0.0
description: "Simulate webhook receptions, verify HMAC signatures, inspect headers, and test retry delays"
author: "AURA Team"
category: integration
tags:
  - "webhook test"
  - "mock webhook"
  - "webhook debug"
  - "incoming webhook"
  - "verify webhook"
triggers:
  - "webhook test"
  - "mock webhook"
  - "webhook debug"
  - "incoming webhook"
  - "verify webhook"
permissions:
  - type: network
    scope: [webhook]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Webhook Tester

Simulate webhook receptions, verify HMAC signatures, inspect headers, and test retry delays

## Metadata

- **ID:** `webhook-tester`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `webhook`)

## Triggers

- `webhook test`
- `mock webhook`
- `webhook debug`
- `incoming webhook`
- `verify webhook`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('webhook-tester', {
  /* input parameters */
});
```
