---
id: solidity-compiler
name: "Solidity Compiler"
version: 1.0.0
description: "Inspect EVM smart contract code, ABI generation, and bytecode compilation"
author: "AURA Team"
category: development
tags:
  - "solc"
  - "solidity"
  - "smart contract"
  - "evm bytecode"
triggers:
  - "solc"
  - "solidity"
  - "smart contract"
  - "evm bytecode"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Solidity Compiler

Inspect EVM smart contract code, ABI generation, and bytecode compilation

## Metadata

- **ID:** `solidity-compiler`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `solc`
- `solidity`
- `smart contract`
- `evm bytecode`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('solidity-compiler', {
  /* input parameters */
});
```
