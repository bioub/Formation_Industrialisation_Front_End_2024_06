import { expect, test } from 'vitest';
import { totalPairs } from "./total-pairs";

test('totalPairs function', () => {
  expect(totalPairs([1, 2, 3, 4, 5, 6])).toBe(3);
  expect(totalPairs([0, 6, 8, 9])).toBe(3);
});