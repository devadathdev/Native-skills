---
id: cassandra-cql
name: "Apache Cassandra CQL"
version: 1.0.0
description: "Inspect Cassandra keyspaces, wide-column clustering keys, and consistency levels"
author: "AURA Team"
category: data
tags:
  - "cassandra"
  - "cql"
  - "keyspace"
  - "wide column"
triggers:
  - "cassandra"
  - "cql"
  - "keyspace"
  - "wide column"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Cassandra CQL

Inspect Cassandra keyspaces, wide-column clustering keys, and consistency levels

## Metadata

- **ID:** `cassandra-cql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `cassandra`
- `cql`
- `keyspace`
- `wide column`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cassandra-cql', {
  /* input parameters */
});
```
