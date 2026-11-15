---
id: github-actions-linter
name: "GitHub Actions Linter"
version: 1.0.0
description: "Lint .github/workflows/*.yml for action version pinning, matrix builds, and permissions"
author: "AURA Team"
category: devops
tags:
  - "github actions lint"
  - "workflow lint"
  - "action version"
  - "gh workflow"
triggers:
  - "github actions lint"
  - "workflow lint"
  - "action version"
  - "gh workflow"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GitHub Actions Linter

Lint .github/workflows/*.yml for action version pinning, matrix builds, and permissions

## Metadata

- **ID:** `github-actions-linter`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `github actions lint`
- `workflow lint`
- `action version`
- `gh workflow`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('github-actions-linter', {
  /* input parameters */
});
```
