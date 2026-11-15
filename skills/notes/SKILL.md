---
id: notes
name: "Notes"
version: 1.0.0
description: "Create, organize, and search structured notes in the workspace"
author: "AURA Team"
category: productivity
tags:
  - "note"
  - "notes"
  - "remember this"
  - "take note"
  - "save note"
triggers:
  - "note"
  - "notes"
  - "remember this"
  - "take note"
  - "save note"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Notes

Create, organize, and search structured notes in the workspace

## Metadata

- **ID:** `notes`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `note`
- `notes`
- `remember this`
- `take note`
- `save note`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('notes', {
  /* input parameters */
});
```
