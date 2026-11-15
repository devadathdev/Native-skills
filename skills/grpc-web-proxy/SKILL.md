---
id: grpc-web-proxy
name: "gRPC-Web Proxy"
version: 1.0.0
description: "Inspect gRPC-Web bridge transformations, CORS preflight for web browsers, and framing"
author: "AURA Team"
category: integration
tags:
  - "grpc web"
  - "grpc browser"
  - "grpc web proxy"
  - "grpc json"
triggers:
  - "grpc web"
  - "grpc browser"
  - "grpc web proxy"
  - "grpc json"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# gRPC-Web Proxy

Inspect gRPC-Web bridge transformations, CORS preflight for web browsers, and framing

## Metadata

- **ID:** `grpc-web-proxy`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `grpc web`
- `grpc browser`
- `grpc web proxy`
- `grpc json`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('grpc-web-proxy', {
  /* input parameters */
});
```
