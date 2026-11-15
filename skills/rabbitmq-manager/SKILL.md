---
id: rabbitmq-manager
name: "RabbitMQ Manager"
version: 1.0.0
description: "Inspect RabbitMQ exchanges (direct, topic, fanout), queues, and binding routing keys"
author: "AURA Team"
category: data
tags:
  - "rabbitmq"
  - "amqp"
  - "rabbitmq exchange"
  - "queue binding"
triggers:
  - "rabbitmq"
  - "amqp"
  - "rabbitmq exchange"
  - "queue binding"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# RabbitMQ Manager

Inspect RabbitMQ exchanges (direct, topic, fanout), queues, and binding routing keys

## Metadata

- **ID:** `rabbitmq-manager`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `rabbitmq`
- `amqp`
- `rabbitmq exchange`
- `queue binding`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rabbitmq-manager', {
  /* input parameters */
});
```
