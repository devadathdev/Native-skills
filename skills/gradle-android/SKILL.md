---
id: gradle-android
name: "Android Gradle Plugin"
version: 1.0.0
description: "Inspect build.gradle.kts defaultConfig, build types, and proguard rule sets"
author: "AURA Team"
category: development
tags:
  - "agp"
  - "android gradle"
  - "minify enabled"
  - "proguard rules"
triggers:
  - "agp"
  - "android gradle"
  - "minify enabled"
  - "proguard rules"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Android Gradle Plugin

Inspect build.gradle.kts defaultConfig, build types, and proguard rule sets

## Metadata

- **ID:** `gradle-android`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `agp`
- `android gradle`
- `minify enabled`
- `proguard rules`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gradle-android', {
  /* input parameters */
});
```
