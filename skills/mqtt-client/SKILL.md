---
id: mqtt-client
name: "MQTT Client"
version: 1.0.0
description: "Inspect MQTT IoT broker topics, QoS levels (0, 1, 2), retain flags, and message payloads"
author: "AURA Team"
category: integration
tags:
  - "mqtt"
  - "iot message"
  - "mqtt topic"
  - "qos"
  - "publish subscribe iot"
triggers:
  - "mqtt"
  - "iot message"
  - "mqtt topic"
  - "qos"
  - "publish subscribe iot"
permissions:
  - type: network
    scope: [mqtt]
enabled: true
entryPoint: src/skills/ecosystem/index.ts
---

# MQTT Client

Inspect MQTT IoT broker topics, QoS levels (0, 1, 2), retain flags, and message payloads

## Metadata

- **ID:** `mqtt-client`
- **Category:** `integration`
- **Version:** `1.0.0`
- **Author:** AURA Team

## Permissions

- `network` (scope: `mqtt`)

## Triggers

- `mqtt`
- `iot message`
- `mqtt topic`
- `qos`
- `publish subscribe iot`

## Usage

This portable skill is registered in the AURA Native Skill Runtime. It can be invoked directly by ID:

```javascript
const result = await runtime.execute('mqtt-client', {
  /* input parameters */
});
```
