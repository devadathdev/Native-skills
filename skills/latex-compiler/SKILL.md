---
id: latex-compiler
name: "LaTeX Compiler"
version: 1.0.0
description: "Validate LaTeX source code, render mathematical formulas, and assemble document packages"
author: "AURA Team"
category: documents
tags:
  - "latex"
  - "tex"
  - "compile latex"
  - "math formula"
  - "latex equation"
  - "bibtex"
triggers:
  - "latex"
  - "tex"
  - "compile latex"
  - "math formula"
  - "latex equation"
  - "bibtex"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# LaTeX Compiler

Validate LaTeX source code, render mathematical formulas, and assemble document packages

## Metadata

- **ID:** `latex-compiler`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `latex`
- `tex`
- `compile latex`
- `math formula`
- `latex equation`
- `bibtex`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('latex-compiler', {
  /* input parameters */
});
```
