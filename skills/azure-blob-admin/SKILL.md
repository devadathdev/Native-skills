---
id: azure-blob-admin
name: "Azure Blob Admin"
version: 1.0.0
description: "Inspect Azure Storage Account container access tiers (Hot/Cool/Archive) and SAS tokens"
author: "AURA Team"
category: data
tags:
  - "azure blob"
  - "storage account"
  - "sas token"
  - "azure container"
triggers:
  - "azure blob"
  - "storage account"
  - "sas token"
  - "azure container"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure Blob Admin

Inspect Azure Storage Account container access tiers (Hot/Cool/Archive) and SAS tokens

## Metadata

- **ID:** `azure-blob-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure blob`
- `storage account`
- `sas token`
- `azure container`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-blob-admin', {
  /* input parameters */
});
```
