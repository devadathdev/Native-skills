---
id: epub-builder
name: "EPUB Builder"
version: 1.0.0
description: "Validate EPUB electronic book structure, chapter spine order, and metadata packages"
author: "AURA Team"
category: documents
tags:
  - "epub"
  - "ebook"
  - "epub builder"
  - "mobi"
  - "digital book"
triggers:
  - "epub"
  - "ebook"
  - "epub builder"
  - "mobi"
  - "digital book"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# EPUB Builder

Validate EPUB electronic book structure, chapter spine order, and metadata packages

## Metadata

- **ID:** `epub-builder`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `epub`
- `ebook`
- `epub builder`
- `mobi`
- `digital book`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('epub-builder', {
  /* input parameters */
});
```
