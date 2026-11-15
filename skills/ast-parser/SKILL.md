---
id: ast-parser
name: "AST Parser"
version: 1.0.0
description: "Extract syntax trees, function signatures, imports, and exports from source code"
author: "AURA Team"
category: development
tags:
  - "ast"
  - "syntax tree"
  - "parse code"
  - "extract functions"
  - "ast parser"
  - "code structure"
triggers:
  - "ast"
  - "syntax tree"
  - "parse code"
  - "extract functions"
  - "ast parser"
  - "code structure"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# AST Parser

Extract syntax trees, function signatures, imports, and exports from source code

## Metadata

- **ID:** `ast-parser`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `ast`
- `syntax tree`
- `parse code`
- `extract functions`
- `ast parser`
- `code structure`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ast-parser', {
  /* input parameters */
});
```
