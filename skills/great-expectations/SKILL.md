---
id: great-expectations
name: "Great Expectations"
version: 1.0.0
description: "Inspect Great Expectations suite assertions, validation operators, and data docs"
author: "AURA Team"
category: data
tags:
  - "great expectations"
  - "data quality"
  - "expectation suite"
  - "data assertion"
triggers:
  - "great expectations"
  - "data quality"
  - "expectation suite"
  - "data assertion"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Great Expectations

Inspect Great Expectations suite assertions, validation operators, and data docs

## Metadata

- **ID:** `great-expectations`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `great expectations`
- `data quality`
- `expectation suite`
- `data assertion`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('great-expectations', {
  /* input parameters */
});
```
