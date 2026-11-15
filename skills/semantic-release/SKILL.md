---
id: semantic-release
name: "Semantic Release Helper"
version: 1.0.0
description: "Calculate next semantic version number based on commit messages and publish release"
author: "AURA Team"
category: development
tags:
  - "semantic release"
  - "next version"
  - "semver bump"
  - "automated release"
triggers:
  - "semantic release"
  - "next version"
  - "semver bump"
  - "automated release"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Semantic Release Helper

Calculate next semantic version number based on commit messages and publish release

## Metadata

- **ID:** `semantic-release`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `semantic release`
- `next version`
- `semver bump`
- `automated release`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('semantic-release', {
  /* input parameters */
});
```
