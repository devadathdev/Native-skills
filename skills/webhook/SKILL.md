---
id: webhook
name: "Webhook Dispatcher"
version: 1.0.0
description: "Sign, format, and dispatch HTTP webhook notifications and event payloads"
author: "AURA Team"
category: integration
tags:
  - "webhook"
  - "dispatch webhook"
  - "trigger webhook"
  - "webhook payload"
  - "post webhook"
triggers:
  - "webhook"
  - "dispatch webhook"
  - "trigger webhook"
  - "webhook payload"
  - "post webhook"
permissions:
  - type: network
    scope: [webhook]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Webhook Dispatcher

Sign, format, and dispatch HTTP webhook notifications and event payloads

## Metadata

- **ID:** `webhook`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `webhook`)

## Triggers

- `webhook`
- `dispatch webhook`
- `trigger webhook`
- `webhook payload`
- `post webhook`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('webhook', {
  /* input parameters */
});
```
