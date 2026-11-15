---
id: capacitor-plugins
name: "Capacitor Plugins"
version: 1.0.0
description: "Inspect Capacitor bridge registrations, iOS/Android plugin wrappers, and events"
author: "AURA Team"
category: development
tags:
  - "capacitor plugin"
  - "capacitor bridge"
  - "native plugin"
  - "device camera"
triggers:
  - "capacitor plugin"
  - "capacitor bridge"
  - "native plugin"
  - "device camera"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Capacitor Plugins

Inspect Capacitor bridge registrations, iOS/Android plugin wrappers, and events

## Metadata

- **ID:** `capacitor-plugins`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `capacitor plugin`
- `capacitor bridge`
- `native plugin`
- `device camera`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('capacitor-plugins', {
  /* input parameters */
});
```
