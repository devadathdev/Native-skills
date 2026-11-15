---
id: jenkins-pipeline
name: "Jenkins Pipeline Inspector"
version: 1.0.0
description: "Inspect Jenkinsfile Declarative syntax, stages, agent directives, and post actions"
author: "AURA Team"
category: devops
tags:
  - "jenkins"
  - "jenkinsfile"
  - "declarative pipeline"
  - "jenkins build"
triggers:
  - "jenkins"
  - "jenkinsfile"
  - "declarative pipeline"
  - "jenkins build"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Jenkins Pipeline Inspector

Inspect Jenkinsfile Declarative syntax, stages, agent directives, and post actions

## Metadata

- **ID:** `jenkins-pipeline`
- **Category:** `devops`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `jenkins`
- `jenkinsfile`
- `declarative pipeline`
- `jenkins build`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('jenkins-pipeline', {
  /* input parameters */
});
```
