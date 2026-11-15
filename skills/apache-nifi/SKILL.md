---
id: apache-nifi
name: "Apache NiFi"
version: 1.0.0
description: "Inspect NiFi dataflow processors, flowfiles, provenance events, and controller services"
author: "AURA Team"
category: data
tags:
  - "nifi"
  - "apache nifi"
  - "flowfile"
  - "nifi processor"
triggers:
  - "nifi"
  - "apache nifi"
  - "flowfile"
  - "nifi processor"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache NiFi

Inspect NiFi dataflow processors, flowfiles, provenance events, and controller services

## Metadata

- **ID:** `apache-nifi`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `nifi`
- `apache nifi`
- `flowfile`
- `nifi processor`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-nifi', {
  /* input parameters */
});
```
