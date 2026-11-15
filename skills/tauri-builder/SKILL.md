---
id: tauri-builder
name: "Tauri Builder"
version: 1.0.0
description: "Inspect Tauri tauri.conf.json configs, Rust command handlers, and security allowlists"
author: "AURA Team"
category: development
tags:
  - "tauri"
  - "tauri conf"
  - "rust desktop"
  - "tauri app"
triggers:
  - "tauri"
  - "tauri conf"
  - "rust desktop"
  - "tauri app"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Tauri Builder

Inspect Tauri tauri.conf.json configs, Rust command handlers, and security allowlists

## Metadata

- **ID:** `tauri-builder`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `tauri`
- `tauri conf`
- `rust desktop`
- `tauri app`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tauri-builder', {
  /* input parameters */
});
```
