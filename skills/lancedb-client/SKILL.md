---
id: lancedb-client
name: "LanceDB Client"
version: 1.0.0
description: "Inspect Lance columnar format vector tables, zero-copy reads, and disk storage"
author: "AURA Team"
category: ai
tags:
  - "lancedb"
  - "lance format"
  - "serverless vector"
  - "vector table"
triggers:
  - "lancedb"
  - "lance format"
  - "serverless vector"
  - "vector table"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# LanceDB Client

Inspect Lance columnar format vector tables, zero-copy reads, and disk storage

## Metadata

- **ID:** `lancedb-client`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `lancedb`
- `lance format`
- `serverless vector`
- `vector table`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('lancedb-client', {
  /* input parameters */
});
```
