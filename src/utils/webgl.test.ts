import { afterEach, describe, expect, it, vi } from "vitest";
import { supportsWebGL } from "./webgl";

describe("supportsWebGL", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("is true when the browser hands back a WebGL context", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({} as RenderingContext);

    expect(supportsWebGL()).toBe(true);
  });

  it("falls back to WebGL 1 when WebGL 2 is unavailable", () => {
    const getContext = vi
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockImplementation((type: string) => (type === "webgl" ? ({} as RenderingContext) : null));

    expect(supportsWebGL()).toBe(true);
    expect(getContext).toHaveBeenCalledWith("webgl");
  });

  it("is false when no WebGL context is available", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);

    expect(supportsWebGL()).toBe(false);
  });

  it("is false when creating a context throws", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(() => {
      throw new Error("blocked");
    });

    expect(supportsWebGL()).toBe(false);
  });
});
