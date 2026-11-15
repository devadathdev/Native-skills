---
id: k8s-cronjob-inspector
name: "K8s CronJob Inspector"
version: 1.0.0
description: "Inspect CronJob schedule expressions, concurrencyPolicies, and successfulJobsHistoryLimit"
author: "AURA Team"
category: devops
tags:
  - "cronjob"
  - "k8s cronjob"
  - "job schedule"
  - "concurrency policy"
triggers:
  - "cronjob"
  - "k8s cronjob"
  - "job schedule"
  - "concurrency policy"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# K8s CronJob Inspector

Inspect CronJob schedule expressions, concurrencyPolicies, and successfulJobsHistoryLimit

## Metadata

- **ID:** `k8s-cronjob-inspector`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `cronjob`
- `k8s cronjob`
- `job schedule`
- `concurrency policy`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('k8s-cronjob-inspector', {
  /* input parameters */
});
```
