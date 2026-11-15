---
id: gcp-cloud-run
name: "GCP Cloud Run"
version: 1.0.0
description: "Inspect Cloud Run containerized services, concurrency limits, traffic splits, and revisions"
author: "AURA Team"
category: devops
tags:
  - "cloud run"
  - "gcp cloud run"
  - "serverless container"
  - "traffic split"
triggers:
  - "cloud run"
  - "gcp cloud run"
  - "serverless container"
  - "traffic split"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GCP Cloud Run

Inspect Cloud Run containerized services, concurrency limits, traffic splits, and revisions

## Metadata

- **ID:** `gcp-cloud-run`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cloud run`
- `gcp cloud run`
- `serverless container`
- `traffic split`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-cloud-run', {
  /* input parameters */
});
```
