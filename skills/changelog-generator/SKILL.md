---
id: changelog-generator
name: "Changelog Generator"
version: 1.0.0
description: "Parse conventional commits, classify release changes, and generate semantic release notes"
author: "AURA Team"
category: development
tags:
  - "changelog"
  - "release notes"
  - "conventional commits"
  - "generate changelog"
  - "version bump"
triggers:
  - "changelog"
  - "release notes"
  - "conventional commits"
  - "generate changelog"
  - "version bump"
permissions:
  - type: filesystem
    scope: [read, write]
  - type: shell
    scope: [git]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Changelog Generator

Parse conventional commits, classify release changes, and generate semantic release notes

## Metadata

- **ID:** `changelog-generator`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)
- `shell` (scope: `git`)

## Triggers

- `changelog`
- `release notes`
- `conventional commits`
- `generate changelog`
- `version bump`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('changelog-generator', {
  /* input parameters */
});
```
