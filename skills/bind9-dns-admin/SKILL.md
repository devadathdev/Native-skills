---
id: bind9-dns-admin
name: "BIND9 DNS Admin"
version: 1.0.0
description: "Inspect named.conf declarations, DNS master/slave zones, and DNSSEC keys"
author: "AURA Team"
category: devops
tags:
  - "bind9"
  - "named conf"
  - "dnssec"
  - "zone master"
triggers:
  - "bind9"
  - "named conf"
  - "dnssec"
  - "zone master"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# BIND9 DNS Admin

Inspect named.conf declarations, DNS master/slave zones, and DNSSEC keys

## Metadata

- **ID:** `bind9-dns-admin`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `bind9`
- `named conf`
- `dnssec`
- `zone master`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('bind9-dns-admin', {
  /* input parameters */
});
```
