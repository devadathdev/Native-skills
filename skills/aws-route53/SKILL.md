---
id: aws-route53
name: "AWS Route 53"
version: 1.0.0
description: "Inspect Route 53 hosted zones, alias records, latency-based routing, and health checks"
author: "AURA Team"
category: devops
tags:
  - "route53"
  - "aws route 53"
  - "hosted zone"
  - "alias record"
triggers:
  - "route53"
  - "aws route 53"
  - "hosted zone"
  - "alias record"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS Route 53

Inspect Route 53 hosted zones, alias records, latency-based routing, and health checks

## Metadata

- **ID:** `aws-route53`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `route53`
- `aws route 53`
- `hosted zone`
- `alias record`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-route53', {
  /* input parameters */
});
```
