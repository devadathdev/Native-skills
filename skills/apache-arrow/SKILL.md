---
id: apache-arrow
name: "Apache Arrow Inspector"
version: 1.0.0
description: "Inspect in-memory Arrow RecordBatches, schemas, dictionary encoding, and IPC"
author: "AURA Team"
category: data
tags:
  - "arrow"
  - "record batch"
  - "arrow ipc"
  - "arrow schema"
triggers:
  - "arrow"
  - "record batch"
  - "arrow ipc"
  - "arrow schema"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Arrow Inspector

Inspect in-memory Arrow RecordBatches, schemas, dictionary encoding, and IPC

## Metadata

- **ID:** `apache-arrow`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `arrow`
- `record batch`
- `arrow ipc`
- `arrow schema`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-arrow', {
  /* input parameters */
});
```
