---
id: aws-eventbridge
name: "AWS EventBridge"
version: 1.0.0
description: "Inspect EventBridge event buses, routing rules, schema registries, and pipes"
author: "AURA Team"
category: integration
tags:
  - "eventbridge"
  - "event bus"
  - "eventbridge rules"
  - "aws event"
triggers:
  - "eventbridge"
  - "event bus"
  - "eventbridge rules"
  - "aws event"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS EventBridge

Inspect EventBridge event buses, routing rules, schema registries, and pipes

## Metadata

- **ID:** `aws-eventbridge`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `eventbridge`
- `event bus`
- `eventbridge rules`
- `aws event`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-eventbridge', {
  /* input parameters */
});
```
