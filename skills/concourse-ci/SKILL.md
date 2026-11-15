---
id: concourse-ci
name: "Concourse CI"
version: 1.0.0
description: "Inspect Concourse pipeline resources, jobs, tasks, and worker fly targets"
author: "AURA Team"
category: devops
tags:
  - "concourse"
  - "concourse ci"
  - "fly target"
  - "pipeline resource"
triggers:
  - "concourse"
  - "concourse ci"
  - "fly target"
  - "pipeline resource"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Concourse CI

Inspect Concourse pipeline resources, jobs, tasks, and worker fly targets

## Metadata

- **ID:** `concourse-ci`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `concourse`
- `concourse ci`
- `fly target`
- `pipeline resource`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('concourse-ci', {
  /* input parameters */
});
```
