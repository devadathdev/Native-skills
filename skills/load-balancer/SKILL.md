---
id: load-balancer
name: "Load Balancer"
version: 1.0.0
description: "Configure Nginx, HAProxy, and Traefik reverse proxies, upstream pools, and health checks"
author: "AURA Team"
category: devops
tags:
  - "load balancer"
  - "nginx"
  - "haproxy"
  - "traefik"
  - "reverse proxy"
  - "upstream pool"
triggers:
  - "load balancer"
  - "nginx"
  - "haproxy"
  - "traefik"
  - "reverse proxy"
  - "upstream pool"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Load Balancer

Configure Nginx, HAProxy, and Traefik reverse proxies, upstream pools, and health checks

## Metadata

- **ID:** `load-balancer`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `load balancer`
- `nginx`
- `haproxy`
- `traefik`
- `reverse proxy`
- `upstream pool`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('load-balancer', {
  /* input parameters */
});
```
