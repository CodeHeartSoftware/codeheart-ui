import { describe, expect, it } from "vitest";
import type { HeroShapeConfig } from "@/types/shapes";
import { buildShapeStyleVars } from "./shapeStyle";

const shape: HeroShapeConfig = {
  id: "ring",
  kind: "ring",
  top: 12,
  left: -6,
  size: 150,
  rotate: -32,
  depth: 36,
  driftX: 18,
  driftY: -24,
  spin: 30,
  duration: 22,
  delay: -6,
};

describe("buildShapeStyleVars", () => {
  it("adds the right unit to each value", () => {
    expect(buildShapeStyleVars(shape)).toEqual({
      "--top": "12%",
      "--left": "-6%",
      "--size": 150,
      "--rotate": "-32deg",
      "--depth": 36,
      "--drift-x": "18px",
      "--drift-y": "-24px",
      "--spin": "30deg",
      "--duration": "22s",
      "--delay": "-6s",
    });
  });
});
