---
id: django-admin-skill
name: "Django Inspector"
version: 1.0.0
description: "Inspect Django models, ORM querysets, URLconfs, and migrations"
author: "AURA Team"
category: development
tags:
  - "django"
  - "django models"
  - "django orm"
  - "django urls"
triggers:
  - "django"
  - "django models"
  - "django orm"
  - "django urls"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Django Inspector

Inspect Django models, ORM querysets, URLconfs, and migrations

## Metadata

- **ID:** `django-admin-skill`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `django`
- `django models`
- `django orm`
- `django urls`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('django-admin-skill', {
  /* input parameters */
});
```
