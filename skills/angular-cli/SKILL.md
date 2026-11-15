---
id: angular-cli
name: "Angular CLI Helper"
version: 1.0.0
description: "Inspect Angular modules, standalone components, injectable services, and RxJS"
author: "AURA Team"
category: development
tags:
  - "angular"
  - "ng component"
  - "angular service"
  - "rxjs pipe"
triggers:
  - "angular"
  - "ng component"
  - "angular service"
  - "rxjs pipe"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Angular CLI Helper

Inspect Angular modules, standalone components, injectable services, and RxJS

## Metadata

- **ID:** `angular-cli`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `angular`
- `ng component`
- `angular service`
- `rxjs pipe`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('angular-cli', {
  /* input parameters */
});
```
