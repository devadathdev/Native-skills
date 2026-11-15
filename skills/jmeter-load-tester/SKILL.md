---
id: jmeter-load-tester
name: "Apache JMeter"
version: 1.0.0
description: "Inspect JMeter .jmx test plan XML, thread groups, HTTP samplers, and listeners"
author: "AURA Team"
category: development
tags:
  - "jmeter"
  - "jmx"
  - "jmeter test"
  - "thread group load"
triggers:
  - "jmeter"
  - "jmx"
  - "jmeter test"
  - "thread group load"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache JMeter

Inspect JMeter .jmx test plan XML, thread groups, HTTP samplers, and listeners

## Metadata

- **ID:** `jmeter-load-tester`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `jmeter`
- `jmx`
- `jmeter test`
- `thread group load`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jmeter-load-tester', {
  /* input parameters */
});
```
