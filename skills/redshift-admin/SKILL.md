---
id: redshift-admin
name: "AWS Redshift Admin"
version: 1.0.0
description: "Inspect Redshift distribution styles, sort keys, WLM workload queues, and vacuum"
author: "AURA Team"
category: data
tags:
  - "redshift"
  - "aws redshift"
  - "diststyle"
  - "sortkey"
triggers:
  - "redshift"
  - "aws redshift"
  - "diststyle"
  - "sortkey"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# AWS Redshift Admin

Inspect Redshift distribution styles, sort keys, WLM workload queues, and vacuum

## Metadata

- **ID:** `redshift-admin`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `redshift`
- `aws redshift`
- `diststyle`
- `sortkey`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('redshift-admin', {
  /* input parameters */
});
```
