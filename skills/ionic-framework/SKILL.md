---
id: ionic-framework
name: "Ionic Framework"
version: 1.0.0
description: "Inspect Ionic capacitor configs, web-to-native plugins, and mobile layouts"
author: "AURA Team"
category: development
tags:
  - "ionic"
  - "capacitor"
  - "mobile hybrid"
  - "ionic component"
triggers:
  - "ionic"
  - "capacitor"
  - "mobile hybrid"
  - "ionic component"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ionic Framework

Inspect Ionic capacitor configs, web-to-native plugins, and mobile layouts

## Metadata

- **ID:** `ionic-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `ionic`
- `capacitor`
- `mobile hybrid`
- `ionic component`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ionic-framework', {
  /* input parameters */
});
```
