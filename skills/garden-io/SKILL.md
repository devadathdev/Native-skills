---
id: garden-io
name: "Garden.io Project"
version: 1.0.0
description: "Inspect project.garden.yml service graphs, test execution, and deployment dependencies"
author: "AURA Team"
category: devops
tags:
  - "garden io"
  - "garden yml"
  - "cloud dev engine"
  - "service graph"
triggers:
  - "garden io"
  - "garden yml"
  - "cloud dev engine"
  - "service graph"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Garden.io Project

Inspect project.garden.yml service graphs, test execution, and deployment dependencies

## Metadata

- **ID:** `garden-io`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `garden io`
- `garden yml`
- `cloud dev engine`
- `service graph`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('garden-io', {
  /* input parameters */
});
```
