---
id: soda-core
name: "Soda Core Quality"
version: 1.0.0
description: "Inspect SodaCL (Soda Checks Language) data quality checks and anomaly metrics"
author: "AURA Team"
category: data
tags:
  - "soda"
  - "soda core"
  - "sodacl"
  - "data validation check"
triggers:
  - "soda"
  - "soda core"
  - "sodacl"
  - "data validation check"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Soda Core Quality

Inspect SodaCL (Soda Checks Language) data quality checks and anomaly metrics

## Metadata

- **ID:** `soda-core`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `soda`
- `soda core`
- `sodacl`
- `data validation check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('soda-core', {
  /* input parameters */
});
```
