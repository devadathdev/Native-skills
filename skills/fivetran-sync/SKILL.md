---
id: fivetran-sync
name: "Fivetran Sync Inspector"
version: 1.0.0
description: "Inspect Fivetran data connector sync status, schema transformations, and logs"
author: "AURA Team"
category: data
tags:
  - "fivetran"
  - "fivetran sync"
  - "fivetran connector"
  - "etl sync"
triggers:
  - "fivetran"
  - "fivetran sync"
  - "fivetran connector"
  - "etl sync"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Fivetran Sync Inspector

Inspect Fivetran data connector sync status, schema transformations, and logs

## Metadata

- **ID:** `fivetran-sync`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `fivetran`
- `fivetran sync`
- `fivetran connector`
- `etl sync`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('fivetran-sync', {
  /* input parameters */
});
```
