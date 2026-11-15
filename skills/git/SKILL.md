---
id: git
name: "Git"
version: 1.0.0
description: "Native Git workflow automation and repository management"
author: "AURA Team"
category: development
tags:
  - "git"
  - "vcs"
  - "commit"
  - "branch"
  - "diff"
triggers:
  - "git"
  - "commit"
  - "branch"
  - "merge"
  - "rebase"
  - "git status"
permissions:
  - type: shell
    scope: [git]
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Git

Native Git workflow automation and repository management

## Metadata

- **ID:** `git`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `git`)
- `filesystem` (scope: `read, write`)

## Triggers

- `git`
- `commit`
- `branch`
- `merge`
- `rebase`
- `git status`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('git', {
  /* input parameters */
});
```
