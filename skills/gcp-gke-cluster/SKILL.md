---
id: gcp-gke-cluster
name: "Google GKE Cluster"
version: 1.0.0
description: "Inspect Google Kubernetes Engine Autopilot clusters, node pools, and Workload Identity"
author: "AURA Team"
category: devops
tags:
  - "gke"
  - "gke autopilot"
  - "google kubernetes"
  - "workload identity"
triggers:
  - "gke"
  - "gke autopilot"
  - "google kubernetes"
  - "workload identity"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google GKE Cluster

Inspect Google Kubernetes Engine Autopilot clusters, node pools, and Workload Identity

## Metadata

- **ID:** `gcp-gke-cluster`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gke`
- `gke autopilot`
- `google kubernetes`
- `workload identity`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-gke-cluster', {
  /* input parameters */
});
```
