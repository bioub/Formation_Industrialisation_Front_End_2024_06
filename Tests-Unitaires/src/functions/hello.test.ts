import { expect, test } from 'vitest';
import { hello } from "./hello";

test('hello function', () => {
  expect(hello('Romain')).toBe('Hello ROMAIN');
  expect(hello('Romain')).toContain('ROMAIN');
});