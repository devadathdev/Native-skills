---
id: conventional-commits-checker
name: "Conventional Commits"
version: 1.0.0
description: "Validate Git commit messages against the Conventional Commits specification"
author: "AURA Team"
category: development
tags:
  - "conventional commits"
  - "commit lint"
  - "commit message check"
  - "semantic commit"
triggers:
  - "conventional commits"
  - "commit lint"
  - "commit message check"
  - "semantic commit"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Conventional Commits

Validate Git commit messages against the Conventional Commits specification

## Metadata

- **ID:** `conventional-commits-checker`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `conventional commits`
- `commit lint`
- `commit message check`
- `semantic commit`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('conventional-commits-checker', {
  /* input parameters */
});
```
