---
id: netlify-deployer
name: "Netlify Deployer"
version: 1.0.0
description: "Manage Netlify site deployments, build hooks, serverless redirects, and form configurations"
author: "AURA Team"
category: devops
tags:
  - "netlify"
  - "netlify deploy"
  - "netlify function"
  - "deploy preview"
  - "netlify site"
triggers:
  - "netlify"
  - "netlify deploy"
  - "netlify function"
  - "deploy preview"
  - "netlify site"
permissions:
  - type: api
    scope: [netlify]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Netlify Deployer

Manage Netlify site deployments, build hooks, serverless redirects, and form configurations

## Metadata

- **ID:** `netlify-deployer`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `netlify`)

## Triggers

- `netlify`
- `netlify deploy`
- `netlify function`
- `deploy preview`
- `netlify site`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('netlify-deployer', {
  /* input parameters */
});
```
