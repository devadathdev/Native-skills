---
id: bluetooth-le
name: "Bluetooth Low Energy"
version: 1.0.0
description: "Inspect BLE GATT services, characteristics, UUIDs, and advertisement packets"
author: "AURA Team"
category: integration
tags:
  - "ble"
  - "bluetooth"
  - "gatt"
  - "bluetooth le"
  - "characteristic"
triggers:
  - "ble"
  - "bluetooth"
  - "gatt"
  - "bluetooth le"
  - "characteristic"
permissions:
  - type: network
    scope: [*]
enabled: true
entryPoint: src/skills/expansion/index.ts
---

# Bluetooth Low Energy

Inspect BLE GATT services, characteristics, UUIDs, and advertisement packets

## Metadata

- **ID:** `bluetooth-le`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `*`)

## Triggers

- `ble`
- `bluetooth`
- `gatt`
- `bluetooth le`
- `characteristic`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('bluetooth-le', {
  /* input parameters */
});
```
