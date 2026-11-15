---
id: dremio-lakehouse
name: "Dremio Lakehouse"
version: 1.0.0
description: "Inspect Dremio Apache Arrow-powered reflections, SQL semantic layers, and datasets"
author: "AURA Team"
category: data
tags:
  - "dremio"
  - "data lakehouse"
  - "data reflection"
  - "arrow flight"
triggers:
  - "dremio"
  - "data lakehouse"
  - "data reflection"
  - "arrow flight"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dremio Lakehouse

Inspect Dremio Apache Arrow-powered reflections, SQL semantic layers, and datasets

## Metadata

- **ID:** `dremio-lakehouse`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dremio`
- `data lakehouse`
- `data reflection`
- `arrow flight`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dremio-lakehouse', {
  /* input parameters */
});
```
