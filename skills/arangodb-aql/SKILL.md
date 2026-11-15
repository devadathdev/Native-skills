---
id: arangodb-aql
name: "ArangoDB AQL"
version: 1.0.0
description: "Inspect multi-model AQL queries (document, graph, key-value) and collections"
author: "AURA Team"
category: data
tags:
  - "arangodb"
  - "aql"
  - "multi model db"
  - "arango graph"
triggers:
  - "arangodb"
  - "aql"
  - "multi model db"
  - "arango graph"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ArangoDB AQL

Inspect multi-model AQL queries (document, graph, key-value) and collections

## Metadata

- **ID:** `arangodb-aql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `arangodb`
- `aql`
- `multi model db`
- `arango graph`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('arangodb-aql', {
  /* input parameters */
});
```
