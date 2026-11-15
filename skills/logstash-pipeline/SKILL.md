---
id: logstash-pipeline
name: "Logstash Pipeline"
version: 1.0.0
description: "Inspect Logstash pipelines, grok filter patterns, mutate, and elasticsearch outputs"
author: "AURA Team"
category: devops
tags:
  - "logstash"
  - "grok filter"
  - "logstash conf"
  - "elk stack"
triggers:
  - "logstash"
  - "grok filter"
  - "logstash conf"
  - "elk stack"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Logstash Pipeline

Inspect Logstash pipelines, grok filter patterns, mutate, and elasticsearch outputs

## Metadata

- **ID:** `logstash-pipeline`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `logstash`
- `grok filter`
- `logstash conf`
- `elk stack`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('logstash-pipeline', {
  /* input parameters */
});
```
