import { describe, expect, it } from "vitest";
import { wrapIndex } from "./wrapIndex";

describe("wrapIndex", () => {
  it("leaves in-range indexes alone", () => {
    expect(wrapIndex(0, 3)).toBe(0);
    expect(wrapIndex(2, 3)).toBe(2);
  });

  it("loops past the end back to the start", () => {
    expect(wrapIndex(3, 3)).toBe(0);
    expect(wrapIndex(7, 3)).toBe(1);
  });

  it("loops before the start to the end", () => {
    expect(wrapIndex(-1, 3)).toBe(2);
  });
});
