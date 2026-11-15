---
id: python-runtime
name: "Python Runtime"
version: 1.0.0
description: "Inspect Python virtual environments, package wheels, and pip dependencies"
author: "AURA Team"
category: development
tags:
  - "python"
  - "pip"
  - "venv"
  - "python runtime"
triggers:
  - "python"
  - "pip"
  - "venv"
  - "python runtime"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Python Runtime

Inspect Python virtual environments, package wheels, and pip dependencies

## Metadata

- **ID:** `python-runtime`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `python`
- `pip`
- `venv`
- `python runtime`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('python-runtime', {
  /* input parameters */
});
```
