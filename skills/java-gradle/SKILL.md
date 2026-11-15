---
id: java-gradle
name: "Java Gradle Manager"
version: 1.0.0
description: "Inspect build.gradle scripts, Gradle tasks, and multi-project builds"
author: "AURA Team"
category: development
tags:
  - "gradle"
  - "gradlew"
  - "build gradle"
  - "gradle build"
triggers:
  - "gradle"
  - "gradlew"
  - "build gradle"
  - "gradle build"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Java Gradle Manager

Inspect build.gradle scripts, Gradle tasks, and multi-project builds

## Metadata

- **ID:** `java-gradle`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `gradle`
- `gradlew`
- `build gradle`
- `gradle build`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('java-gradle', {
  /* input parameters */
});
```
