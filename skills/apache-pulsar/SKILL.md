---
id: apache-pulsar
name: "Apache Pulsar"
version: 1.0.0
description: "Inspect Pulsar multi-tenant topics, geo-replication, tiered storage, and functions"
author: "AURA Team"
category: data
tags:
  - "pulsar"
  - "apache pulsar"
  - "pulsar topic"
  - "geo replication"
triggers:
  - "pulsar"
  - "apache pulsar"
  - "pulsar topic"
  - "geo replication"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Pulsar

Inspect Pulsar multi-tenant topics, geo-replication, tiered storage, and functions

## Metadata

- **ID:** `apache-pulsar`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `pulsar`
- `apache pulsar`
- `pulsar topic`
- `geo replication`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-pulsar', {
  /* input parameters */
});
```
