---
id: ci-cd
name: "CI/CD"
version: 1.0.0
description: "Generate and validate CI/CD pipeline workflows (GitHub Actions, GitLab CI)"
author: "AURA Team"
category: devops
tags:
  - "ci"
  - "cd"
  - "pipeline"
  - "workflow"
  - "github actions"
  - "ci/cd"
triggers:
  - "ci"
  - "cd"
  - "pipeline"
  - "workflow"
  - "github actions"
  - "ci/cd"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# CI/CD

Generate and validate CI/CD pipeline workflows (GitHub Actions, GitLab CI)

## Metadata

- **ID:** `ci-cd`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `ci`
- `cd`
- `pipeline`
- `workflow`
- `github actions`
- `ci/cd`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ci-cd', {
  /* input parameters */
});
```
