---
id: mongodb-admin
name: "MongoDB Admin"
version: 1.0.0
description: "Formulate MongoDB aggregation pipelines, inspect collection indexes, and format BSON queries"
author: "AURA Team"
category: data
tags:
  - "mongodb"
  - "mongo"
  - "aggregation pipeline"
  - "nosql"
  - "bson"
  - "document db"
triggers:
  - "mongodb"
  - "mongo"
  - "aggregation pipeline"
  - "nosql"
  - "bson"
  - "document db"
permissions:
  - type: database
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# MongoDB Admin

Formulate MongoDB aggregation pipelines, inspect collection indexes, and format BSON queries

## Metadata

- **ID:** `mongodb-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `read`)

## Triggers

- `mongodb`
- `mongo`
- `aggregation pipeline`
- `nosql`
- `bson`
- `document db`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('mongodb-admin', {
  /* input parameters */
});
```
