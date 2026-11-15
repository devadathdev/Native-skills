---
id: dockerfile-linter
name: "Dockerfile Linter"
version: 1.0.0
description: "Lint Dockerfiles against best practices, layer caching, multi-stage builds, and size"
author: "AURA Team"
category: devops
tags:
  - "hadolint"
  - "dockerfile lint"
  - "docker best practices"
  - "layer cache"
triggers:
  - "hadolint"
  - "dockerfile lint"
  - "docker best practices"
  - "layer cache"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dockerfile Linter

Lint Dockerfiles against best practices, layer caching, multi-stage builds, and size

## Metadata

- **ID:** `dockerfile-linter`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `hadolint`
- `dockerfile lint`
- `docker best practices`
- `layer cache`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dockerfile-linter', {
  /* input parameters */
});
```
