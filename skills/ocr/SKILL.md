---
id: ocr
name: "OCR"
version: 1.0.0
description: "Extract textual content from images and scans via OCR adapters"
author: "AURA Team"
category: documents
tags:
  - "ocr"
  - "read image text"
  - "extract text"
  - "scan document"
triggers:
  - "ocr"
  - "read image text"
  - "extract text"
  - "scan document"
permissions:
  - type: api
    scope: [ocr]
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# OCR

Extract textual content from images and scans via OCR adapters

## Metadata

- **ID:** `ocr`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `ocr`)
- `filesystem` (scope: `read`)

## Triggers

- `ocr`
- `read image text`
- `extract text`
- `scan document`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ocr', {
  /* input parameters */
});
```
