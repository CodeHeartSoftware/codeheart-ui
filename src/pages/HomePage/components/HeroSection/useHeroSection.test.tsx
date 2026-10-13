import { render, renderHook, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SectionIds } from "@/constants/routes";
import { prefersReducedMotion } from "@/utils/motion";
import { scrollToSection } from "@/utils/scroll";
import { useHeroSection } from "./useHeroSection";

vi.mock("@/utils/motion", () => ({ prefersReducedMotion: vi.fn() }));
vi.mock("@/utils/scroll", () => ({ scrollToSection: vi.fn() }));

const HERO_TEST_ID = "hero";

// Minimal harness so the hook's ref is attached before its mount effect runs.
const HeroHarness = () => {
  const { heroRef } = useHeroSection();
  return <section ref={heroRef} data-testid={HERO_TEST_ID} />;
};

const renderHero = () => {
  render(<HeroHarness />);
  const hero = screen.getByTestId(HERO_TEST_ID);
  hero.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 100 }) as DOMRect;
  return hero;
};

const movePointer = (element: HTMLElement) =>
  element.dispatchEvent(new PointerEvent("pointermove", { clientX: 50, clientY: 25 }));

describe("useHeroSection", () => {
  beforeEach(() => {
    vi.mocked(prefersReducedMotion).mockReturnValue(false);
    vi.mocked(scrollToSection).mockClear();
  });

  it("scrolls to the work section", () => {
    const { result } = renderHook(() => useHeroSection());

    result.current.scrollToWork();

    expect(scrollToSection).toHaveBeenCalledWith(SectionIds.WORK);
  });

  it("writes pointer variables to the hero on pointer move", () => {
    const hero = renderHero();

    movePointer(hero);

    expect(hero.style.getPropertyValue("--pointer-x")).toBe("50px");
    expect(hero.style.getPropertyValue("--pointer-y")).toBe("25px");
    expect(hero.style.getPropertyValue("--tilt-x")).toBe("-2.5deg");
  });

  it("skips pointer tracking when the user prefers reduced motion", () => {
    vi.mocked(prefersReducedMotion).mockReturnValue(true);
    const hero = renderHero();

    movePointer(hero);

    expect(hero.style.getPropertyValue("--pointer-x")).toBe("");
  });
});
