---
id: cloud-infrastructure
name: "Cloud Infrastructure"
version: 1.0.0
description: "Inspect and validate Infrastructure-as-Code (Terraform, CloudFormation, HCL) declarations"
author: "AURA Team"
category: devops
tags:
  - "terraform"
  - "cloud infrastructure"
  - "iac"
  - "cloudformation"
  - "hcl"
  - "infra check"
triggers:
  - "terraform"
  - "cloud infrastructure"
  - "iac"
  - "cloudformation"
  - "hcl"
  - "infra check"
permissions:
  - type: filesystem
    scope: [read, write]
  - type: api
    scope: [cloud]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Cloud Infrastructure

Inspect and validate Infrastructure-as-Code (Terraform, CloudFormation, HCL) declarations

## Metadata

- **ID:** `cloud-infrastructure`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)
- `api` (scope: `cloud`)

## Triggers

- `terraform`
- `cloud infrastructure`
- `iac`
- `cloudformation`
- `hcl`
- `infra check`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cloud-infrastructure', {
  /* input parameters */
});
```
