---
id: dgraph-graphql
name: "Dgraph Graph DB"
version: 1.0.0
description: "Inspect native GraphQL Dgraph schemas, mutations, and BadgerDB persistence"
author: "AURA Team"
category: data
tags:
  - "dgraph"
  - "dgraph graphql"
  - "badgerdb"
  - "native graph"
triggers:
  - "dgraph"
  - "dgraph graphql"
  - "badgerdb"
  - "native graph"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dgraph Graph DB

Inspect native GraphQL Dgraph schemas, mutations, and BadgerDB persistence

## Metadata

- **ID:** `dgraph-graphql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dgraph`
- `dgraph graphql`
- `badgerdb`
- `native graph`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dgraph-graphql', {
  /* input parameters */
});
```
