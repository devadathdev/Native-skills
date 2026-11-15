---
id: elasticsearch
name: "Elasticsearch"
version: 1.0.0
description: "Formulate Elasticsearch Query DSL, inspect index mappings, analyzers, and cluster health"
author: "AURA Team"
category: data
tags:
  - "elasticsearch"
  - "opensearch"
  - "query dsl"
  - "index mapping"
  - "elastic cluster"
triggers:
  - "elasticsearch"
  - "opensearch"
  - "query dsl"
  - "index mapping"
  - "elastic cluster"
permissions:
  - type: network
    scope: [elastic]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Elasticsearch

Formulate Elasticsearch Query DSL, inspect index mappings, analyzers, and cluster health

## Metadata

- **ID:** `elasticsearch`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `elastic`)

## Triggers

- `elasticsearch`
- `opensearch`
- `query dsl`
- `index mapping`
- `elastic cluster`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('elasticsearch', {
  /* input parameters */
});
```
