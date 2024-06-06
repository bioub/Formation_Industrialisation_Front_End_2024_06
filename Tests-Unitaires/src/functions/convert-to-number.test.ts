import { expect, test } from 'vitest';
import { convertToNumber } from "./convert-to-number";

test('convertToNumber function', () => {
  expect(convertToNumber('123')).toBe(123);
  expect(convertToNumber('123.123')).toBe(123);
});

test('convertToNumber function throws', () => {
  expect(() => convertToNumber('ABC')).toThrow();
});