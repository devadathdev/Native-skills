---
id: dataform-elt
name: "Google Dataform"
version: 1.0.0
description: "Inspect Dataform SQLX files, table definitions, assertions, and dependencies"
author: "AURA Team"
category: data
tags:
  - "dataform"
  - "sqlx"
  - "dataform table"
  - "bigquery dataform"
triggers:
  - "dataform"
  - "sqlx"
  - "dataform table"
  - "bigquery dataform"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google Dataform

Inspect Dataform SQLX files, table definitions, assertions, and dependencies

## Metadata

- **ID:** `dataform-elt`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dataform`
- `sqlx`
- `dataform table`
- `bigquery dataform`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dataform-elt', {
  /* input parameters */
});
```
