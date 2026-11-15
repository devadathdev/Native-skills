---
id: blackbox-exporter
name: "Blackbox Exporter"
version: 1.0.0
description: "Inspect Prometheus Blackbox Exporter modules (http, icmp, tcp, dns) and probe targets"
author: "AURA Team"
category: devops
tags:
  - "blackbox exporter"
  - "probe target"
  - "icmp probe"
  - "http probe prometheus"
triggers:
  - "blackbox exporter"
  - "probe target"
  - "icmp probe"
  - "http probe prometheus"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Blackbox Exporter

Inspect Prometheus Blackbox Exporter modules (http, icmp, tcp, dns) and probe targets

## Metadata

- **ID:** `blackbox-exporter`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `blackbox exporter`
- `probe target`
- `icmp probe`
- `http probe prometheus`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('blackbox-exporter', {
  /* input parameters */
});
```
