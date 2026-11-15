---
id: yaml-linter
name: "YAML Linter"
version: 1.0.0
description: "Verify YAML document syntax, check indentation alignment, and expand anchors and aliases"
author: "AURA Team"
category: documents
tags:
  - "yaml"
  - "yml"
  - "yaml lint"
  - "yaml syntax"
  - "format yaml"
triggers:
  - "yaml"
  - "yml"
  - "yaml lint"
  - "yaml syntax"
  - "format yaml"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# YAML Linter

Verify YAML document syntax, check indentation alignment, and expand anchors and aliases

## Metadata

- **ID:** `yaml-linter`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `yaml`
- `yml`
- `yaml lint`
- `yaml syntax`
- `format yaml`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('yaml-linter', {
  /* input parameters */
});
```
