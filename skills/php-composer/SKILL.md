---
id: php-composer
name: "PHP Composer"
version: 1.0.0
description: "Inspect composer.json dependencies, autoload psr-4 maps, and vendor packages"
author: "AURA Team"
category: development
tags:
  - "composer"
  - "php package"
  - "composer json"
  - "autoload"
triggers:
  - "composer"
  - "php package"
  - "composer json"
  - "autoload"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PHP Composer

Inspect composer.json dependencies, autoload psr-4 maps, and vendor packages

## Metadata

- **ID:** `php-composer`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `composer`
- `php package`
- `composer json`
- `autoload`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('php-composer', {
  /* input parameters */
});
```
