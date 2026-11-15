---
id: gcp-secret-manager
name: "GCP Secret Manager"
version: 1.0.0
description: "Inspect Secret Manager versions, IAM bindings, and payload access controls"
author: "AURA Team"
category: security
tags:
  - "gcp secret manager"
  - "secret version"
  - "google secret"
  - "secret payload"
triggers:
  - "gcp secret manager"
  - "secret version"
  - "google secret"
  - "secret payload"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GCP Secret Manager

Inspect Secret Manager versions, IAM bindings, and payload access controls

## Metadata

- **ID:** `gcp-secret-manager`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gcp secret manager`
- `secret version`
- `google secret`
- `secret payload`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-secret-manager', {
  /* input parameters */
});
```
