---
id: dart-pub
name: "Dart Pub Manager"
version: 1.0.0
description: "Inspect pubspec.yaml dependencies, pub cache, and Dart SDK resolution"
author: "AURA Team"
category: development
tags:
  - "dart pub"
  - "pub get"
  - "pubspec"
  - "dart sdk"
triggers:
  - "dart pub"
  - "pub get"
  - "pubspec"
  - "dart sdk"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dart Pub Manager

Inspect pubspec.yaml dependencies, pub cache, and Dart SDK resolution

## Metadata

- **ID:** `dart-pub`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `dart pub`
- `pub get`
- `pubspec`
- `dart sdk`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dart-pub', {
  /* input parameters */
});
```
