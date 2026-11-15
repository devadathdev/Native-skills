---
id: web-vitals
name: "Core Web Vitals"
version: 1.0.0
description: "Estimate and inspect Core Web Vitals metrics: LCP (Largest Contentful Paint), FID, CLS, and INP"
author: "AURA Team"
category: development
tags:
  - "web vitals"
  - "core web vitals"
  - "lcp"
  - "fid"
  - "cls"
  - "inp"
  - "page speed"
triggers:
  - "web vitals"
  - "core web vitals"
  - "lcp"
  - "fid"
  - "cls"
  - "inp"
  - "page speed"
permissions:
  - type: network
    scope: [web]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Core Web Vitals

Estimate and inspect Core Web Vitals metrics: LCP (Largest Contentful Paint), FID, CLS, and INP

## Metadata

- **ID:** `web-vitals`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `web`)

## Triggers

- `web vitals`
- `core web vitals`
- `lcp`
- `fid`
- `cls`
- `inp`
- `page speed`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('web-vitals', {
  /* input parameters */
});
```
