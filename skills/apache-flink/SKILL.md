---
id: apache-flink
name: "Apache Flink"
version: 1.0.0
description: "Inspect Flink stateful streaming jobs, checkpoint intervals, savepoints, and watermarks"
author: "AURA Team"
category: data
tags:
  - "flink"
  - "apache flink"
  - "streaming job"
  - "flink savepoint"
triggers:
  - "flink"
  - "apache flink"
  - "streaming job"
  - "flink savepoint"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Flink

Inspect Flink stateful streaming jobs, checkpoint intervals, savepoints, and watermarks

## Metadata

- **ID:** `apache-flink`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `flink`
- `apache flink`
- `streaming job`
- `flink savepoint`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-flink', {
  /* input parameters */
});
```
