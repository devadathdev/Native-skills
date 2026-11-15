---
id: terraform-generator
name: "Terraform Generator"
version: 1.0.0
description: "Generate and validate HashiCorp HCL Terraform configuration modules and state declarations"
author: "AURA Team"
category: devops
tags:
  - "terraform generate"
  - "hcl module"
  - "terraform plan"
  - "terraform config"
  - "iac generate"
triggers:
  - "terraform generate"
  - "hcl module"
  - "terraform plan"
  - "terraform config"
  - "iac generate"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Terraform Generator

Generate and validate HashiCorp HCL Terraform configuration modules and state declarations

## Metadata

- **ID:** `terraform-generator`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `terraform generate`
- `hcl module`
- `terraform plan`
- `terraform config`
- `iac generate`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('terraform-generator', {
  /* input parameters */
});
```
