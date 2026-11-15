---
id: apache-iceberg
name: "Apache Iceberg"
version: 1.0.0
description: "Inspect Iceberg table snapshots, manifest lists, partition evolution, and schemas"
author: "AURA Team"
category: data
tags:
  - "iceberg"
  - "apache iceberg"
  - "table format"
  - "manifest list"
triggers:
  - "iceberg"
  - "apache iceberg"
  - "table format"
  - "manifest list"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Iceberg

Inspect Iceberg table snapshots, manifest lists, partition evolution, and schemas

## Metadata

- **ID:** `apache-iceberg`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `iceberg`
- `apache iceberg`
- `table format`
- `manifest list`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-iceberg', {
  /* input parameters */
});
```
