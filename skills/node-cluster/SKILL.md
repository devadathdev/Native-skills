---
id: node-cluster
name: "Node.js Cluster Manager"
version: 1.0.0
description: "Inspect Node.js cluster worker forks, IPC channels, and round-robin workers"
author: "AURA Team"
category: development
tags:
  - "node cluster"
  - "worker threads"
  - "ipc message"
  - "multi process node"
triggers:
  - "node cluster"
  - "worker threads"
  - "ipc message"
  - "multi process node"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Node.js Cluster Manager

Inspect Node.js cluster worker forks, IPC channels, and round-robin workers

## Metadata

- **ID:** `node-cluster`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `node cluster`
- `worker threads`
- `ipc message`
- `multi process node`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('node-cluster', {
  /* input parameters */
});
```
