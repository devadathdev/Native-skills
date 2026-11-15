---
id: dependency-manager
name: "Dependency Manager"
version: 1.0.0
description: "Inspect, analyze, and audit package dependencies and lockfiles"
author: "AURA Team"
category: development
tags:
  - "dependency"
  - "npm"
  - "package"
  - "upgrade package"
  - "outdated"
triggers:
  - "dependency"
  - "npm"
  - "package"
  - "upgrade package"
  - "outdated"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Dependency Manager

Inspect, analyze, and audit package dependencies and lockfiles

## Metadata

- **ID:** `dependency-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `dependency`
- `npm`
- `package`
- `upgrade package`
- `outdated`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dependency-manager', {
  /* input parameters */
});
```
