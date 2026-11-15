---
id: flask-routes
name: "Flask Route Inspector"
version: 1.0.0
description: "Inspect Flask blueprints, application context, request hooks, and Jinja templates"
author: "AURA Team"
category: development
tags:
  - "flask"
  - "flask blueprint"
  - "flask route"
  - "werkzeug"
triggers:
  - "flask"
  - "flask blueprint"
  - "flask route"
  - "werkzeug"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Flask Route Inspector

Inspect Flask blueprints, application context, request hooks, and Jinja templates

## Metadata

- **ID:** `flask-routes`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `flask`
- `flask blueprint`
- `flask route`
- `werkzeug`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('flask-routes', {
  /* input parameters */
});
```
