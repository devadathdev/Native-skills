---
id: mariadb-columnstore
name: "MariaDB ColumnStore"
version: 1.0.0
description: "Inspect MariaDB columnar storage partitions, bulk write buffers, and queries"
author: "AURA Team"
category: data
tags:
  - "mariadb"
  - "columnstore"
  - "mariadb olap"
  - "columnar table"
triggers:
  - "mariadb"
  - "columnstore"
  - "mariadb olap"
  - "columnar table"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# MariaDB ColumnStore

Inspect MariaDB columnar storage partitions, bulk write buffers, and queries

## Metadata

- **ID:** `mariadb-columnstore`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `mariadb`
- `columnstore`
- `mariadb olap`
- `columnar table`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('mariadb-columnstore', {
  /* input parameters */
});
```
