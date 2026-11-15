---
id: apache-hudi
name: "Apache Hudi"
version: 1.0.0
description: "Inspect Apache Hudi timeline, copy-on-write vs merge-on-read tables, and compaction"
author: "AURA Team"
category: data
tags:
  - "hudi"
  - "apache hudi"
  - "copy on write"
  - "merge on read"
triggers:
  - "hudi"
  - "apache hudi"
  - "copy on write"
  - "merge on read"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Hudi

Inspect Apache Hudi timeline, copy-on-write vs merge-on-read tables, and compaction

## Metadata

- **ID:** `apache-hudi`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `hudi`
- `apache hudi`
- `copy on write`
- `merge on read`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-hudi', {
  /* input parameters */
});
```
