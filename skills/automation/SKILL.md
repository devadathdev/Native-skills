---
id: automation
name: "Automation"
version: 1.0.0
description: "Build, trigger, and manage repeatable automation pipelines and workflows"
author: "AURA Team"
category: productivity
tags:
  - "automate"
  - "workflow"
  - "pipeline"
  - "job"
  - "forge"
triggers:
  - "automate"
  - "automation"
  - "workflow"
  - "pipeline"
  - "run job"
permissions:
  - type: shell
    scope: [execute]
  - type: filesystem
    scope: [read, write]
  - type: api
    scope: [forge]
enabled: true
entryPoint: src/skills/core/index.ts
---

# Automation

Build, trigger, and manage repeatable automation pipelines and workflows

## Metadata

- **ID:** `automation`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `execute`)
- `filesystem` (scope: `read, write`)
- `api` (scope: `forge`)

## Triggers

- `automate`
- `automation`
- `workflow`
- `pipeline`
- `run job`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('automation', {
  /* input parameters */
});
```
