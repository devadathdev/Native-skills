---
id: android-manifest
name: "Android Manifest Inspector"
version: 1.0.0
description: "Inspect AndroidManifest.xml permissions, intent filters, and activity declarations"
author: "AURA Team"
category: development
tags:
  - "android manifest"
  - "intent filter"
  - "android permissions"
  - "apk manifest"
triggers:
  - "android manifest"
  - "intent filter"
  - "android permissions"
  - "apk manifest"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Android Manifest Inspector

Inspect AndroidManifest.xml permissions, intent filters, and activity declarations

## Metadata

- **ID:** `android-manifest`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `android manifest`
- `intent filter`
- `android permissions`
- `apk manifest`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('android-manifest', {
  /* input parameters */
});
```
