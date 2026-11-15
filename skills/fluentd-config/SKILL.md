---
id: fluentd-config
name: "Fluentd Config Inspector"
version: 1.0.0
description: "Inspect fluent.conf source plugins, filter matches, and output forwarders"
author: "AURA Team"
category: devops
tags:
  - "fluentd"
  - "fluent conf"
  - "td agent"
  - "log forwarder"
triggers:
  - "fluentd"
  - "fluent conf"
  - "td agent"
  - "log forwarder"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Fluentd Config Inspector

Inspect fluent.conf source plugins, filter matches, and output forwarders

## Metadata

- **ID:** `fluentd-config`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `fluentd`
- `fluent conf`
- `td agent`
- `log forwarder`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('fluentd-config', {
  /* input parameters */
});
```
