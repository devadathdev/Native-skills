---
id: docker-compose-validator
name: "Docker Compose Validator"
version: 1.0.0
description: "Inspect docker-compose.yml services, volume mounts, port mappings, and networks"
author: "AURA Team"
category: devops
tags:
  - "docker compose"
  - "compose yml"
  - "compose validator"
  - "compose service"
triggers:
  - "docker compose"
  - "compose yml"
  - "compose validator"
  - "compose service"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Docker Compose Validator

Inspect docker-compose.yml services, volume mounts, port mappings, and networks

## Metadata

- **ID:** `docker-compose-validator`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `docker compose`
- `compose yml`
- `compose validator`
- `compose service`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('docker-compose-validator', {
  /* input parameters */
});
```
