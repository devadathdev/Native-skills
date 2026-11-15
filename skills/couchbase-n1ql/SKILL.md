---
id: couchbase-n1ql
name: "Couchbase N1QL"
version: 1.0.0
description: "Inspect Couchbase JSON document buckets, N1QL SQL queries, and GSI indexes"
author: "AURA Team"
category: data
tags:
  - "couchbase"
  - "n1ql"
  - "couchbase bucket"
  - "document store"
triggers:
  - "couchbase"
  - "n1ql"
  - "couchbase bucket"
  - "document store"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Couchbase N1QL

Inspect Couchbase JSON document buckets, N1QL SQL queries, and GSI indexes

## Metadata

- **ID:** `couchbase-n1ql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `couchbase`
- `n1ql`
- `couchbase bucket`
- `document store`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('couchbase-n1ql', {
  /* input parameters */
});
```
