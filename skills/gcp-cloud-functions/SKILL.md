---
id: gcp-cloud-functions
name: "GCP Cloud Functions"
version: 1.0.0
description: "Inspect Google Cloud Functions gen 2 triggers, event sources, and memory allocations"
author: "AURA Team"
category: devops
tags:
  - "gcp functions"
  - "cloud functions"
  - "eventarc trigger"
  - "google serverless"
triggers:
  - "gcp functions"
  - "cloud functions"
  - "eventarc trigger"
  - "google serverless"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GCP Cloud Functions

Inspect Google Cloud Functions gen 2 triggers, event sources, and memory allocations

## Metadata

- **ID:** `gcp-cloud-functions`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gcp functions`
- `cloud functions`
- `eventarc trigger`
- `google serverless`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-cloud-functions', {
  /* input parameters */
});
```
