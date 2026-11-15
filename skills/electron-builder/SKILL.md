---
id: electron-builder
name: "Electron Builder"
version: 1.0.0
description: "Inspect Electron main/renderer processes, contextIsolation, and preload scripts"
author: "AURA Team"
category: development
tags:
  - "electron"
  - "preload script"
  - "electron main"
  - "desktop app"
triggers:
  - "electron"
  - "preload script"
  - "electron main"
  - "desktop app"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Electron Builder

Inspect Electron main/renderer processes, contextIsolation, and preload scripts

## Metadata

- **ID:** `electron-builder`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `electron`
- `preload script`
- `electron main`
- `desktop app`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('electron-builder', {
  /* input parameters */
});
```
