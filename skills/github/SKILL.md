---
id: github
name: "GitHub"
version: 1.0.0
description: "GitHub repositories, issues, and pull request workflows"
author: "AURA Team"
category: development
tags:
  - "github"
  - "pull request"
  - "issue"
  - "repository"
triggers:
  - "github"
  - "pull request"
  - "pr"
  - "repo"
  - "open issue"
permissions:
  - type: network
    scope: [github]
  - type: api
    scope: [github]
enabled: true
entryPoint: src/skills/core/index.ts
---

# GitHub

GitHub repositories, issues, and pull request workflows

## Metadata

- **ID:** `github`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `github`)
- `api` (scope: `github`)

## Triggers

- `github`
- `pull request`
- `pr`
- `repo`
- `open issue`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('github', {
  /* input parameters */
});
```
