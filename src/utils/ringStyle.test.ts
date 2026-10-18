import { describe, expect, it } from "vitest";
import { buildRingStyleVars } from "./ringStyle";

describe("buildRingStyleVars", () => {
  it("leaves the innermost ring unfaded", () => {
    expect(buildRingStyleVars(0, 40)).toEqual({ "--ring-index": 0, "--ring-fade": 1 });
  });

  it("fades rings evenly as they move outward", () => {
    expect(buildRingStyleVars(10, 40)).toEqual({ "--ring-index": 10, "--ring-fade": 0.75 });
  });

  it("keeps the outermost ring just visible", () => {
    const vars = buildRingStyleVars(39, 40) as Record<string, number>;

    expect(vars["--ring-index"]).toBe(39);
    expect(vars["--ring-fade"]).toBeCloseTo(0.025);
  });
});
