---
id: gcp-gcs-admin
name: "Google Cloud Storage"
version: 1.0.0
description: "Inspect GCS bucket access controls, uniform bucket-level access, and lifecycle rules"
author: "AURA Team"
category: data
tags:
  - "gcs bucket"
  - "cloud storage gcp"
  - "gcs lifecycle"
  - "storage object"
triggers:
  - "gcs bucket"
  - "cloud storage gcp"
  - "gcs lifecycle"
  - "storage object"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google Cloud Storage

Inspect GCS bucket access controls, uniform bucket-level access, and lifecycle rules

## Metadata

- **ID:** `gcp-gcs-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gcs bucket`
- `cloud storage gcp`
- `gcs lifecycle`
- `storage object`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-gcs-admin', {
  /* input parameters */
});
```
