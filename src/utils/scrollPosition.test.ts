import { afterEach, describe, expect, it } from "vitest";
import { hasScrolledPast } from "./scrollPosition";

const setScrollY = (value: number) => {
  Object.defineProperty(window, "scrollY", { configurable: true, value });
};

describe("hasScrolledPast", () => {
  afterEach(() => {
    setScrollY(0);
  });

  it("is false at the top of the page", () => {
    expect(hasScrolledPast(8)).toBe(false);
  });

  it("is false exactly at the threshold", () => {
    setScrollY(8);
    expect(hasScrolledPast(8)).toBe(false);
  });

  it("is true once scrolled beyond the threshold", () => {
    setScrollY(9);
    expect(hasScrolledPast(8)).toBe(true);
  });
});
