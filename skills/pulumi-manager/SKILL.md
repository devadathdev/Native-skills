---
id: pulumi-manager
name: "Pulumi Manager"
version: 1.0.0
description: "Manage multi-language Infrastructure-as-Code stacks, resource graphs, and Pulumi previews"
author: "AURA Team"
category: devops
tags:
  - "pulumi"
  - "pulumi stack"
  - "pulumi preview"
  - "pulumi up"
  - "pulumi iac"
triggers:
  - "pulumi"
  - "pulumi stack"
  - "pulumi preview"
  - "pulumi up"
  - "pulumi iac"
permissions:
  - type: api
    scope: [pulumi]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Pulumi Manager

Manage multi-language Infrastructure-as-Code stacks, resource graphs, and Pulumi previews

## Metadata

- **ID:** `pulumi-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `pulumi`)

## Triggers

- `pulumi`
- `pulumi stack`
- `pulumi preview`
- `pulumi up`
- `pulumi iac`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pulumi-manager', {
  /* input parameters */
});
```
