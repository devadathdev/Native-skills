---
id: blob-storage
name: "Blob Storage"
version: 1.0.0
description: "Perform object storage operations across S3, GCS, and Azure Blob (upload, download, presign)"
author: "AURA Team"
category: data
tags:
  - "blob"
  - "object storage"
  - "s3 bucket"
  - "presigned url"
  - "upload blob"
  - "download blob"
triggers:
  - "blob"
  - "object storage"
  - "s3 bucket"
  - "presigned url"
  - "upload blob"
  - "download blob"
permissions:
  - type: api
    scope: [storage]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Blob Storage

Perform object storage operations across S3, GCS, and Azure Blob (upload, download, presign)

## Metadata

- **ID:** `blob-storage`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `storage`)

## Triggers

- `blob`
- `object storage`
- `s3 bucket`
- `presigned url`
- `upload blob`
- `download blob`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('blob-storage', {
  /* input parameters */
});
```
