---
id: penetration-testing
name: "Penetration Testing Helper"
version: 1.0.0
description: "Assess external attack surface, open service ports, and cryptographic protocol deprecations"
author: "AURA Team"
category: security
tags:
  - "pentest"
  - "penetration testing"
  - "attack surface"
  - "security assessment"
  - "port report"
triggers:
  - "pentest"
  - "penetration testing"
  - "attack surface"
  - "security assessment"
  - "port report"
permissions:
  - type: network
    scope: [scan]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Penetration Testing Helper

Assess external attack surface, open service ports, and cryptographic protocol deprecations

## Metadata

- **ID:** `penetration-testing`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `scan`)

## Triggers

- `pentest`
- `penetration testing`
- `attack surface`
- `security assessment`
- `port report`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('penetration-testing', {
  /* input parameters */
});
```
