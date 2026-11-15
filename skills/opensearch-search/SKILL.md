---
id: opensearch-search
name: "OpenSearch Client"
version: 1.0.0
description: "Inspect OpenSearch search clusters, neural search vector pipelines, and Dashboards"
author: "AURA Team"
category: data
tags:
  - "opensearch"
  - "neural search"
  - "opensearch cluster"
  - "search index"
triggers:
  - "opensearch"
  - "neural search"
  - "opensearch cluster"
  - "search index"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# OpenSearch Client

Inspect OpenSearch search clusters, neural search vector pipelines, and Dashboards

## Metadata

- **ID:** `opensearch-search`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `opensearch`
- `neural search`
- `opensearch cluster`
- `search index`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('opensearch-search', {
  /* input parameters */
});
```
