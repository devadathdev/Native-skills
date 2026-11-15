---
id: dynamodb-client
name: "DynamoDB Client"
version: 1.0.0
description: "Design DynamoDB partition/sort key schemas, compute Read/Write Capacity Units, and plan GSIs"
author: "AURA Team"
category: data
tags:
  - "dynamodb"
  - "dynamo"
  - "partition key"
  - "gsi"
  - "rcu"
  - "wcu"
  - "nosql keyvalue"
triggers:
  - "dynamodb"
  - "dynamo"
  - "partition key"
  - "gsi"
  - "rcu"
  - "wcu"
  - "nosql keyvalue"
permissions:
  - type: api
    scope: [aws]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# DynamoDB Client

Design DynamoDB partition/sort key schemas, compute Read/Write Capacity Units, and plan GSIs

## Metadata

- **ID:** `dynamodb-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `aws`)

## Triggers

- `dynamodb`
- `dynamo`
- `partition key`
- `gsi`
- `rcu`
- `wcu`
- `nosql keyvalue`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dynamodb-client', {
  /* input parameters */
});
```
