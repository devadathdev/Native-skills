---
id: java-maven
name: "Java Maven Manager"
version: 1.0.0
description: "Inspect pom.xml project descriptors, Maven lifecycles, and jar packaging"
author: "AURA Team"
category: development
tags:
  - "maven"
  - "mvn"
  - "pom xml"
  - "java build"
triggers:
  - "maven"
  - "mvn"
  - "pom xml"
  - "java build"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Java Maven Manager

Inspect pom.xml project descriptors, Maven lifecycles, and jar packaging

## Metadata

- **ID:** `java-maven`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `maven`
- `mvn`
- `pom xml`
- `java build`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('java-maven', {
  /* input parameters */
});
```
