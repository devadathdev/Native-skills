---
id: vercel-deployer
name: "Vercel Deployer"
version: 1.0.0
description: "Inspect Vercel projects, deployments, edge functions, environment variables, and domains"
author: "AURA Team"
category: devops
tags:
  - "vercel"
  - "vercel deploy"
  - "nextjs deploy"
  - "preview deployment"
  - "edge function"
triggers:
  - "vercel"
  - "vercel deploy"
  - "nextjs deploy"
  - "preview deployment"
  - "edge function"
permissions:
  - type: api
    scope: [vercel]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Vercel Deployer

Inspect Vercel projects, deployments, edge functions, environment variables, and domains

## Metadata

- **ID:** `vercel-deployer`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `vercel`)

## Triggers

- `vercel`
- `vercel deploy`
- `nextjs deploy`
- `preview deployment`
- `edge function`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vercel-deployer', {
  /* input parameters */
});
```
