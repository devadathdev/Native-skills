---
id: vertica-analytics
name: "Vertica Analytics"
version: 1.0.0
description: "Inspect Vertica columnar projections, segmented nodes, and analytical execution"
author: "AURA Team"
category: data
tags:
  - "vertica"
  - "vertica projection"
  - "columnar edw"
  - "hp vertica"
triggers:
  - "vertica"
  - "vertica projection"
  - "columnar edw"
  - "hp vertica"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vertica Analytics

Inspect Vertica columnar projections, segmented nodes, and analytical execution

## Metadata

- **ID:** `vertica-analytics`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `vertica`
- `vertica projection`
- `columnar edw`
- `hp vertica`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vertica-analytics', {
  /* input parameters */
});
```
