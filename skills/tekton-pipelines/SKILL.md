---
id: tekton-pipelines
name: "Tekton Pipelines"
version: 1.0.0
description: "Inspect Tekton Tasks, Pipelines, TaskRuns, and Workspace volume bindings"
author: "AURA Team"
category: devops
tags:
  - "tekton"
  - "tekton pipeline"
  - "tekton task"
  - "cloud native ci"
triggers:
  - "tekton"
  - "tekton pipeline"
  - "tekton task"
  - "cloud native ci"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Tekton Pipelines

Inspect Tekton Tasks, Pipelines, TaskRuns, and Workspace volume bindings

## Metadata

- **ID:** `tekton-pipelines`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `tekton`
- `tekton pipeline`
- `tekton task`
- `cloud native ci`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tekton-pipelines', {
  /* input parameters */
});
```
