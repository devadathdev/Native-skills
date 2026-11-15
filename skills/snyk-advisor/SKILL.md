---
id: snyk-advisor
name: "Snyk Dependency Advisor"
version: 1.0.0
description: "Inspect package health scores, known vulnerability counts, and license compliance"
author: "AURA Team"
category: security
tags:
  - "snyk"
  - "snyk test"
  - "dependency advisor"
  - "vulnerability database"
triggers:
  - "snyk"
  - "snyk test"
  - "dependency advisor"
  - "vulnerability database"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Snyk Dependency Advisor

Inspect package health scores, known vulnerability counts, and license compliance

## Metadata

- **ID:** `snyk-advisor`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `snyk`
- `snyk test`
- `dependency advisor`
- `vulnerability database`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('snyk-advisor', {
  /* input parameters */
});
```
