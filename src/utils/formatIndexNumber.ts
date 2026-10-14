/** Turns a zero-based list index into a two-digit display number: 0 → "01". */
export const formatIndexNumber = (index: number): string => String(index + 1).padStart(2, "0");
