---
id: toml-processor
name: "TOML Processor"
version: 1.0.0
description: "Parse and validate TOML files (Cargo.toml, pyproject.toml), arrays of tables, and keys"
author: "AURA Team"
category: documents
tags:
  - "toml"
  - "pyproject toml"
  - "cargo toml"
  - "parse toml"
  - "toml validator"
triggers:
  - "toml"
  - "pyproject toml"
  - "cargo toml"
  - "parse toml"
  - "toml validator"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# TOML Processor

Parse and validate TOML files (Cargo.toml, pyproject.toml), arrays of tables, and keys

## Metadata

- **ID:** `toml-processor`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `toml`
- `pyproject toml`
- `cargo toml`
- `parse toml`
- `toml validator`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('toml-processor', {
  /* input parameters */
});
```
