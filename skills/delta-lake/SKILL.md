---
id: delta-lake
name: "Delta Lake Storage"
version: 1.0.0
description: "Inspect Delta Lake transaction logs (_delta_log), ACID updates, and time-travel"
author: "AURA Team"
category: data
tags:
  - "delta lake"
  - "delta table"
  - "time travel data"
  - "acid data lake"
triggers:
  - "delta lake"
  - "delta table"
  - "time travel data"
  - "acid data lake"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Delta Lake Storage

Inspect Delta Lake transaction logs (_delta_log), ACID updates, and time-travel

## Metadata

- **ID:** `delta-lake`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `delta lake`
- `delta table`
- `time travel data`
- `acid data lake`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('delta-lake', {
  /* input parameters */
});
```
