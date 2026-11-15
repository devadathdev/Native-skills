---
id: flutter-engine
name: "Flutter Engine"
version: 1.0.0
description: "Inspect Flutter widget trees, State subclasses, and pubspec asset mappings"
author: "AURA Team"
category: development
tags:
  - "flutter"
  - "flutter widget"
  - "stateful widget"
  - "dart flutter"
triggers:
  - "flutter"
  - "flutter widget"
  - "stateful widget"
  - "dart flutter"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Flutter Engine

Inspect Flutter widget trees, State subclasses, and pubspec asset mappings

## Metadata

- **ID:** `flutter-engine`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `flutter`
- `flutter widget`
- `stateful widget`
- `dart flutter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('flutter-engine', {
  /* input parameters */
});
```
