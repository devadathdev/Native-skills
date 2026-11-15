---
id: clojure-leiningen
name: "Clojure Leiningen"
version: 1.0.0
description: "Inspect project.clj configurations, Clojure namespaces, and REPL dependencies"
author: "AURA Team"
category: development
tags:
  - "lein"
  - "leiningen"
  - "clojure build"
  - "project clj"
triggers:
  - "lein"
  - "leiningen"
  - "clojure build"
  - "project clj"
permissions:
  - type: filesystem
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Clojure Leiningen

Inspect project.clj configurations, Clojure namespaces, and REPL dependencies

## Metadata

- **ID:** `clojure-leiningen`
- **Category:** `development`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `*`)

## Triggers

- `lein`
- `leiningen`
- `clojure build`
- `project clj`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('clojure-leiningen', {
  /* input parameters */
});
```
