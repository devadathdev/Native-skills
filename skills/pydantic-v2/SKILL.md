---
id: pydantic-v2
name: "Pydantic v2 Validator"
version: 1.0.0
description: "Inspect Pydantic v2 BaseModel schemas, Field constraints, and Rust core performance"
author: "AURA Team"
category: development
tags:
  - "pydantic"
  - "pydantic v2"
  - "basemodel"
  - "data validation python"
triggers:
  - "pydantic"
  - "pydantic v2"
  - "basemodel"
  - "data validation python"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Pydantic v2 Validator

Inspect Pydantic v2 BaseModel schemas, Field constraints, and Rust core performance

## Metadata

- **ID:** `pydantic-v2`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `pydantic`
- `pydantic v2`
- `basemodel`
- `data validation python`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pydantic-v2', {
  /* input parameters */
});
```
