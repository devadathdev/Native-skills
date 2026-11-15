---
id: gcp-cloud-monitoring
name: "GCP Cloud Monitoring"
version: 1.0.0
description: "Inspect Google Cloud Monitoring alert policies, MQL queries, and uptime checks"
author: "AURA Team"
category: devops
tags:
  - "gcp monitoring"
  - "stackdriver"
  - "mql query"
  - "uptime check gcp"
triggers:
  - "gcp monitoring"
  - "stackdriver"
  - "mql query"
  - "uptime check gcp"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GCP Cloud Monitoring

Inspect Google Cloud Monitoring alert policies, MQL queries, and uptime checks

## Metadata

- **ID:** `gcp-cloud-monitoring`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `gcp monitoring`
- `stackdriver`
- `mql query`
- `uptime check gcp`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('gcp-cloud-monitoring', {
  /* input parameters */
});
```
