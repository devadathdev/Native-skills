---
id: stream-processor
name: "Stream Processor"
version: 1.0.0
description: "Inspect event streaming architectures (Kafka, Pub/Sub), topic partitions, and consumer lag"
author: "AURA Team"
category: data
tags:
  - "stream"
  - "kafka"
  - "event stream"
  - "pubsub"
  - "message queue"
  - "topic"
  - "consumer lag"
triggers:
  - "stream"
  - "kafka"
  - "event stream"
  - "pubsub"
  - "message queue"
  - "topic"
  - "consumer lag"
permissions:
  - type: network
    scope: [stream]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Stream Processor

Inspect event streaming architectures (Kafka, Pub/Sub), topic partitions, and consumer lag

## Metadata

- **ID:** `stream-processor`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `stream`)

## Triggers

- `stream`
- `kafka`
- `event stream`
- `pubsub`
- `message queue`
- `topic`
- `consumer lag`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('stream-processor', {
  /* input parameters */
});
```
