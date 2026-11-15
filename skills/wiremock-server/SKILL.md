---
id: wiremock-server
name: "WireMock Server"
version: 1.0.0
description: "Inspect WireMock stub mappings, request matching criteria, and fault injection"
author: "AURA Team"
category: integration
tags:
  - "wiremock"
  - "stub mapping"
  - "mock api wiremock"
  - "http stub"
triggers:
  - "wiremock"
  - "stub mapping"
  - "mock api wiremock"
  - "http stub"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# WireMock Server

Inspect WireMock stub mappings, request matching criteria, and fault injection

## Metadata

- **ID:** `wiremock-server`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `wiremock`
- `stub mapping`
- `mock api wiremock`
- `http stub`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('wiremock-server', {
  /* input parameters */
});
```
