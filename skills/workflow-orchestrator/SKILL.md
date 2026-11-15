---
id: workflow-orchestrator
name: "Workflow Orchestrator"
version: 1.0.0
description: "Execute Directed Acyclic Graph (DAG) pipelines with dependency steps, state checkpoints, and rollback"
author: "AURA Team"
category: productivity
tags:
  - "dag workflow"
  - "pipeline runner"
  - "workflow orchestrator"
  - "multi step pipeline"
  - "dag runner"
triggers:
  - "dag workflow"
  - "pipeline runner"
  - "workflow orchestrator"
  - "multi step pipeline"
  - "dag runner"
permissions:
  - type: api
    scope: [workflow]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Workflow Orchestrator

Execute Directed Acyclic Graph (DAG) pipelines with dependency steps, state checkpoints, and rollback

## Metadata

- **ID:** `workflow-orchestrator`
- **Category:** `productivity`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `workflow`)

## Triggers

- `dag workflow`
- `pipeline runner`
- `workflow orchestrator`
- `multi step pipeline`
- `dag runner`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('workflow-orchestrator', {
  /* input parameters */
});
```
