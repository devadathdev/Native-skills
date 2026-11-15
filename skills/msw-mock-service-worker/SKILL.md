---
id: msw-mock-service-worker
name: "Mock Service Worker (MSW)"
version: 1.0.0
description: "Inspect MSW network request handlers (rest/graphql), response resolvers, and overrides"
author: "AURA Team"
category: development
tags:
  - "msw"
  - "mock service worker"
  - "http mock browser"
  - "rest handler"
triggers:
  - "msw"
  - "mock service worker"
  - "http mock browser"
  - "rest handler"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Mock Service Worker (MSW)

Inspect MSW network request handlers (rest/graphql), response resolvers, and overrides

## Metadata

- **ID:** `msw-mock-service-worker`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `msw`
- `mock service worker`
- `http mock browser`
- `rest handler`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('msw-mock-service-worker', {
  /* input parameters */
});
```
