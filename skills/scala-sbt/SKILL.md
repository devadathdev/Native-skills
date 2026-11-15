---
id: scala-sbt
name: "Scala SBT Manager"
version: 1.0.0
description: "Inspect build.sbt definitions, Scala version matrices, and libraryDependencies"
author: "AURA Team"
category: development
tags:
  - "sbt"
  - "scala build"
  - "build sbt"
  - "scala compiler"
triggers:
  - "sbt"
  - "scala build"
  - "build sbt"
  - "scala compiler"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Scala SBT Manager

Inspect build.sbt definitions, Scala version matrices, and libraryDependencies

## Metadata

- **ID:** `scala-sbt`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `sbt`
- `scala build`
- `build sbt`
- `scala compiler`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('scala-sbt', {
  /* input parameters */
});
```
