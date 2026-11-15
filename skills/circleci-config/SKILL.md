---
id: circleci-config
name: "CircleCI Config Inspector"
version: 1.0.0
description: "Inspect .circleci/config.yml orbs, executors, workflows, and job caching"
author: "AURA Team"
category: devops
tags:
  - "circleci"
  - "circleci config"
  - "circleci orb"
  - "circleci workflow"
triggers:
  - "circleci"
  - "circleci config"
  - "circleci orb"
  - "circleci workflow"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# CircleCI Config Inspector

Inspect .circleci/config.yml orbs, executors, workflows, and job caching

## Metadata

- **ID:** `circleci-config`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `circleci`
- `circleci config`
- `circleci orb`
- `circleci workflow`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('circleci-config', {
  /* input parameters */
});
```
