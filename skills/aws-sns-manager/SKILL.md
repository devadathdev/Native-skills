---
id: aws-sns-manager
name: "AWS SNS Manager"
version: 1.0.0
description: "Inspect SNS topic subscriptions, message delivery policies, and fanout architectures"
author: "AURA Team"
category: integration
tags:
  - "aws sns"
  - "sns topic"
  - "sns subscription"
  - "pubsub aws"
triggers:
  - "aws sns"
  - "sns topic"
  - "sns subscription"
  - "pubsub aws"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS SNS Manager

Inspect SNS topic subscriptions, message delivery policies, and fanout architectures

## Metadata

- **ID:** `aws-sns-manager`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws sns`
- `sns topic`
- `sns subscription`
- `pubsub aws`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-sns-manager', {
  /* input parameters */
});
```
