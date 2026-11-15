---
id: gitlab-ci-linter
name: "GitLab CI Linter"
version: 1.0.0
description: "Validate .gitlab-ci.yml stages, cache policies, artifacts, and rule conditions"
author: "AURA Team"
category: devops
tags:
  - "gitlab ci"
  - "gitlab ci yml"
  - "gitlab pipeline"
  - "gitlab lint"
triggers:
  - "gitlab ci"
  - "gitlab ci yml"
  - "gitlab pipeline"
  - "gitlab lint"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GitLab CI Linter

Validate .gitlab-ci.yml stages, cache policies, artifacts, and rule conditions

## Metadata

- **ID:** `gitlab-ci-linter`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `gitlab ci`
- `gitlab ci yml`
- `gitlab pipeline`
- `gitlab lint`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gitlab-ci-linter', {
  /* input parameters */
});
```
