---
id: activemq-client
name: "Apache ActiveMQ"
version: 1.0.0
description: "Inspect ActiveMQ JMS queues, topics, message selectors, and persistence stores"
author: "AURA Team"
category: data
tags:
  - "activemq"
  - "jms queue"
  - "activemq topic"
  - "message broker"
triggers:
  - "activemq"
  - "jms queue"
  - "activemq topic"
  - "message broker"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache ActiveMQ

Inspect ActiveMQ JMS queues, topics, message selectors, and persistence stores

## Metadata

- **ID:** `activemq-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `activemq`
- `jms queue`
- `activemq topic`
- `message broker`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('activemq-client', {
  /* input parameters */
});
```
