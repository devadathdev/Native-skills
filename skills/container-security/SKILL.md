---
id: container-security
name: "Container Security"
version: 1.0.0
description: "Audit container images for known CVEs, root user execution, and unnecessary capabilities"
author: "AURA Team"
category: security
tags:
  - "container security"
  - "docker scan"
  - "trivy"
  - "image vulnerability"
  - "cve scan"
triggers:
  - "container security"
  - "docker scan"
  - "trivy"
  - "image vulnerability"
  - "cve scan"
permissions:
  - type: shell
    scope: [docker]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Container Security

Audit container images for known CVEs, root user execution, and unnecessary capabilities

## Metadata

- **ID:** `container-security`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `docker`)

## Triggers

- `container security`
- `docker scan`
- `trivy`
- `image vulnerability`
- `cve scan`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('container-security', {
  /* input parameters */
});
```
