---
id: azure-app-service
name: "Azure App Service"
version: 1.0.0
description: "Inspect App Service deployment slots, scaling plans, and environment settings"
author: "AURA Team"
category: devops
tags:
  - "app service"
  - "azure web app"
  - "deployment slot"
  - "azure scaling"
triggers:
  - "app service"
  - "azure web app"
  - "deployment slot"
  - "azure scaling"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure App Service

Inspect App Service deployment slots, scaling plans, and environment settings

## Metadata

- **ID:** `azure-app-service`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `app service`
- `azure web app`
- `deployment slot`
- `azure scaling`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-app-service', {
  /* input parameters */
});
```
