---
id: vespa-ai
name: "Vespa.ai Engine"
version: 1.0.0
description: "Inspect Vespa search applications, tensor ranking expressions, and document schemas"
author: "AURA Team"
category: ai
tags:
  - "vespa"
  - "vespa search"
  - "tensor ranking"
  - "vespa ai"
triggers:
  - "vespa"
  - "vespa search"
  - "tensor ranking"
  - "vespa ai"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Vespa.ai Engine

Inspect Vespa search applications, tensor ranking expressions, and document schemas

## Metadata

- **ID:** `vespa-ai`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `vespa`
- `vespa search`
- `tensor ranking`
- `vespa ai`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('vespa-ai', {
  /* input parameters */
});
```
