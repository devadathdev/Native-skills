---
id: teradata-client
name: "Teradata Client"
version: 1.0.0
description: "Inspect Teradata enterprise analytical data warehouse queries and AMP distribution"
author: "AURA Team"
category: data
tags:
  - "teradata"
  - "teradata sql"
  - "enterprise edw"
  - "amp hash"
triggers:
  - "teradata"
  - "teradata sql"
  - "enterprise edw"
  - "amp hash"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Teradata Client

Inspect Teradata enterprise analytical data warehouse queries and AMP distribution

## Metadata

- **ID:** `teradata-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `teradata`
- `teradata sql`
- `enterprise edw`
- `amp hash`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('teradata-client', {
  /* input parameters */
});
```
