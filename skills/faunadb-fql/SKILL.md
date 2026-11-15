---
id: faunadb-fql
name: "FaunaDB FQL"
version: 1.0.0
description: "Inspect Fauna distributed document collections, temporal queries, and indexes"
author: "AURA Team"
category: data
tags:
  - "faunadb"
  - "fql"
  - "serverless database"
  - "fauna collections"
triggers:
  - "faunadb"
  - "fql"
  - "serverless database"
  - "fauna collections"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# FaunaDB FQL

Inspect Fauna distributed document collections, temporal queries, and indexes

## Metadata

- **ID:** `faunadb-fql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `faunadb`
- `fql`
- `serverless database`
- `fauna collections`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('faunadb-fql', {
  /* input parameters */
});
```
