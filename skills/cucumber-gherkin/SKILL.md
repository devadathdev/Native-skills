---
id: cucumber-gherkin
name: "Cucumber Gherkin"
version: 1.0.0
description: "Parse and validate Gherkin feature files, Given/When/Then scenarios, and step definitions"
author: "AURA Team"
category: development
tags:
  - "cucumber"
  - "gherkin"
  - "bdd"
  - "feature file"
  - "given when then"
triggers:
  - "cucumber"
  - "gherkin"
  - "bdd"
  - "feature file"
  - "given when then"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Cucumber Gherkin

Parse and validate Gherkin feature files, Given/When/Then scenarios, and step definitions

## Metadata

- **ID:** `cucumber-gherkin`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `cucumber`
- `gherkin`
- `bdd`
- `feature file`
- `given when then`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('cucumber-gherkin', {
  /* input parameters */
});
```
