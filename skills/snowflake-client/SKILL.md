---
id: snowflake-client
name: "Snowflake Client"
version: 1.0.0
description: "Formulate Snowflake data warehouse queries, manage virtual warehouses, stages, and RBAC grants"
author: "AURA Team"
category: data
tags:
  - "snowflake"
  - "data warehouse"
  - "virtual warehouse"
  - "snowflake sql"
  - "snowpipe"
triggers:
  - "snowflake"
  - "data warehouse"
  - "virtual warehouse"
  - "snowflake sql"
  - "snowpipe"
permissions:
  - type: network
    scope: [snowflake]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Snowflake Client

Formulate Snowflake data warehouse queries, manage virtual warehouses, stages, and RBAC grants

## Metadata

- **ID:** `snowflake-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `snowflake`)

## Triggers

- `snowflake`
- `data warehouse`
- `virtual warehouse`
- `snowflake sql`
- `snowpipe`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('snowflake-client', {
  /* input parameters */
});
```
