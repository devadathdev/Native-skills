---
id: aspnet-core
name: "ASP.NET Core"
version: 1.0.0
description: "Inspect ASP.NET Core controllers, Minimal APIs, middleware, and appsettings"
author: "AURA Team"
category: development
tags:
  - "aspnet"
  - "dotnet core"
  - "minimal api"
  - "csharp web"
triggers:
  - "aspnet"
  - "dotnet core"
  - "minimal api"
  - "csharp web"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ASP.NET Core

Inspect ASP.NET Core controllers, Minimal APIs, middleware, and appsettings

## Metadata

- **ID:** `aspnet-core`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aspnet`
- `dotnet core`
- `minimal api`
- `csharp web`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aspnet-core', {
  /* input parameters */
});
```
