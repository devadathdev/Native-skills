---
id: apache-beam
name: "Apache Beam"
version: 1.0.0
description: "Inspect Beam unified batch and streaming pipelines, PCollections, and runner choices"
author: "AURA Team"
category: data
tags:
  - "apache beam"
  - "beam pipeline"
  - "pcollection"
  - "dataflow runner"
triggers:
  - "apache beam"
  - "beam pipeline"
  - "pcollection"
  - "dataflow runner"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Beam

Inspect Beam unified batch and streaming pipelines, PCollections, and runner choices

## Metadata

- **ID:** `apache-beam`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `apache beam`
- `beam pipeline`
- `pcollection`
- `dataflow runner`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-beam', {
  /* input parameters */
});
```
