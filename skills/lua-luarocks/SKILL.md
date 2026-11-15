---
id: lua-luarocks
name: "LuaRocks Manager"
version: 1.0.0
description: "Inspect rockspec package files, Lua runtime modules, and LuaJIT bindings"
author: "AURA Team"
category: development
tags:
  - "luarocks"
  - "lua modules"
  - "rockspec"
  - "lua jit"
triggers:
  - "luarocks"
  - "lua modules"
  - "rockspec"
  - "lua jit"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# LuaRocks Manager

Inspect rockspec package files, Lua runtime modules, and LuaJIT bindings

## Metadata

- **ID:** `lua-luarocks`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `luarocks`
- `lua modules`
- `rockspec`
- `lua jit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('lua-luarocks', {
  /* input parameters */
});
```
