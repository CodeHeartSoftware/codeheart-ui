import { afterEach, describe, expect, it, vi } from "vitest";
import { prefersReducedMotion } from "./motion";

const mockMatchMedia = (matches: boolean) =>
  vi.spyOn(window, "matchMedia").mockReturnValue({ matches } as MediaQueryList);

describe("prefersReducedMotion", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("queries the reduced-motion media feature", () => {
    const matchMedia = mockMatchMedia(false);

    prefersReducedMotion();

    expect(matchMedia).toHaveBeenCalledWith("(prefers-reduced-motion: reduce)");
  });

  it("returns the media query result", () => {
    mockMatchMedia(true);
    expect(prefersReducedMotion()).toBe(true);

    mockMatchMedia(false);
    expect(prefersReducedMotion()).toBe(false);
  });
});
