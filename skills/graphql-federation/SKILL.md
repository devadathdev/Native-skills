---
id: graphql-federation
name: "GraphQL Federation"
version: 1.0.0
description: "Inspect Apollo Federation subgraph schemas, @key directives, and supergraph router"
author: "AURA Team"
category: integration
tags:
  - "apollo federation"
  - "subgraph"
  - "supergraph"
  - "graphql gateway"
triggers:
  - "apollo federation"
  - "subgraph"
  - "supergraph"
  - "graphql gateway"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# GraphQL Federation

Inspect Apollo Federation subgraph schemas, @key directives, and supergraph router

## Metadata

- **ID:** `graphql-federation`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `apollo federation`
- `subgraph`
- `supergraph`
- `graphql gateway`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('graphql-federation', {
  /* input parameters */
});
```
