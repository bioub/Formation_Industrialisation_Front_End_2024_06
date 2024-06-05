import { expect, test } from 'vitest';
import { sqrt } from "./sqrt";

test('sqrt function works', () => {
  expect(sqrt(4)).toBe(2);
});

test('sqrt function throws', () => {
  expect(() => sqrt(-4)).toThrow();
});