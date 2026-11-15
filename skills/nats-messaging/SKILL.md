---
id: nats-messaging
name: "NATS Messaging"
version: 1.0.0
description: "Inspect NATS core pubsub, JetStream persistent streams, consumer groups, and kv stores"
author: "AURA Team"
category: data
tags:
  - "nats"
  - "jetstream"
  - "nats pubsub"
  - "nats kv"
triggers:
  - "nats"
  - "jetstream"
  - "nats pubsub"
  - "nats kv"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# NATS Messaging

Inspect NATS core pubsub, JetStream persistent streams, consumer groups, and kv stores

## Metadata

- **ID:** `nats-messaging`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `nats`
- `jetstream`
- `nats pubsub`
- `nats kv`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('nats-messaging', {
  /* input parameters */
});
```
