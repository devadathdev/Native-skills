---
id: cloudflare-manager
name: "Cloudflare Manager"
version: 1.0.0
description: "Manage Cloudflare Workers, KV namespaces, DNS records, SSL/TLS settings, and WAF rulesets"
author: "AURA Team"
category: devops
tags:
  - "cloudflare"
  - "cloudflare worker"
  - "cloudflare kv"
  - "cloudflare dns"
  - "cloudflare waf"
triggers:
  - "cloudflare"
  - "cloudflare worker"
  - "cloudflare kv"
  - "cloudflare dns"
  - "cloudflare waf"
permissions:
  - type: network
    scope: [cloudflare]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Cloudflare Manager

Manage Cloudflare Workers, KV namespaces, DNS records, SSL/TLS settings, and WAF rulesets

## Metadata

- **ID:** `cloudflare-manager`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `cloudflare`)

## Triggers

- `cloudflare`
- `cloudflare worker`
- `cloudflare kv`
- `cloudflare dns`
- `cloudflare waf`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cloudflare-manager', {
  /* input parameters */
});
```
