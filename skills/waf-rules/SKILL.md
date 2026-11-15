---
id: waf-rules
name: "WAF Ruleset Manager"
version: 1.0.0
description: "Compile Web Application Firewall filtering rules against SQLi, XSS, and path traversal vectors"
author: "AURA Team"
category: security
tags:
  - "waf rules"
  - "modsecurity"
  - "firewall rule"
  - "sqli protection"
  - "xss filter"
triggers:
  - "waf rules"
  - "modsecurity"
  - "firewall rule"
  - "sqli protection"
  - "xss filter"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# WAF Ruleset Manager

Compile Web Application Firewall filtering rules against SQLi, XSS, and path traversal vectors

## Metadata

- **ID:** `waf-rules`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `waf rules`
- `modsecurity`
- `firewall rule`
- `sqli protection`
- `xss filter`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('waf-rules', {
  /* input parameters */
});
```
