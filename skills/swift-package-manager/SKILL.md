---
id: swift-package-manager
name: "Swift Package Manager"
version: 1.0.0
description: "Inspect Package.swift manifests, dependencies, and target products"
author: "AURA Team"
category: development
tags:
  - "swift build"
  - "spm"
  - "package swift"
  - "swift pm"
triggers:
  - "swift build"
  - "spm"
  - "package swift"
  - "swift pm"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Swift Package Manager

Inspect Package.swift manifests, dependencies, and target products

## Metadata

- **ID:** `swift-package-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `swift build`
- `spm`
- `package swift`
- `swift pm`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('swift-package-manager', {
  /* input parameters */
});
```
