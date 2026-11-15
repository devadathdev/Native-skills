---
id: docker
name: "Docker"
version: 1.0.0
description: "Inspect container runtime, images, Dockerfiles, and container states"
author: "AURA Team"
category: devops
tags:
  - "docker"
  - "container"
  - "dockerfile"
  - "docker image"
  - "docker compose"
triggers:
  - "docker"
  - "container"
  - "dockerfile"
  - "docker image"
  - "docker compose"
permissions:
  - type: shell
    scope: [docker]
enabled: true
entryPoint: src/skills/additional/index.ts
---

# Docker

Inspect container runtime, images, Dockerfiles, and container states

## Metadata

- **ID:** `docker`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `docker`)

## Triggers

- `docker`
- `container`
- `dockerfile`
- `docker image`
- `docker compose`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('docker', {
  /* input parameters */
});
```
