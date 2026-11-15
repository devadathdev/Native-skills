---
id: api-design
name: "API Design"
version: 1.0.0
description: "Design and validate OpenAPI/Swagger schemas and REST contracts"
author: "AURA Team"
category: development
tags:
  - "api design"
  - "openapi"
  - "swagger"
  - "contract"
  - "api spec"
triggers:
  - "api design"
  - "openapi"
  - "swagger"
  - "contract"
  - "api spec"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# API Design

Design and validate OpenAPI/Swagger schemas and REST contracts

## Metadata

- **ID:** `api-design`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `api design`
- `openapi`
- `swagger`
- `contract`
- `api spec`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('api-design', {
  /* input parameters */
});
```
