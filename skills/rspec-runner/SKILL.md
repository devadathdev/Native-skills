---
id: rspec-runner
name: "RSpec Test Runner"
version: 1.0.0
description: "Inspect Ruby RSpec describe/context blocks, let bindings, and subject expectations"
author: "AURA Team"
category: development
tags:
  - "rspec"
  - "ruby test"
  - "rspec describe"
  - "rspec expect"
triggers:
  - "rspec"
  - "ruby test"
  - "rspec describe"
  - "rspec expect"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# RSpec Test Runner

Inspect Ruby RSpec describe/context blocks, let bindings, and subject expectations

## Metadata

- **ID:** `rspec-runner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `rspec`
- `ruby test`
- `rspec describe`
- `rspec expect`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('rspec-runner', {
  /* input parameters */
});
```
