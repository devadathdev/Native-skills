---
id: markdown-linter
name: "Markdown Linter"
version: 1.0.0
description: "Lint markdown files for heading hierarchy, link validation, and code-block formatting"
author: "AURA Team"
category: documents
tags:
  - "lint markdown"
  - "format markdown"
  - "markdown check"
  - "broken links"
  - "markdown lint"
triggers:
  - "lint markdown"
  - "format markdown"
  - "markdown check"
  - "broken links"
  - "markdown lint"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Markdown Linter

Lint markdown files for heading hierarchy, link validation, and code-block formatting

## Metadata

- **ID:** `markdown-linter`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `lint markdown`
- `format markdown`
- `markdown check`
- `broken links`
- `markdown lint`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('markdown-linter', {
  /* input parameters */
});
```
