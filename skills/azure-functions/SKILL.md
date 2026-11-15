---
id: azure-functions
name: "Azure Functions"
version: 1.0.0
description: "Inspect Azure Functions trigger bindings (HTTP, Queue, Cosmos), and runtime plans"
author: "AURA Team"
category: devops
tags:
  - "azure functions"
  - "serverless azure"
  - "function binding"
  - "host json"
triggers:
  - "azure functions"
  - "serverless azure"
  - "function binding"
  - "host json"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure Functions

Inspect Azure Functions trigger bindings (HTTP, Queue, Cosmos), and runtime plans

## Metadata

- **ID:** `azure-functions`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure functions`
- `serverless azure`
- `function binding`
- `host json`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-functions', {
  /* input parameters */
});
```
