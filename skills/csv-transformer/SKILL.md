---
id: csv-transformer
name: "CSV Transformer"
version: 1.0.0
description: "Transform CSV delimiters, rename header columns, filter row predicates, and deduplicate entries"
author: "AURA Team"
category: documents
tags:
  - "csv transform"
  - "csv delimiter"
  - "tsv"
  - "filter csv"
  - "clean csv"
  - "deduplicate csv"
triggers:
  - "csv transform"
  - "csv delimiter"
  - "tsv"
  - "filter csv"
  - "clean csv"
  - "deduplicate csv"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# CSV Transformer

Transform CSV delimiters, rename header columns, filter row predicates, and deduplicate entries

## Metadata

- **ID:** `csv-transformer`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `csv transform`
- `csv delimiter`
- `tsv`
- `filter csv`
- `clean csv`
- `deduplicate csv`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('csv-transformer', {
  /* input parameters */
});
```
