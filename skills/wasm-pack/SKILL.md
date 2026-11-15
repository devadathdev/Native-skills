---
id: wasm-pack
name: "WebAssembly Wasm-Pack"
version: 1.0.0
description: "Package and optimize Rust/C/C++ into WebAssembly WASM binaries and bindings"
author: "AURA Team"
category: development
tags:
  - "wasm"
  - "wasm pack"
  - "webassembly"
  - "wasm bindgen"
triggers:
  - "wasm"
  - "wasm pack"
  - "webassembly"
  - "wasm bindgen"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# WebAssembly Wasm-Pack

Package and optimize Rust/C/C++ into WebAssembly WASM binaries and bindings

## Metadata

- **ID:** `wasm-pack`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `wasm`
- `wasm pack`
- `webassembly`
- `wasm bindgen`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('wasm-pack', {
  /* input parameters */
});
```
