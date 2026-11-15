---
id: react-native-manager
name: "React Native Manager"
version: 1.0.0
description: "Inspect React Native Metro bundler, native bridges, and component styling"
author: "AURA Team"
category: development
tags:
  - "react native"
  - "metro bundler"
  - "native module"
  - "rn component"
triggers:
  - "react native"
  - "metro bundler"
  - "native module"
  - "rn component"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# React Native Manager

Inspect React Native Metro bundler, native bridges, and component styling

## Metadata

- **ID:** `react-native-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `react native`
- `metro bundler`
- `native module`
- `rn component`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('react-native-manager', {
  /* input parameters */
});
```
