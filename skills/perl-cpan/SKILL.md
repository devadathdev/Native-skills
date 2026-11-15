---
id: perl-cpan
name: "Perl CPAN Manager"
version: 1.0.0
description: "Inspect cpanfile dependencies, Perl 5 module imports, and script syntax"
author: "AURA Team"
category: development
tags:
  - "cpan"
  - "cpanfile"
  - "perl module"
  - "perl syntax"
triggers:
  - "cpan"
  - "cpanfile"
  - "perl module"
  - "perl syntax"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Perl CPAN Manager

Inspect cpanfile dependencies, Perl 5 module imports, and script syntax

## Metadata

- **ID:** `perl-cpan`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `cpan`
- `cpanfile`
- `perl module`
- `perl syntax`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('perl-cpan', {
  /* input parameters */
});
```
