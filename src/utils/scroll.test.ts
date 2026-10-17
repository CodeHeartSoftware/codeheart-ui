import { afterEach, describe, expect, it, vi } from "vitest";
import { isSectionHref, scrollIntoViewIfAbove, scrollToSection, toHomeSectionRoute, toSectionHref } from "./scroll";

describe("toSectionHref", () => {
  it("prefixes the section id with a hash", () => {
    expect(toSectionHref("work")).toBe("#work");
  });
});

describe("toHomeSectionRoute", () => {
  it("points at the section on the home page", () => {
    expect(toHomeSectionRoute("services")).toBe("/#services");
  });
});

describe("scrollToSection", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("smooth-scrolls the matching element into view", () => {
    const section = document.createElement("section");
    section.id = "work";
    section.scrollIntoView = vi.fn();
    document.body.append(section);

    scrollToSection("work");

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("jumps instantly when the user prefers reduced motion", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true } as MediaQueryList);
    const section = document.createElement("section");
    section.id = "work";
    section.scrollIntoView = vi.fn();
    document.body.append(section);

    scrollToSection("work");

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "auto" });
  });

  it("does nothing when the section does not exist", () => {
    expect(() => scrollToSection("missing")).not.toThrow();
  });
});

describe("isSectionHref", () => {
  it("matches in-page anchors only", () => {
    expect(isSectionHref("#work")).toBe(true);
    expect(isSectionHref("#")).toBe(false);
    expect(isSectionHref("/contact")).toBe(false);
    expect(isSectionHref("https://github.com/x#readme")).toBe(false);
  });
});

describe("scrollIntoViewIfAbove", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const buildElement = (top: number) => {
    const element = document.createElement("div");
    element.getBoundingClientRect = () => ({ top }) as DOMRect;
    element.scrollIntoView = vi.fn();
    return element;
  };

  it("scrolls an element that starts above the viewport", () => {
    const element = buildElement(-120);

    scrollIntoViewIfAbove(element);

    expect(element.scrollIntoView).toHaveBeenCalledWith({ block: "start", behavior: "smooth" });
  });

  it("leaves an element whose top is visible alone", () => {
    const element = buildElement(40);

    scrollIntoViewIfAbove(element);

    expect(element.scrollIntoView).not.toHaveBeenCalled();
  });
});
