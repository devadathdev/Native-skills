---
id: aws-sqs-manager
name: "AWS SQS Manager"
version: 1.0.0
description: "Inspect SQS standard/FIFO queue configurations, visibility timeouts, and dead-letter queues"
author: "AURA Team"
category: integration
tags:
  - "aws sqs"
  - "sqs queue"
  - "dead letter queue"
  - "visibility timeout"
triggers:
  - "aws sqs"
  - "sqs queue"
  - "dead letter queue"
  - "visibility timeout"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS SQS Manager

Inspect SQS standard/FIFO queue configurations, visibility timeouts, and dead-letter queues

## Metadata

- **ID:** `aws-sqs-manager`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws sqs`
- `sqs queue`
- `dead letter queue`
- `visibility timeout`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-sqs-manager', {
  /* input parameters */
});
```
