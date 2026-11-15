---
id: assembly-nasm
name: "NASM Assembly Inspector"
version: 1.0.0
description: "Inspect x86-64/ARM assembly listings, opcode encodings, and registers"
author: "AURA Team"
category: development
tags:
  - "nasm"
  - "assembly"
  - "x86 asm"
  - "asm listing"
triggers:
  - "nasm"
  - "assembly"
  - "x86 asm"
  - "asm listing"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# NASM Assembly Inspector

Inspect x86-64/ARM assembly listings, opcode encodings, and registers

## Metadata

- **ID:** `assembly-nasm`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `nasm`
- `assembly`
- `x86 asm`
- `asm listing`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('assembly-nasm', {
  /* input parameters */
});
```
