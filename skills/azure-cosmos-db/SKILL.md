---
id: azure-cosmos-db
name: "Azure Cosmos DB"
version: 1.0.0
description: "Inspect Cosmos DB SQL/Mongo APIs, partition keys, request units (RU/s), and replication"
author: "AURA Team"
category: data
tags:
  - "cosmos db"
  - "azure cosmos"
  - "request units"
  - "cosmos partition"
triggers:
  - "cosmos db"
  - "azure cosmos"
  - "request units"
  - "cosmos partition"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure Cosmos DB

Inspect Cosmos DB SQL/Mongo APIs, partition keys, request units (RU/s), and replication

## Metadata

- **ID:** `azure-cosmos-db`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cosmos db`
- `azure cosmos`
- `request units`
- `cosmos partition`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-cosmos-db', {
  /* input parameters */
});
```
