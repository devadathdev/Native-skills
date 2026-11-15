---
id: apache-spark
name: "Apache Spark"
version: 1.0.0
description: "Inspect SparkSession configurations, RDD lineage, Catalyst optimizer plans, and stages"
author: "AURA Team"
category: data
tags:
  - "spark"
  - "apache spark"
  - "rdd"
  - "spark sql"
  - "catalyst optimizer"
triggers:
  - "spark"
  - "apache spark"
  - "rdd"
  - "spark sql"
  - "catalyst optimizer"
permissions:
  - type: database
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Apache Spark

Inspect SparkSession configurations, RDD lineage, Catalyst optimizer plans, and stages

## Metadata

- **ID:** `apache-spark`
- **Category:** `data`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `database` (scope: `*`)

## Triggers

- `spark`
- `apache spark`
- `rdd`
- `spark sql`
- `catalyst optimizer`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('apache-spark', {
  /* input parameters */
});
```
