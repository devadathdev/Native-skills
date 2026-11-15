---
id: filesystem
name: "Filesystem"
version: 1.0.0
description: "Secure workspace filesystem read, write, and directory operations"
author: "AURA Team"
category: system
tags:
  - "file"
  - "directory"
  - "fs"
  - "workspace"
  - "io"
triggers:
  - "file"
  - "folder"
  - "directory"
  - "workspace"
  - "save file"
  - "read file"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Filesystem

Secure workspace filesystem read, write, and directory operations

## Metadata

- **ID:** `filesystem`
- **Category:** `system`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `file`
- `folder`
- `directory`
- `workspace`
- `save file`
- `read file`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('filesystem', {
  /* input parameters */
});
```
