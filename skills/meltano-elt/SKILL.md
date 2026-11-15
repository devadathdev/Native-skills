---
id: meltano-elt
name: "Meltano ELT"
version: 1.0.0
description: "Inspect meltano.yml Singer taps and targets, environment variables, and pipelines"
author: "AURA Team"
category: data
tags:
  - "meltano"
  - "singer tap"
  - "singer target"
  - "meltano elt"
triggers:
  - "meltano"
  - "singer tap"
  - "singer target"
  - "meltano elt"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Meltano ELT

Inspect meltano.yml Singer taps and targets, environment variables, and pipelines

## Metadata

- **ID:** `meltano-elt`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `meltano`
- `singer tap`
- `singer target`
- `meltano elt`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('meltano-elt', {
  /* input parameters */
});
```
