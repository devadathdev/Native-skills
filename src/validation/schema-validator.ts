import type { JSONSchemaDefinition } from '../types.js';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  data?: unknown;
}

export class SchemaValidator {
  static validate(
    schema: JSONSchemaDefinition | undefined,
    data: unknown,
    path = ''
  ): ValidationResult {
    if (!schema) {
      return { valid: true, errors: [], data };
    }

    const errors: string[] = [];

    // Handle defaults
    if (data === undefined && schema.default !== undefined) {
      data = JSON.parse(JSON.stringify(schema.default));
    }

    if (data === undefined || data === null) {
      return { valid: true, errors: [], data };
    }

    // Type checking
    if (schema.type) {
      const actualType = Array.isArray(data) ? 'array' : typeof data;
      if (schema.type === 'number' && actualType === 'number' && Number.isNaN(data)) {
        errors.push(`Property '${path || 'root'}' must be a valid number`);
      } else if (actualType !== schema.type) {
        errors.push(
          `Property '${path || 'root'}' expected type '${schema.type}', received '${actualType}'`
        );
        return { valid: false, errors };
      }
    }

    // Enum checking
    if (schema.enum && !schema.enum.includes(data)) {
      errors.push(
        `Property '${path || 'root'}' must be one of [${schema.enum.map(String).join(', ')}]`
      );
    }

    // Object validation
    if (schema.type === 'object' && typeof data === 'object' && data !== null && !Array.isArray(data)) {
      const obj = data as Record<string, unknown>;

      // Required fields
      if (schema.required) {
        for (const req of schema.required) {
          if (obj[req] === undefined || obj[req] === null) {
            errors.push(`Required field '${path ? `${path}.${req}` : req}' is missing`);
          }
        }
      }

      // Properties
      if (schema.properties) {
        for (const [key, propSchema] of Object.entries(schema.properties)) {
          const propPath = path ? `${path}.${key}` : key;
          const propVal = obj[key];

          if (propVal === undefined && propSchema.default !== undefined) {
            obj[key] = JSON.parse(JSON.stringify(propSchema.default));
          }

          if (obj[key] !== undefined) {
            const res = SchemaValidator.validate(propSchema, obj[key], propPath);
            if (!res.valid) {
              errors.push(...res.errors);
            }
          }
        }
      }

      // Disallow additional properties if set to false
      if (schema.additionalProperties === false && schema.properties) {
        const allowed = new Set(Object.keys(schema.properties));
        for (const key of Object.keys(obj)) {
          if (!allowed.has(key)) {
            errors.push(`Unknown property '${path ? `${path}.${key}` : key}'`);
          }
        }
      }
    }

    // Array validation
    if (schema.type === 'array' && Array.isArray(data) && schema.items) {
      for (let i = 0; i < data.length; i++) {
        const res = SchemaValidator.validate(schema.items, data[i], `${path}[${i}]`);
        if (!res.valid) {
          errors.push(...res.errors);
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      data
    };
  }
}
