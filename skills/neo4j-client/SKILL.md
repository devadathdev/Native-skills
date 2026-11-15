---
id: neo4j-client
name: "Neo4j Graph Client"
version: 1.0.0
description: "Validate Neo4j Cypher queries, graph path traversals, relationship properties, and node labels"
author: "AURA Team"
category: data
tags:
  - "neo4j"
  - "cypher"
  - "graph database"
  - "graph traversal"
  - "nodes and relationships"
triggers:
  - "neo4j"
  - "cypher"
  - "graph database"
  - "graph traversal"
  - "nodes and relationships"
permissions:
  - type: database
    scope: [graph]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Neo4j Graph Client

Validate Neo4j Cypher queries, graph path traversals, relationship properties, and node labels

## Metadata

- **ID:** `neo4j-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `graph`)

## Triggers

- `neo4j`
- `cypher`
- `graph database`
- `graph traversal`
- `nodes and relationships`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('neo4j-client', {
  /* input parameters */
});
```
