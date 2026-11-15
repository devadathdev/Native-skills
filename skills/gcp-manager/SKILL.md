---
id: gcp-manager
name: "Google Cloud Manager"
version: 1.0.0
description: "Inspect GCP projects, Cloud Storage buckets, Cloud Run services, and GKE clusters"
author: "AURA Team"
category: devops
tags:
  - "gcp"
  - "google cloud"
  - "gcs"
  - "cloud run"
  - "gke"
  - "google cloud platform"
triggers:
  - "gcp"
  - "google cloud"
  - "gcs"
  - "cloud run"
  - "gke"
  - "google cloud platform"
permissions:
  - type: api
    scope: [gcp]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Google Cloud Manager

Inspect GCP projects, Cloud Storage buckets, Cloud Run services, and GKE clusters

## Metadata

- **ID:** `gcp-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `gcp`)

## Triggers

- `gcp`
- `google cloud`
- `gcs`
- `cloud run`
- `gke`
- `google cloud platform`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-manager', {
  /* input parameters */
});
```
