# Native Skill Specification

A portable native skill is a directory containing a `SKILL.md` manifest and implementation.

## Required metadata

- `id`
- `name`
- `version`
- `description`
- `category`
- `permissions`

## Runtime rules

1. Skills are disabled by default unless explicitly enabled by their manifest/runtime policy.
2. A skill may only request declared permissions.
3. Secrets must never be embedded in a skill.
4. External network access must be explicit.
5. Destructive shell/filesystem actions require a host policy to permit them.
6. Skills return structured `SkillResult` objects rather than writing directly to the UI.

## Example

```yaml
id: example-skill
name: Example Skill
version: 1.0.0
category: utility
enabled: true
permissions:
  - type: filesystem
    scope: [read]
```
