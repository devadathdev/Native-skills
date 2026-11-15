---
id: helm-charts
name: "Helm Charts"
version: 1.0.0
description: "Lint Kubernetes Helm charts, validate values.yaml, and render template manifests"
author: "AURA Team"
category: devops
tags:
  - "helm"
  - "helm chart"
  - "values yaml"
  - "helm template"
  - "helm lint"
  - "k8s helm"
triggers:
  - "helm"
  - "helm chart"
  - "values yaml"
  - "helm template"
  - "helm lint"
  - "k8s helm"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Helm Charts

Lint Kubernetes Helm charts, validate values.yaml, and render template manifests

## Metadata

- **ID:** `helm-charts`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `helm`
- `helm chart`
- `values yaml`
- `helm template`
- `helm lint`
- `k8s helm`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('helm-charts', {
  /* input parameters */
});
```
