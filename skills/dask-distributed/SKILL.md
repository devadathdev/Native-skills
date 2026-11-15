---
id: dask-distributed
name: "Dask Distributed"
version: 1.0.0
description: "Inspect Dask task computation graphs, distributed workers, and chunked arrays"
author: "AURA Team"
category: data
tags:
  - "dask"
  - "dask distributed"
  - "task graph"
  - "chunked array"
triggers:
  - "dask"
  - "dask distributed"
  - "task graph"
  - "chunked array"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Dask Distributed

Inspect Dask task computation graphs, distributed workers, and chunked arrays

## Metadata

- **ID:** `dask-distributed`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `dask`
- `dask distributed`
- `task graph`
- `chunked array`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dask-distributed', {
  /* input parameters */
});
```
