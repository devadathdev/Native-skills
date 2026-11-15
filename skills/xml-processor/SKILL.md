---
id: xml-processor
name: "XML Processor"
version: 1.0.0
description: "Parse XML documents, execute XPath expressions, and validate against XML DTD/XSD schemas"
author: "AURA Team"
category: documents
tags:
  - "xml"
  - "xpath"
  - "xslt"
  - "xml schema"
  - "parse xml"
  - "xml validator"
triggers:
  - "xml"
  - "xpath"
  - "xslt"
  - "xml schema"
  - "parse xml"
  - "xml validator"
permissions:
  - type: filesystem
    scope: [read]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# XML Processor

Parse XML documents, execute XPath expressions, and validate against XML DTD/XSD schemas

## Metadata

- **ID:** `xml-processor`
- **Category:** `documents`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `filesystem` (scope: `read`)

## Triggers

- `xml`
- `xpath`
- `xslt`
- `xml schema`
- `parse xml`
- `xml validator`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('xml-processor', {
  /* input parameters */
});
```
