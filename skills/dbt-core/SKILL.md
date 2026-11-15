---
id: dbt-core
name: "dbt Core Models"
version: 1.0.0
description: "Inspect dbt project models, refs, sources, seeds, snapshots, and schema tests"
author: "AURA Team"
category: data
tags:
  - "dbt"
  - "dbt run"
  - "dbt model"
  - "dbt test"
  - "data build tool"
triggers:
  - "dbt"
  - "dbt run"
  - "dbt model"
  - "dbt test"
  - "data build tool"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# dbt Core Models

Inspect dbt project models, refs, sources, seeds, snapshots, and schema tests

## Metadata

- **ID:** `dbt-core`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dbt`
- `dbt run`
- `dbt model`
- `dbt test`
- `data build tool`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dbt-core', {
  /* input parameters */
});
```
