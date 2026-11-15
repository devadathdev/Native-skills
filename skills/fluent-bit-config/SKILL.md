---
id: fluent-bit-config
name: "Fluent Bit Config"
version: 1.0.0
description: "Inspect fluent-bit.conf input parsers, filters (record_modifier), and output sinks"
author: "AURA Team"
category: devops
tags:
  - "fluent bit"
  - "fluentbit conf"
  - "lightweight log forwarder"
triggers:
  - "fluent bit"
  - "fluentbit conf"
  - "lightweight log forwarder"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Fluent Bit Config

Inspect fluent-bit.conf input parsers, filters (record_modifier), and output sinks

## Metadata

- **ID:** `fluent-bit-config`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `fluent bit`
- `fluentbit conf`
- `lightweight log forwarder`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('fluent-bit-config', {
  /* input parameters */
});
```
