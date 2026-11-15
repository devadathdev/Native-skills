---
id: azure-monitor
name: "Azure Monitor"
version: 1.0.0
description: "Inspect Azure Monitor log analytics workspace, Kusto (KQL) queries, and action groups"
author: "AURA Team"
category: devops
tags:
  - "azure monitor"
  - "kql query"
  - "log analytics"
  - "azure action group"
triggers:
  - "azure monitor"
  - "kql query"
  - "log analytics"
  - "azure action group"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Azure Monitor

Inspect Azure Monitor log analytics workspace, Kusto (KQL) queries, and action groups

## Metadata

- **ID:** `azure-monitor`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `azure monitor`
- `kql query`
- `log analytics`
- `azure action group`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('azure-monitor', {
  /* input parameters */
});
```
