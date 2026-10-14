import { describe, expect, it } from "vitest";
import { countIntermediaries } from "./countIntermediaries";

describe("countIntermediaries", () => {
  it("excludes both ends of the chain", () => {
    expect(countIntermediaries(["you", "a", "b", "c", "dev"])).toBe(3);
  });

  it("is zero for a direct line", () => {
    expect(countIntermediaries(["you", "dev"])).toBe(0);
  });

  it("never goes negative", () => {
    expect(countIntermediaries([])).toBe(0);
    expect(countIntermediaries(["you"])).toBe(0);
  });
});
