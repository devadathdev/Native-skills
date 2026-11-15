---
id: http3-quic
name: "HTTP/3 & QUIC Inspector"
version: 1.0.0
description: "Inspect HTTP/3 and UDP QUIC protocol availability, 0-RTT handshakes, and Alt-Svc headers"
author: "AURA Team"
category: integration
tags:
  - "http3"
  - "http/3"
  - "quic"
  - "udp http"
  - "alt-svc"
  - "0-rtt"
triggers:
  - "http3"
  - "http/3"
  - "quic"
  - "udp http"
  - "alt-svc"
  - "0-rtt"
permissions:
  - type: network
    scope: [quic]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# HTTP/3 & QUIC Inspector

Inspect HTTP/3 and UDP QUIC protocol availability, 0-RTT handshakes, and Alt-Svc headers

## Metadata

- **ID:** `http3-quic`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `quic`)

## Triggers

- `http3`
- `http/3`
- `quic`
- `udp http`
- `alt-svc`
- `0-rtt`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('http3-quic', {
  /* input parameters */
});
```
