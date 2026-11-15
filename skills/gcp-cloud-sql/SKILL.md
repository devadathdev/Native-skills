---
id: gcp-cloud-sql
name: "Google Cloud SQL"
version: 1.0.0
description: "Inspect Cloud SQL MySQL/Postgres instances, high-availability replicas, and flags"
author: "AURA Team"
category: data
tags:
  - "cloud sql"
  - "gcp database"
  - "cloud sql replica"
  - "cloud sql backup"
triggers:
  - "cloud sql"
  - "gcp database"
  - "cloud sql replica"
  - "cloud sql backup"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Google Cloud SQL

Inspect Cloud SQL MySQL/Postgres instances, high-availability replicas, and flags

## Metadata

- **ID:** `gcp-cloud-sql`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cloud sql`
- `gcp database`
- `cloud sql replica`
- `cloud sql backup`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-cloud-sql', {
  /* input parameters */
});
```
