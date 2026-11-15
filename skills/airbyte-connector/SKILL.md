---
id: airbyte-connector
name: "Airbyte Connector"
version: 1.0.0
description: "Inspect Airbyte source/destination connection specs, sync modes, and catalogs"
author: "AURA Team"
category: data
tags:
  - "airbyte"
  - "airbyte connector"
  - "data integration"
  - "sync mode"
triggers:
  - "airbyte"
  - "airbyte connector"
  - "data integration"
  - "sync mode"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Airbyte Connector

Inspect Airbyte source/destination connection specs, sync modes, and catalogs

## Metadata

- **ID:** `airbyte-connector`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `airbyte`
- `airbyte connector`
- `data integration`
- `sync mode`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('airbyte-connector', {
  /* input parameters */
});
```
