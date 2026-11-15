---
id: aws-cloudfront
name: "AWS CloudFront CDN"
version: 1.0.0
description: "Inspect CloudFront distribution origins, cache behaviors, OAC access, and edge functions"
author: "AURA Team"
category: web
tags:
  - "cloudfront"
  - "aws cdn"
  - "cache behavior"
  - "origin access"
triggers:
  - "cloudfront"
  - "aws cdn"
  - "cache behavior"
  - "origin access"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS CloudFront CDN

Inspect CloudFront distribution origins, cache behaviors, OAC access, and edge functions

## Metadata

- **ID:** `aws-cloudfront`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cloudfront`
- `aws cdn`
- `cache behavior`
- `origin access`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-cloudfront', {
  /* input parameters */
});
```
