---
id: quarkus-framework
name: "Quarkus Framework"
version: 1.0.0
description: "Inspect Supersonic Subatomic Java Quarkus extensions, panache, and endpoints"
author: "AURA Team"
category: development
tags:
  - "quarkus"
  - "subatomic java"
  - "panache entity"
  - "quarkus dev"
triggers:
  - "quarkus"
  - "subatomic java"
  - "panache entity"
  - "quarkus dev"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Quarkus Framework

Inspect Supersonic Subatomic Java Quarkus extensions, panache, and endpoints

## Metadata

- **ID:** `quarkus-framework`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `quarkus`
- `subatomic java`
- `panache entity`
- `quarkus dev`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('quarkus-framework', {
  /* input parameters */
});
```
