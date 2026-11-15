---
id: haskell-cabal
name: "Haskell Cabal"
version: 1.0.0
description: "Inspect .cabal package files, GHC compiler flags, and Hackage dependencies"
author: "AURA Team"
category: development
tags:
  - "cabal"
  - "haskell build"
  - "ghc"
  - "hackage"
triggers:
  - "cabal"
  - "haskell build"
  - "ghc"
  - "hackage"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Haskell Cabal

Inspect .cabal package files, GHC compiler flags, and Hackage dependencies

## Metadata

- **ID:** `haskell-cabal`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `cabal`
- `haskell build`
- `ghc`
- `hackage`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('haskell-cabal', {
  /* input parameters */
});
```
