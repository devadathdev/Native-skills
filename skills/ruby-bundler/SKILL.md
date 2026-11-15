---
id: ruby-bundler
name: "Ruby Bundler"
version: 1.0.0
description: "Inspect Gemfile dependencies, Gemfile.lock checksums, and bundle commands"
author: "AURA Team"
category: development
tags:
  - "bundle"
  - "gemfile"
  - "ruby gems"
  - "bundler"
triggers:
  - "bundle"
  - "gemfile"
  - "ruby gems"
  - "bundler"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Ruby Bundler

Inspect Gemfile dependencies, Gemfile.lock checksums, and bundle commands

## Metadata

- **ID:** `ruby-bundler`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `bundle`
- `gemfile`
- `ruby gems`
- `bundler`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('ruby-bundler', {
  /* input parameters */
});
```
