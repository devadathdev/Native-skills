---
id: kafka-admin
name: "Apache Kafka Admin"
version: 1.0.0
description: "Inspect Kafka broker cluster health, topic configurations, and replication factors"
author: "AURA Team"
category: data
tags:
  - "kafka admin"
  - "kafka cluster"
  - "topic config"
  - "kafka metadata"
triggers:
  - "kafka admin"
  - "kafka cluster"
  - "topic config"
  - "kafka metadata"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Kafka Admin

Inspect Kafka broker cluster health, topic configurations, and replication factors

## Metadata

- **ID:** `kafka-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `kafka admin`
- `kafka cluster`
- `topic config`
- `kafka metadata`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kafka-admin', {
  /* input parameters */
});
```
