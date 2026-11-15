---
id: env-manager
name: "Environment Manager"
version: 1.0.0
description: "Parse, validate, mask, and synchronize .env configuration files across environments"
author: "AURA Team"
category: devops
tags:
  - "env"
  - "dotenv"
  - "environment variables"
  - "parse env"
  - "validate env"
  - "env file"
triggers:
  - "env"
  - "dotenv"
  - "environment variables"
  - "parse env"
  - "validate env"
  - "env file"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# Environment Manager

Parse, validate, mask, and synchronize .env configuration files across environments

## Metadata

- **ID:** `env-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `env`
- `dotenv`
- `environment variables`
- `parse env`
- `validate env`
- `env file`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('env-manager', {
  /* input parameters */
});
```
