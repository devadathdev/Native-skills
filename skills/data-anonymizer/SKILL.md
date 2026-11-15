---
id: data-anonymizer
name: "Data Anonymizer"
version: 1.0.0
description: "Detect and redact Personally Identifiable Information (PII) including emails, SSNs, and cards"
author: "AURA Team"
category: security
tags:
  - "anonymize"
  - "data masking"
  - "pii"
  - "redact"
  - "gdpr redact"
  - "pseudonymize"
  - "mask pii"
triggers:
  - "anonymize"
  - "data masking"
  - "pii"
  - "redact"
  - "gdpr redact"
  - "pseudonymize"
  - "mask pii"
permissions:
  - type: filesystem
    scope: [read, write]
enabled: true
entryPoint: src/skills/advanced/index.ts
---

# Data Anonymizer

Detect and redact Personally Identifiable Information (PII) including emails, SSNs, and cards

## Metadata

- **ID:** `data-anonymizer`
- **Category:** `security`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read, write`)

## Triggers

- `anonymize`
- `data masking`
- `pii`
- `redact`
- `gdpr redact`
- `pseudonymize`
- `mask pii`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('data-anonymizer', {
  /* input parameters */
});
```
