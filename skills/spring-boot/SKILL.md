---
id: spring-boot
name: "Spring Boot Manager"
version: 1.0.0
description: "Inspect Spring Boot @RestController endpoints, beans, and autowiring"
author: "AURA Team"
category: development
tags:
  - "spring boot"
  - "spring framework"
  - "rest controller"
  - "spring bean"
triggers:
  - "spring boot"
  - "spring framework"
  - "rest controller"
  - "spring bean"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Spring Boot Manager

Inspect Spring Boot @RestController endpoints, beans, and autowiring

## Metadata

- **ID:** `spring-boot`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `spring boot`
- `spring framework`
- `rest controller`
- `spring bean`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('spring-boot', {
  /* input parameters */
});
```
