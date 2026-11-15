---
id: icon-generator
name: "Icon & Favicon Generator"
version: 1.0.0
description: "Plan and format app icons, favicons, Apple touch icons, and web app manifest configurations"
author: "AURA Team"
category: documents
tags:
  - "favicon"
  - "app icon"
  - "icon generator"
  - "apple touch icon"
  - "web app manifest"
triggers:
  - "favicon"
  - "app icon"
  - "icon generator"
  - "apple touch icon"
  - "web app manifest"
permissions:
  - type: filesystem
    scope: [write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Icon & Favicon Generator

Plan and format app icons, favicons, Apple touch icons, and web app manifest configurations

## Metadata

- **ID:** `icon-generator`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `write`)

## Triggers

- `favicon`
- `app icon`
- `icon generator`
- `apple touch icon`
- `web app manifest`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('icon-generator', {
  /* input parameters */
});
```
