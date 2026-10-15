import { afterEach, describe, expect, it } from "vitest";
import { getNavigationDirection, setNavigationDirection } from "./navigationDirection";

describe("getNavigationDirection", () => {
  it("treats the home page as going back", () => {
    expect(getNavigationDirection("/")).toBe("back");
  });

  it("treats a home page section as going back", () => {
    expect(getNavigationDirection("/#services")).toBe("back");
  });

  it("treats every other page as going forward", () => {
    expect(getNavigationDirection("/contact")).toBe("forward");
    expect(getNavigationDirection("/how-we-work")).toBe("forward");
    expect(getNavigationDirection("/work/thunderdome")).toBe("forward");
  });
});

describe("setNavigationDirection", () => {
  afterEach(() => {
    delete document.documentElement.dataset.navDirection;
  });

  it("records the direction on the root element", () => {
    setNavigationDirection("back");

    expect(document.documentElement.dataset.navDirection).toBe("back");
  });
});
