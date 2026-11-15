---
id: julia-pkg
name: "Julia Pkg Manager"
version: 1.0.0
description: "Inspect Project.toml manifests, Julia artifacts, and scientific computing packages"
author: "AURA Team"
category: development
tags:
  - "julia pkg"
  - "julia"
  - "project toml"
  - "julia packages"
triggers:
  - "julia pkg"
  - "julia"
  - "project toml"
  - "julia packages"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Julia Pkg Manager

Inspect Project.toml manifests, Julia artifacts, and scientific computing packages

## Metadata

- **ID:** `julia-pkg`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `julia pkg`
- `julia`
- `project toml`
- `julia packages`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('julia-pkg', {
  /* input parameters */
});
```
