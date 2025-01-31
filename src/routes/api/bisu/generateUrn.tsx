// src/utils/urn.ts
import { v4 as uuidv4 } from 'uuid';

export function generateUrn(): string {
 return `urn:uuid:${uuidv4()}`;
}