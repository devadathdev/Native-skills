---
id: laravel-artisan
name: "Laravel Artisan"
version: 1.0.0
description: "Inspect Laravel Eloquent models, artisan commands, service providers, and blade"
author: "AURA Team"
category: development
tags:
  - "laravel"
  - "artisan"
  - "eloquent orm"
  - "blade template"
triggers:
  - "laravel"
  - "artisan"
  - "eloquent orm"
  - "blade template"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Laravel Artisan

Inspect Laravel Eloquent models, artisan commands, service providers, and blade

## Metadata

- **ID:** `laravel-artisan`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `laravel`
- `artisan`
- `eloquent orm`
- `blade template`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('laravel-artisan', {
  /* input parameters */
});
```
