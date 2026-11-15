---
id: apache-ignite
name: "Apache Ignite"
version: 1.0.0
description: "Inspect Ignite distributed caching, ANSI-99 SQL grid, and persistent memory"
author: "AURA Team"
category: data
tags:
  - "ignite"
  - "apache ignite"
  - "memory grid"
  - "distributed sql cache"
triggers:
  - "ignite"
  - "apache ignite"
  - "memory grid"
  - "distributed sql cache"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Ignite

Inspect Ignite distributed caching, ANSI-99 SQL grid, and persistent memory

## Metadata

- **ID:** `apache-ignite`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `ignite`
- `apache ignite`
- `memory grid`
- `distributed sql cache`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-ignite', {
  /* input parameters */
});
```
