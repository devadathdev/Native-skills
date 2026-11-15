---
id: hallucination-detector
name: "Hallucination Detector"
version: 1.0.0
description: "Verify grounded factual claims in model responses against reference documents and citations"
author: "AURA Team"
category: ai
tags:
  - "hallucination"
  - "fact check"
  - "groundedness"
  - "verify facts"
  - "claim verification"
triggers:
  - "hallucination"
  - "fact check"
  - "groundedness"
  - "verify facts"
  - "claim verification"
permissions:
  - type: model
    scope: [evaluation]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# Hallucination Detector

Verify grounded factual claims in model responses against reference documents and citations

## Metadata

- **ID:** `hallucination-detector`
- **Category:** `ai`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `model` (scope: `evaluation`)

## Triggers

- `hallucination`
- `fact check`
- `groundedness`
- `verify facts`
- `claim verification`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('hallucination-detector', {
  /* input parameters */
});
```
