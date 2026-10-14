import { describe, expect, it } from "vitest";
import { formatIndexNumber } from "./formatIndexNumber";

describe("formatIndexNumber", () => {
  it("converts a zero-based index to a padded one-based number", () => {
    expect(formatIndexNumber(0)).toBe("01");
    expect(formatIndexNumber(8)).toBe("09");
  });

  it("does not pad two-digit numbers", () => {
    expect(formatIndexNumber(9)).toBe("10");
    expect(formatIndexNumber(41)).toBe("42");
  });
});
