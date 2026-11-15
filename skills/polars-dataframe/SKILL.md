---
id: polars-dataframe
name: "Polars DataFrame"
version: 1.0.0
description: "Inspect ultra-fast multi-threaded Rust Polars lazy frames and expressions"
author: "AURA Team"
category: data
tags:
  - "polars"
  - "lazyframe"
  - "dataframe query"
  - "rust dataframe"
triggers:
  - "polars"
  - "lazyframe"
  - "dataframe query"
  - "rust dataframe"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Polars DataFrame

Inspect ultra-fast multi-threaded Rust Polars lazy frames and expressions

## Metadata

- **ID:** `polars-dataframe`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `polars`
- `lazyframe`
- `dataframe query`
- `rust dataframe`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('polars-dataframe', {
  /* input parameters */
});
```
