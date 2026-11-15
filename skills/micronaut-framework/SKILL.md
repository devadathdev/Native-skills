---
id: micronaut-framework
name: "Micronaut Framework"
version: 1.0.0
description: "Inspect Ahead-Of-Time (AOT) compile-time dependency injection and controllers"
author: "AURA Team"
category: development
tags:
  - "micronaut"
  - "aot compile"
  - "graalvm native"
  - "micronaut bean"
triggers:
  - "micronaut"
  - "aot compile"
  - "graalvm native"
  - "micronaut bean"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Micronaut Framework

Inspect Ahead-Of-Time (AOT) compile-time dependency injection and controllers

## Metadata

- **ID:** `micronaut-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `micronaut`
- `aot compile`
- `graalvm native`
- `micronaut bean`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('micronaut-framework', {
  /* input parameters */
});
```
