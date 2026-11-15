---
id: bigquery-client
name: "BigQuery Client"
version: 1.0.0
description: "Inspect Google BigQuery datasets, optimize table partitioning/clustering, and run query dry runs"
author: "AURA Team"
category: data
tags:
  - "bigquery"
  - "google bigquery"
  - "bq sql"
  - "partitioned table"
  - "clustered table"
triggers:
  - "bigquery"
  - "google bigquery"
  - "bq sql"
  - "partitioned table"
  - "clustered table"
permissions:
  - type: api
    scope: [gcp]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# BigQuery Client

Inspect Google BigQuery datasets, optimize table partitioning/clustering, and run query dry runs

## Metadata

- **ID:** `bigquery-client`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `gcp`)

## Triggers

- `bigquery`
- `google bigquery`
- `bq sql`
- `partitioned table`
- `clustered table`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('bigquery-client', {
  /* input parameters */
});
```
