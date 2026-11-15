---
id: pact-contract-testing
name: "Pact Contract Testing"
version: 1.0.0
description: "Inspect Consumer-Driven Contract Pact files, provider verification, and broker sync"
author: "AURA Team"
category: development
tags:
  - "pact"
  - "contract testing"
  - "pact broker"
  - "consumer contract"
triggers:
  - "pact"
  - "contract testing"
  - "pact broker"
  - "consumer contract"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Pact Contract Testing

Inspect Consumer-Driven Contract Pact files, provider verification, and broker sync

## Metadata

- **ID:** `pact-contract-testing`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `pact`
- `contract testing`
- `pact broker`
- `consumer contract`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('pact-contract-testing', {
  /* input parameters */
});
```
