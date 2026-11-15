---
id: grpc-client
name: "gRPC Client"
version: 1.0.0
description: "Inspect Protocol Buffer (.proto) definitions and format gRPC Remote Procedure Calls"
author: "AURA Team"
category: integration
tags:
  - "grpc"
  - "protobuf"
  - "proto file"
  - "grpc service"
  - "rpc call"
  - "grpc client"
triggers:
  - "grpc"
  - "protobuf"
  - "proto file"
  - "grpc service"
  - "rpc call"
  - "grpc client"
permissions:
  - type: network
    scope: [grpc]
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# gRPC Client

Inspect Protocol Buffer (.proto) definitions and format gRPC Remote Procedure Calls

## Metadata

- **ID:** `grpc-client`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `grpc`)
- `filesystem` (scope: `read`)

## Triggers

- `grpc`
- `protobuf`
- `proto file`
- `grpc service`
- `rpc call`
- `grpc client`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('grpc-client', {
  /* input parameters */
});
```
