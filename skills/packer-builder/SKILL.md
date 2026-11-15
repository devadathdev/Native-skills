---
id: packer-builder
name: "HashiCorp Packer"
version: 1.0.0
description: "Inspect Packer HCL/JSON templates, AMI/VHD builders, and shell provisioners"
author: "AURA Team"
category: devops
tags:
  - "packer"
  - "hashicorp packer"
  - "machine image"
  - "ami builder"
triggers:
  - "packer"
  - "hashicorp packer"
  - "machine image"
  - "ami builder"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# HashiCorp Packer

Inspect Packer HCL/JSON templates, AMI/VHD builders, and shell provisioners

## Metadata

- **ID:** `packer-builder`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `packer`
- `hashicorp packer`
- `machine image`
- `ami builder`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('packer-builder', {
  /* input parameters */
});
```
