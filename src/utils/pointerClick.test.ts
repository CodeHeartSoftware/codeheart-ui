import { describe, expect, it } from "vitest";
import { isClick } from "./pointerClick";

const press = { x: 100, y: 100, time: 1000 };

describe("isClick", () => {
  it("counts a quick, still press as a click", () => {
    expect(isClick(press, { x: 100, y: 100, time: 1120 })).toBe(true);
  });

  it("allows a little wobble", () => {
    expect(isClick(press, { x: 104, y: 103, time: 1120 })).toBe(true);
  });

  it("treats a press that moved as a drag", () => {
    expect(isClick(press, { x: 140, y: 100, time: 1120 })).toBe(false);
  });

  it("treats a long press as a drag, even without moving", () => {
    expect(isClick(press, { x: 100, y: 100, time: 1600 })).toBe(false);
  });
});
