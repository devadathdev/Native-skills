---
id: xcode-build
name: "Xcode Build Helper"
version: 1.0.0
description: "Inspect .xcodeproj schemes, build configurations, and provisioning profiles"
author: "AURA Team"
category: development
tags:
  - "xcode"
  - "xcodebuild"
  - "xcodeproj"
  - "provisioning profile"
triggers:
  - "xcode"
  - "xcodebuild"
  - "xcodeproj"
  - "provisioning profile"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Xcode Build Helper

Inspect .xcodeproj schemes, build configurations, and provisioning profiles

## Metadata

- **ID:** `xcode-build`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `xcode`
- `xcodebuild`
- `xcodeproj`
- `provisioning profile`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('xcode-build', {
  /* input parameters */
});
```
