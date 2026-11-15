---
id: websocket
name: "WebSocket Manager"
version: 1.0.0
description: "Simulate and test full-duplex WebSocket connections, frame exchange, and heartbeats"
author: "AURA Team"
category: integration
tags:
  - "websocket"
  - "ws"
  - "wss"
  - "socket connection"
  - "stream socket"
  - "socket client"
triggers:
  - "websocket"
  - "ws"
  - "wss"
  - "socket connection"
  - "stream socket"
  - "socket client"
permissions:
  - type: network
    scope: [websocket]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# WebSocket Manager

Simulate and test full-duplex WebSocket connections, frame exchange, and heartbeats

## Metadata

- **ID:** `websocket`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `websocket`)

## Triggers

- `websocket`
- `ws`
- `wss`
- `socket connection`
- `stream socket`
- `socket client`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('websocket', {
  /* input parameters */
});
```
