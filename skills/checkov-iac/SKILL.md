---
id: checkov-iac
name: "Checkov IaC Scanner"
version: 1.0.0
description: "Inspect Checkov static analysis security policies on Terraform, CloudFormation, and K8s"
author: "AURA Team"
category: security
tags:
  - "checkov"
  - "iac security"
  - "terraform security"
  - "bridgecrew"
triggers:
  - "checkov"
  - "iac security"
  - "terraform security"
  - "bridgecrew"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Checkov IaC Scanner

Inspect Checkov static analysis security policies on Terraform, CloudFormation, and K8s

## Metadata

- **ID:** `checkov-iac`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `checkov`
- `iac security`
- `terraform security`
- `bridgecrew`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('checkov-iac', {
  /* input parameters */
});
```
