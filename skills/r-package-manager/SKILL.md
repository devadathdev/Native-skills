---
id: r-package-manager
name: "R Package Manager"
version: 1.0.0
description: "Inspect DESCRIPTION files, CRAN package dependencies, and R script execution"
author: "AURA Team"
category: development
tags:
  - "r script"
  - "cran"
  - "r package"
  - "r library"
triggers:
  - "r script"
  - "cran"
  - "r package"
  - "r library"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# R Package Manager

Inspect DESCRIPTION files, CRAN package dependencies, and R script execution

## Metadata

- **ID:** `r-package-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `r script`
- `cran`
- `r package`
- `r library`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('r-package-manager', {
  /* input parameters */
});
```
