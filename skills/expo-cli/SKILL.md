---
id: expo-cli
name: "Expo CLI Helper"
version: 1.0.0
description: "Inspect Expo app.json configs, EAS build credentials, and plugin hooks"
author: "AURA Team"
category: development
tags:
  - "expo"
  - "eas build"
  - "expo app json"
  - "expo router"
triggers:
  - "expo"
  - "eas build"
  - "expo app json"
  - "expo router"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Expo CLI Helper

Inspect Expo app.json configs, EAS build credentials, and plugin hooks

## Metadata

- **ID:** `expo-cli`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `expo`
- `eas build`
- `expo app json`
- `expo router`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('expo-cli', {
  /* input parameters */
});
```
