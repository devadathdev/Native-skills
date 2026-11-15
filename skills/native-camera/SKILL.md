---
id: native-camera
name: "Native Camera Manager"
version: 1.0.0
description: "Inspect mobile camera resolution limits, flash modes, and permission requirements"
author: "AURA Team"
category: development
tags:
  - "camera"
  - "mobile camera"
  - "photo capture"
  - "camera permission"
triggers:
  - "camera"
  - "mobile camera"
  - "photo capture"
  - "camera permission"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Native Camera Manager

Inspect mobile camera resolution limits, flash modes, and permission requirements

## Metadata

- **ID:** `native-camera`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `camera`
- `mobile camera`
- `photo capture`
- `camera permission`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('native-camera', {
  /* input parameters */
});
```
