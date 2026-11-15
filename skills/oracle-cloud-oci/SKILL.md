---
id: oracle-cloud-oci
name: "Oracle Cloud (OCI)"
version: 1.0.0
description: "Inspect OCI compartments, compute instances, VCN subnets, and Autonomous DB"
author: "AURA Team"
category: devops
tags:
  - "oci"
  - "oracle cloud"
  - "oci compartment"
  - "autonomous database"
triggers:
  - "oci"
  - "oracle cloud"
  - "oci compartment"
  - "autonomous database"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Oracle Cloud (OCI)

Inspect OCI compartments, compute instances, VCN subnets, and Autonomous DB

## Metadata

- **ID:** `oracle-cloud-oci`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `oci`
- `oracle cloud`
- `oci compartment`
- `autonomous database`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('oracle-cloud-oci', {
  /* input parameters */
});
```
