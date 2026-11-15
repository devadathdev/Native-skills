---
id: tanstack-table
name: "TanStack Table"
version: 1.0.0
description: "Inspect headless table configurations, column definitions, and virtualized rows"
author: "AURA Team"
category: development
tags:
  - "tanstack table"
  - "react table"
  - "headless table"
  - "virtual table"
triggers:
  - "tanstack table"
  - "react table"
  - "headless table"
  - "virtual table"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TanStack Table

Inspect headless table configurations, column definitions, and virtualized rows

## Metadata

- **ID:** `tanstack-table`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `tanstack table`
- `react table`
- `headless table`
- `virtual table`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tanstack-table', {
  /* input parameters */
});
```
