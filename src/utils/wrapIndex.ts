/** Wraps an index into the range [0, length), so stepping past either end loops around. */
export const wrapIndex = (index: number, length: number): number => ((index % length) + length) % length;
