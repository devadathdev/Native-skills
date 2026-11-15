---
id: meilisearch-client
name: "Meilisearch Client"
version: 1.0.0
description: "Inspect Meilisearch document indexes, ranking rules, synonyms, and filterable attributes"
author: "AURA Team"
category: web
tags:
  - "meilisearch"
  - "instant search engine"
  - "ranking rules"
  - "meili search"
triggers:
  - "meilisearch"
  - "instant search engine"
  - "ranking rules"
  - "meili search"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Meilisearch Client

Inspect Meilisearch document indexes, ranking rules, synonyms, and filterable attributes

## Metadata

- **ID:** `meilisearch-client`
- **Category:** `web`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `meilisearch`
- `instant search engine`
- `ranking rules`
- `meili search`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('meilisearch-client', {
  /* input parameters */
});
```
