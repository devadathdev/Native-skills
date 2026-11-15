---
id: aws-rds-inspector
name: "AWS RDS Inspector"
version: 1.0.0
description: "Inspect RDS Multi-AZ instances, Aurora serverless clusters, and automated backups"
author: "AURA Team"
category: data
tags:
  - "aws rds"
  - "aurora db"
  - "rds multi az"
  - "rds snapshot"
triggers:
  - "aws rds"
  - "aurora db"
  - "rds multi az"
  - "rds snapshot"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS RDS Inspector

Inspect RDS Multi-AZ instances, Aurora serverless clusters, and automated backups

## Metadata

- **ID:** `aws-rds-inspector`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `aws rds`
- `aurora db`
- `rds multi az`
- `rds snapshot`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('aws-rds-inspector', {
  /* input parameters */
});
```
