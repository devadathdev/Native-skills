---
id: tcp-proxy-forwarder
name: "TCP Proxy Forwarder"
version: 1.0.0
description: "Inspect raw TCP socket forwarding, keepalive intervals, and connection timeouts"
author: "AURA Team"
category: integration
tags:
  - "tcp proxy"
  - "socket forward"
  - "port forward"
  - "tcp stream"
triggers:
  - "tcp proxy"
  - "socket forward"
  - "port forward"
  - "tcp stream"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# TCP Proxy Forwarder

Inspect raw TCP socket forwarding, keepalive intervals, and connection timeouts

## Metadata

- **ID:** `tcp-proxy-forwarder`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `tcp proxy`
- `socket forward`
- `port forward`
- `tcp stream`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('tcp-proxy-forwarder', {
  /* input parameters */
});
```
