---
id: elixir-mix
name: "Elixir Mix Manager"
version: 1.0.0
description: "Inspect mix.exs project dependencies, OTP application trees, and Hex packages"
author: "AURA Team"
category: development
tags:
  - "mix"
  - "elixir mix"
  - "mix compile"
  - "hex package"
triggers:
  - "mix"
  - "elixir mix"
  - "mix compile"
  - "hex package"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Elixir Mix Manager

Inspect mix.exs project dependencies, OTP application trees, and Hex packages

## Metadata

- **ID:** `elixir-mix`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `mix`
- `elixir mix`
- `mix compile`
- `hex package`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('elixir-mix', {
  /* input parameters */
});
```
