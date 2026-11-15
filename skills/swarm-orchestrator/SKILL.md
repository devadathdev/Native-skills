---
id: swarm-orchestrator
name: "Swarm Orchestrator"
version: 1.0.0
description: "Orchestrate multi-agent swarms, coordinate role handoffs, and aggregate agent consensus"
author: "AURA Team"
category: ai
tags:
  - "swarm"
  - "multi agent"
  - "agent swarm"
  - "swarm coordinate"
  - "agent team"
  - "consensus"
triggers:
  - "swarm"
  - "multi agent"
  - "agent swarm"
  - "swarm coordinate"
  - "agent team"
  - "consensus"
permissions:
  - type: api
    scope: [swarm]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Swarm Orchestrator

Orchestrate multi-agent swarms, coordinate role handoffs, and aggregate agent consensus

## Metadata

- **ID:** `swarm-orchestrator`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `swarm`)

## Triggers

- `swarm`
- `multi agent`
- `agent swarm`
- `swarm coordinate`
- `agent team`
- `consensus`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('swarm-orchestrator', {
  /* input parameters */
});
```
