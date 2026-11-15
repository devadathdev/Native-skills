---
id: rust-cargo
name: "Rust Cargo Manager"
version: 1.0.0
description: "Manage Rust crates, Cargo.toml dependencies, and release builds"
author: "AURA Team"
category: development
tags:
  - "cargo"
  - "rust build"
  - "crates"
  - "rustc"
triggers:
  - "cargo"
  - "rust build"
  - "crates"
  - "rustc"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Rust Cargo Manager

Manage Rust crates, Cargo.toml dependencies, and release builds

## Metadata

- **ID:** `rust-cargo`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `cargo`
- `rust build`
- `crates`
- `rustc`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rust-cargo', {
  /* input parameters */
});
```
