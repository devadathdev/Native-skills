---
id: bitbucket-pipelines
name: "Bitbucket Pipelines"
version: 1.0.0
description: "Inspect bitbucket-pipelines.yml step definitions, pipelines, and deployment environments"
author: "AURA Team"
category: devops
tags:
  - "bitbucket pipelines"
  - "bitbucket ci"
  - "bitbucket build"
  - "pipeline step"
triggers:
  - "bitbucket pipelines"
  - "bitbucket ci"
  - "bitbucket build"
  - "pipeline step"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Bitbucket Pipelines

Inspect bitbucket-pipelines.yml step definitions, pipelines, and deployment environments

## Metadata

- **ID:** `bitbucket-pipelines`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `bitbucket pipelines`
- `bitbucket ci`
- `bitbucket build`
- `pipeline step`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('bitbucket-pipelines', {
  /* input parameters */
});
```
