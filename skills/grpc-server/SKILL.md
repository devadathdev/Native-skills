---
id: grpc-server
name: "gRPC Server Engine"
version: 1.0.0
description: "Inspect gRPC server implementation handlers, interceptors, and health checks"
author: "AURA Team"
category: integration
tags:
  - "grpc server"
  - "grpc handler"
  - "protobuf server"
  - "grpc port"
triggers:
  - "grpc server"
  - "grpc handler"
  - "protobuf server"
  - "grpc port"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# gRPC Server Engine

Inspect gRPC server implementation handlers, interceptors, and health checks

## Metadata

- **ID:** `grpc-server`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `grpc server`
- `grpc handler`
- `protobuf server`
- `grpc port`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('grpc-server', {
  /* input parameters */
});
```
