---
id: golang-modules
name: "Go Modules Manager"
version: 1.0.0
description: "Inspect go.mod dependencies, Go vet checks, and binary compilation"
author: "AURA Team"
category: development
tags:
  - "go build"
  - "go mod"
  - "golang"
  - "go test"
triggers:
  - "go build"
  - "go mod"
  - "golang"
  - "go test"
permissions:
  - type: shell
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Go Modules Manager

Inspect go.mod dependencies, Go vet checks, and binary compilation

## Metadata

- **ID:** `golang-modules`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `shell` (scope: `*`)

## Triggers

- `go build`
- `go mod`
- `golang`
- `go test`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('golang-modules', {
  /* input parameters */
});
```
