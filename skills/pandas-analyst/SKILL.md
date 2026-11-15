---
id: pandas-analyst
name: "Pandas Analyst"
version: 1.0.0
description: "Inspect Pandas DataFrame operations, groupby aggregations, merge joins, and indexing"
author: "AURA Team"
category: data
tags:
  - "pandas"
  - "dataframe"
  - "groupby"
  - "dataframe analysis"
triggers:
  - "pandas"
  - "dataframe"
  - "groupby"
  - "dataframe analysis"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Pandas Analyst

Inspect Pandas DataFrame operations, groupby aggregations, merge joins, and indexing

## Metadata

- **ID:** `pandas-analyst`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `pandas`
- `dataframe`
- `groupby`
- `dataframe analysis`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pandas-analyst', {
  /* input parameters */
});
```
