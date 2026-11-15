---
id: azure-service-bus
name: "Azure Service Bus"
version: 1.0.0
description: "Inspect Service Bus queues, topics, subscriptions, and dead-letter messages"
author: "AURA Team"
category: integration
tags:
  - "azure service bus"
  - "service bus queue"
  - "service bus topic"
  - "dead letter"
triggers:
  - "azure service bus"
  - "service bus queue"
  - "service bus topic"
  - "dead letter"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure Service Bus

Inspect Service Bus queues, topics, subscriptions, and dead-letter messages

## Metadata

- **ID:** `azure-service-bus`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure service bus`
- `service bus queue`
- `service bus topic`
- `dead letter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-service-bus', {
  /* input parameters */
});
```
