---
id: json-rpc-server
name: "JSON-RPC Server"
version: 1.0.0
description: "Inspect JSON-RPC 2.0 request batching, method dispatchers, and error envelopes"
author: "AURA Team"
category: integration
tags:
  - "json rpc"
  - "jsonrpc 2.0"
  - "rpc batch"
  - "rpc method"
triggers:
  - "json rpc"
  - "jsonrpc 2.0"
  - "rpc batch"
  - "rpc method"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# JSON-RPC Server

Inspect JSON-RPC 2.0 request batching, method dispatchers, and error envelopes

## Metadata

- **ID:** `json-rpc-server`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `json rpc`
- `jsonrpc 2.0`
- `rpc batch`
- `rpc method`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('json-rpc-server', {
  /* input parameters */
});
```
