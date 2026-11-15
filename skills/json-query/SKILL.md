---
id: json-query
name: "JSON Query"
version: 1.0.0
description: "Extract, filter, and project data from complex JSON structures using path expressions"
author: "AURA Team"
category: data
tags:
  - "json query"
  - "jsonpath"
  - "query json"
  - "jq"
  - "filter json"
  - "extract json"
triggers:
  - "json query"
  - "jsonpath"
  - "query json"
  - "jq"
  - "filter json"
  - "extract json"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/extended/index.ts
---

# JSON Query

Extract, filter, and project data from complex JSON structures using path expressions

## Metadata

- **ID:** `json-query`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `json query`
- `jsonpath`
- `query json`
- `jq`
- `filter json`
- `extract json`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('json-query', {
  /* input parameters */
});
```
