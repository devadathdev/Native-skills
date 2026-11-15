---
id: google-cloud-spanner
name: "Google Cloud Spanner"
version: 1.0.0
description: "Inspect TrueTime distributed transactions, interleaving tables, and instances"
author: "AURA Team"
category: data
tags:
  - "cloud spanner"
  - "spanner"
  - "truetime"
  - "distributed transaction"
triggers:
  - "cloud spanner"
  - "spanner"
  - "truetime"
  - "distributed transaction"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google Cloud Spanner

Inspect TrueTime distributed transactions, interleaving tables, and instances

## Metadata

- **ID:** `google-cloud-spanner`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `cloud spanner`
- `spanner`
- `truetime`
- `distributed transaction`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('google-cloud-spanner', {
  /* input parameters */
});
```
