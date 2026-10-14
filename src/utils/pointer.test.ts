import { describe, expect, it } from "vitest";
import { applyStyleVars, getPointerStyleVars } from "./pointer";

const bounds = { left: 100, top: 50, width: 400, height: 200 };

describe("getPointerStyleVars", () => {
  it("positions the glow relative to the element", () => {
    const vars = getPointerStyleVars({ clientX: 150, clientY: 80 }, bounds);

    expect(vars["--pointer-x"]).toBe("50px");
    expect(vars["--pointer-y"]).toBe("30px");
  });

  it("produces no tilt at the center", () => {
    const vars = getPointerStyleVars({ clientX: 300, clientY: 150 }, bounds);

    expect(vars["--tilt-x"]).toBe("0deg");
    expect(vars["--tilt-y"]).toBe("0deg");
  });

  it("produces the maximum tilt at the bottom-right corner", () => {
    const vars = getPointerStyleVars({ clientX: 500, clientY: 250 }, bounds);

    expect(vars["--tilt-x"]).toBe("5deg");
    expect(vars["--tilt-y"]).toBe("-4deg");
  });
});

describe("getPointerStyleVars parallax ratios", () => {
  it("spans -0.5 to 0.5 across the element", () => {
    const topLeft = getPointerStyleVars({ clientX: 100, clientY: 50 }, bounds);
    const bottomRight = getPointerStyleVars({ clientX: 500, clientY: 250 }, bounds);

    expect(topLeft["--pointer-ratio-x"]).toBe("-0.5");
    expect(topLeft["--pointer-ratio-y"]).toBe("-0.5");
    expect(bottomRight["--pointer-ratio-x"]).toBe("0.5");
    expect(bottomRight["--pointer-ratio-y"]).toBe("0.5");
  });
});

describe("applyStyleVars", () => {
  it("sets each entry as a custom property", () => {
    const element = document.createElement("div");

    applyStyleVars(element, { "--a": "1px", "--b": "2deg" });

    expect(element.style.getPropertyValue("--a")).toBe("1px");
    expect(element.style.getPropertyValue("--b")).toBe("2deg");
  });
});
