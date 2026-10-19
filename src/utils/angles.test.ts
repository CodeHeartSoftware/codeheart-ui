import { describe, expect, it } from "vitest";
import { wrapAngle, yawOf } from "./angles";

describe("wrapAngle", () => {
  it("leaves angles already within a half turn alone", () => {
    expect(wrapAngle(1)).toBeCloseTo(1);
    expect(wrapAngle(-1)).toBeCloseTo(-1);
  });

  it("wraps angles past a half turn the short way around", () => {
    expect(wrapAngle(Math.PI * 1.5)).toBeCloseTo(-Math.PI / 2);
    expect(wrapAngle(-Math.PI * 1.5)).toBeCloseTo(Math.PI / 2);
  });

  it("wraps full turns back to zero", () => {
    expect(wrapAngle(Math.PI * 4)).toBeCloseTo(0);
  });
});

describe("yawOf", () => {
  const aboutVertical = (angle: number) => ({ x: 0, y: Math.sin(angle / 2), z: 0, w: Math.cos(angle / 2) });

  it("is zero with no rotation", () => {
    expect(yawOf({ x: 0, y: 0, z: 0, w: 1 })).toBeCloseTo(0);
  });

  it("reads the turn around the vertical axis", () => {
    expect(yawOf(aboutVertical(Math.PI / 3))).toBeCloseTo(Math.PI / 3);
    expect(yawOf(aboutVertical(-Math.PI / 4))).toBeCloseTo(-Math.PI / 4);
  });

  it("reads a half turn, so the back is facing", () => {
    expect(Math.abs(wrapAngle(yawOf(aboutVertical(Math.PI))))).toBeCloseTo(Math.PI);
  });
});
