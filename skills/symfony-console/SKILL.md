---
id: symfony-console
name: "Symfony Console"
version: 1.0.0
description: "Inspect Symfony bundle configs, services.yaml injection, and event dispatchers"
author: "AURA Team"
category: development
tags:
  - "symfony"
  - "symfony console"
  - "services yaml"
  - "twig template"
triggers:
  - "symfony"
  - "symfony console"
  - "services yaml"
  - "twig template"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Symfony Console

Inspect Symfony bundle configs, services.yaml injection, and event dispatchers

## Metadata

- **ID:** `symfony-console`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `symfony`
- `symfony console`
- `services yaml`
- `twig template`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('symfony-console', {
  /* input parameters */
});
```
