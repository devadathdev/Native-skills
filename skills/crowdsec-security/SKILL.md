---
id: crowdsec-security
name: "CrowdSec IPS"
version: 1.0.0
description: "Inspect CrowdSec behavioral analysis scenarios, ban bouncers, and community blocklists"
author: "AURA Team"
category: security
tags:
  - "crowdsec"
  - "intrusion prevention"
  - "community blocklist"
  - "bouncer"
triggers:
  - "crowdsec"
  - "intrusion prevention"
  - "community blocklist"
  - "bouncer"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# CrowdSec IPS

Inspect CrowdSec behavioral analysis scenarios, ban bouncers, and community blocklists

## Metadata

- **ID:** `crowdsec-security`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `crowdsec`
- `intrusion prevention`
- `community blocklist`
- `bouncer`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('crowdsec-security', {
  /* input parameters */
});
```
