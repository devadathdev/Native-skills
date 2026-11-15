---
id: git-hooks-manager
name: "Git Hooks Manager"
version: 1.0.0
description: "Inspect Husky / lefthook / pre-commit configuration files and staged scripts"
author: "AURA Team"
category: development
tags:
  - "git hooks"
  - "husky"
  - "pre commit"
  - "lefthook"
  - "commit msg hook"
triggers:
  - "git hooks"
  - "husky"
  - "pre commit"
  - "lefthook"
  - "commit msg hook"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Git Hooks Manager

Inspect Husky / lefthook / pre-commit configuration files and staged scripts

## Metadata

- **ID:** `git-hooks-manager`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `git hooks`
- `husky`
- `pre commit`
- `lefthook`
- `commit msg hook`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('git-hooks-manager', {
  /* input parameters */
});
```
