---
id: release-drafter
name: "Release Drafter"
version: 1.0.0
description: "Draft categorized GitHub release notes based on merged pull request labels"
author: "AURA Team"
category: development
tags:
  - "release drafter"
  - "draft release"
  - "release notes pr"
  - "pr labels release"
triggers:
  - "release drafter"
  - "draft release"
  - "release notes pr"
  - "pr labels release"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Release Drafter

Draft categorized GitHub release notes based on merged pull request labels

## Metadata

- **ID:** `release-drafter`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `release drafter`
- `draft release`
- `release notes pr`
- `pr labels release`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('release-drafter', {
  /* input parameters */
});
```
