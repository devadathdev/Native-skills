---
id: memgraph-cypher
name: "Memgraph Cypher"
version: 1.0.0
description: "Inspect in-memory real-time graph computation, Cypher queries, and streams"
author: "AURA Team"
category: data
tags:
  - "memgraph"
  - "in memory graph"
  - "streaming graph"
  - "cypher stream"
triggers:
  - "memgraph"
  - "in memory graph"
  - "streaming graph"
  - "cypher stream"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Memgraph Cypher

Inspect in-memory real-time graph computation, Cypher queries, and streams

## Metadata

- **ID:** `memgraph-cypher`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `memgraph`
- `in memory graph`
- `streaming graph`
- `cypher stream`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('memgraph-cypher', {
  /* input parameters */
});
```
