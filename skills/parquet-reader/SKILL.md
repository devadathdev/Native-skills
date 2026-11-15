---
id: parquet-reader
name: "Parquet Reader"
version: 1.0.0
description: "Inspect Apache Parquet columnar metadata, row groups, compression codecs, and schemas"
author: "AURA Team"
category: data
tags:
  - "parquet"
  - "columnar"
  - "parquet reader"
  - "columnar data"
  - "snappy"
  - "row groups"
triggers:
  - "parquet"
  - "columnar"
  - "parquet reader"
  - "columnar data"
  - "snappy"
  - "row groups"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Parquet Reader

Inspect Apache Parquet columnar metadata, row groups, compression codecs, and schemas

## Metadata

- **ID:** `parquet-reader`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `parquet`
- `columnar`
- `parquet reader`
- `columnar data`
- `snappy`
- `row groups`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('parquet-reader', {
  /* input parameters */
});
```
