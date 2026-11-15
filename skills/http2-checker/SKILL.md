---
id: http2-checker
name: "HTTP/2 Checker"
version: 1.0.0
description: "Verify HTTP/2 protocol support, ALPN negotiation, stream multiplexing, and HPACK headers"
author: "AURA Team"
category: integration
tags:
  - "http2"
  - "h2"
  - "http/2"
  - "alpn"
  - "multiplexing"
  - "hpack"
triggers:
  - "http2"
  - "h2"
  - "http/2"
  - "alpn"
  - "multiplexing"
  - "hpack"
permissions:
  - type: network
    scope: [http]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# HTTP/2 Checker

Verify HTTP/2 protocol support, ALPN negotiation, stream multiplexing, and HPACK headers

## Metadata

- **ID:** `http2-checker`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `http`)

## Triggers

- `http2`
- `h2`
- `http/2`
- `alpn`
- `multiplexing`
- `hpack`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('http2-checker', {
  /* input parameters */
});
```
