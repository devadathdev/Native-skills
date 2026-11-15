---
id: dns-manager
name: "DNS Manager"
version: 1.0.0
description: "Inspect, validate, and verify DNS records (A, AAAA, CNAME, MX, TXT) and zone files"
author: "AURA Team"
category: devops
tags:
  - "dns"
  - "dns record"
  - "cname"
  - "mx record"
  - "nameserver"
  - "dns lookup"
  - "zone file"
triggers:
  - "dns"
  - "dns record"
  - "cname"
  - "mx record"
  - "nameserver"
  - "dns lookup"
  - "zone file"
permissions:
  - type: network
    scope: [dns]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# DNS Manager

Inspect, validate, and verify DNS records (A, AAAA, CNAME, MX, TXT) and zone files

## Metadata

- **ID:** `dns-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `dns`)

## Triggers

- `dns`
- `dns record`
- `cname`
- `mx record`
- `nameserver`
- `dns lookup`
- `zone file`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('dns-manager', {
  /* input parameters */
});
```
