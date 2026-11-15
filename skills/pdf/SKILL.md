---
id: pdf
name: "PDF Processing"
version: 1.0.0
description: "Extract text, inspect metadata, and manipulate PDF documents"
author: "AURA Team"
category: documents
tags:
  - "pdf"
  - "extract pdf"
  - "merge pdf"
  - "read pdf"
  - "pdf document"
triggers:
  - "pdf"
  - "extract pdf"
  - "merge pdf"
  - "read pdf"
  - "pdf document"
permissions:
  - type: shell
    scope: [python, node]
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# PDF Processing

Extract text, inspect metadata, and manipulate PDF documents

## Metadata

- **ID:** `pdf`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `python, node`)
- `filesystem` (scope: `read`)

## Triggers

- `pdf`
- `extract pdf`
- `merge pdf`
- `read pdf`
- `pdf document`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pdf', {
  /* input parameters */
});
```
