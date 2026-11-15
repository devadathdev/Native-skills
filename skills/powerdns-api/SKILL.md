---
id: powerdns-api
name: "PowerDNS API"
version: 1.0.0
description: "Inspect PowerDNS authoritative server zones, cryptokeys, and metadata API"
author: "AURA Team"
category: devops
tags:
  - "powerdns"
  - "pdns"
  - "powerdns api"
  - "authoritative dns"
triggers:
  - "powerdns"
  - "pdns"
  - "powerdns api"
  - "authoritative dns"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# PowerDNS API

Inspect PowerDNS authoritative server zones, cryptokeys, and metadata API

## Metadata

- **ID:** `powerdns-api`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `powerdns`
- `pdns`
- `powerdns api`
- `authoritative dns`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('powerdns-api', {
  /* input parameters */
});
```
