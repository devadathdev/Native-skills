---
id: kafka-connect
name: "Kafka Connect"
version: 1.0.0
description: "Inspect Kafka Connect source and sink connector configurations, transforms, and tasks"
author: "AURA Team"
category: data
tags:
  - "kafka connect"
  - "sink connector"
  - "source connector"
  - "smt transform"
triggers:
  - "kafka connect"
  - "sink connector"
  - "source connector"
  - "smt transform"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kafka Connect

Inspect Kafka Connect source and sink connector configurations, transforms, and tasks

## Metadata

- **ID:** `kafka-connect`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `kafka connect`
- `sink connector`
- `source connector`
- `smt transform`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kafka-connect', {
  /* input parameters */
});
```
