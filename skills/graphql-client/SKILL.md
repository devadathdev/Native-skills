---
id: graphql-client
name: "GraphQL Client"
version: 1.0.0
description: "Parse, validate, and dispatch GraphQL queries and mutations with variables and headers"
author: "AURA Team"
category: integration
tags:
  - "graphql"
  - "graphql query"
  - "mutation"
  - "schema introspection"
  - "gql"
  - "graphql client"
triggers:
  - "graphql"
  - "graphql query"
  - "mutation"
  - "schema introspection"
  - "gql"
  - "graphql client"
permissions:
  - type: network
    scope: [graphql]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# GraphQL Client

Parse, validate, and dispatch GraphQL queries and mutations with variables and headers

## Metadata

- **ID:** `graphql-client`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `graphql`)

## Triggers

- `graphql`
- `graphql query`
- `mutation`
- `schema introspection`
- `gql`
- `graphql client`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('graphql-client', {
  /* input parameters */
});
```
