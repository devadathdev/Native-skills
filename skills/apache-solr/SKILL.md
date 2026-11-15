---
id: apache-solr
name: "Apache Solr"
version: 1.0.0
description: "Inspect Solr cores, schema.xml field types, managed resources, and faceting"
author: "AURA Team"
category: data
tags:
  - "solr"
  - "apache solr"
  - "solr core"
  - "solr schema"
triggers:
  - "solr"
  - "apache solr"
  - "solr core"
  - "solr schema"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Solr

Inspect Solr cores, schema.xml field types, managed resources, and faceting

## Metadata

- **ID:** `apache-solr`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `solr`
- `apache solr`
- `solr core`
- `solr schema`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-solr', {
  /* input parameters */
});
```
