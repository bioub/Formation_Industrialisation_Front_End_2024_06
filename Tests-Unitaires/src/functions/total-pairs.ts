export function totalPairs(nbs: number[]) {
  return nbs.filter((nb) => nb % 2 === 0).length;
}
