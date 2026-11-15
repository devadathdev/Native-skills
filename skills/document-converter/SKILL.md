---
id: document-converter
name: "Document Converter"
version: 1.0.0
description: "Convert documents between Markdown, HTML, DOCX, and RTF formats"
author: "AURA Team"
category: documents
tags:
  - "convert document"
  - "docx"
  - "markdown"
  - "rtf"
  - "document converter"
triggers:
  - "convert document"
  - "docx"
  - "markdown"
  - "rtf"
  - "document converter"
permissions:
  - type: shell
    scope: [pandoc, node]
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Document Converter

Convert documents between Markdown, HTML, DOCX, and RTF formats

## Metadata

- **ID:** `document-converter`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `pandoc, node`)
- `filesystem` (scope: `read, write`)

## Triggers

- `convert document`
- `docx`
- `markdown`
- `rtf`
- `document converter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('document-converter', {
  /* input parameters */
});
```
