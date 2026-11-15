---
id: zeromq-sockets
name: "ZeroMQ Sockets"
version: 1.0.0
description: "Inspect ZeroMQ socket patterns (PUB/SUB, PUSH/PULL, REQ/REP) and endpoints"
author: "AURA Team"
category: data
tags:
  - "zeromq"
  - "0mq"
  - "zmq"
  - "pub sub socket"
triggers:
  - "zeromq"
  - "0mq"
  - "zmq"
  - "pub sub socket"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# ZeroMQ Sockets

Inspect ZeroMQ socket patterns (PUB/SUB, PUSH/PULL, REQ/REP) and endpoints

## Metadata

- **ID:** `zeromq-sockets`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `zeromq`
- `0mq`
- `zmq`
- `pub sub socket`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('zeromq-sockets', {
  /* input parameters */
});
```
