---
id: gcp-pubsub-manager
name: "Google Cloud Pub/Sub"
version: 1.0.0
description: "Inspect Pub/Sub topics, push/pull subscriptions, ack deadlines, and schema definitions"
author: "AURA Team"
category: integration
tags:
  - "gcp pubsub"
  - "cloud pubsub"
  - "pubsub subscription"
  - "pubsub topic"
triggers:
  - "gcp pubsub"
  - "cloud pubsub"
  - "pubsub subscription"
  - "pubsub topic"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google Cloud Pub/Sub

Inspect Pub/Sub topics, push/pull subscriptions, ack deadlines, and schema definitions

## Metadata

- **ID:** `gcp-pubsub-manager`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gcp pubsub`
- `cloud pubsub`
- `pubsub subscription`
- `pubsub topic`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-pubsub-manager', {
  /* input parameters */
});
```
