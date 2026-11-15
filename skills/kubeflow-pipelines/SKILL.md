---
id: kubeflow-pipelines
name: "Kubeflow Pipelines"
version: 1.0.0
description: "Inspect Kubeflow pipeline YAML specs, component containers, and volume artifacts"
author: "AURA Team"
category: ai
tags:
  - "kubeflow"
  - "kubeflow pipeline"
  - "kfp"
  - "mlops kubernetes"
triggers:
  - "kubeflow"
  - "kubeflow pipeline"
  - "kfp"
  - "mlops kubernetes"
permissions:
  - type: model
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Kubeflow Pipelines

Inspect Kubeflow pipeline YAML specs, component containers, and volume artifacts

## Metadata

- **ID:** `kubeflow-pipelines`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `*`)

## Triggers

- `kubeflow`
- `kubeflow pipeline`
- `kfp`
- `mlops kubernetes`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('kubeflow-pipelines', {
  /* input parameters */
});
```
