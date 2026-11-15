---
id: ios-plist
name: "iOS Info.plist Inspector"
version: 1.0.0
description: "Inspect iOS Info.plist capability keys, bundle identifiers, and permissions"
author: "AURA Team"
category: development
tags:
  - "info plist"
  - "ios capability"
  - "bundle id"
  - "ios plist"
triggers:
  - "info plist"
  - "ios capability"
  - "bundle id"
  - "ios plist"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# iOS Info.plist Inspector

Inspect iOS Info.plist capability keys, bundle identifiers, and permissions

## Metadata

- **ID:** `ios-plist`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `info plist`
- `ios capability`
- `bundle id`
- `ios plist`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ios-plist', {
  /* input parameters */
});
```
