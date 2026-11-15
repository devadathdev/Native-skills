---
id: sonarqube-scanner
name: "SonarQube Scanner"
version: 1.0.0
description: "Inspect SonarQube code quality gates, code smell thresholds, and test coverage"
author: "AURA Team"
category: development
tags:
  - "sonarqube"
  - "sonar scanner"
  - "quality gate"
  - "code smell"
triggers:
  - "sonarqube"
  - "sonar scanner"
  - "quality gate"
  - "code smell"
permissions:
  - type: api
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# SonarQube Scanner

Inspect SonarQube code quality gates, code smell thresholds, and test coverage

## Metadata

- **ID:** `sonarqube-scanner`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `api` (scope: `*`)

## Triggers

- `sonarqube`
- `sonar scanner`
- `quality gate`
- `code smell`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('sonarqube-scanner', {
  /* input parameters */
});
```
