---
id: azure-manager
name: "Azure Manager"
version: 1.0.0
description: "Manage Azure resources, App Services, Blob storage containers, and resource groups"
author: "AURA Team"
category: devops
tags:
  - "azure"
  - "microsoft azure"
  - "azure resource"
  - "blob storage"
  - "azure app service"
triggers:
  - "azure"
  - "microsoft azure"
  - "azure resource"
  - "blob storage"
  - "azure app service"
permissions:
  - type: api
    scope: [azure]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Azure Manager

Manage Azure resources, App Services, Blob storage containers, and resource groups

## Metadata

- **ID:** `azure-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `azure`)

## Triggers

- `azure`
- `microsoft azure`
- `azure resource`
- `blob storage`
- `azure app service`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-manager', {
  /* input parameters */
});
```
