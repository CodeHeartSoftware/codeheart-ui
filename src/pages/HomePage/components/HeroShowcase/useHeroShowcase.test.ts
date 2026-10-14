import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ShowcaseItem } from "@/types/content";
import { prefersReducedMotion } from "@/utils/motion";
import { useHeroShowcase } from "./useHeroShowcase";

vi.mock("@/utils/motion", () => ({ prefersReducedMotion: vi.fn() }));

const buildItem = (id: string): ShowcaseItem => ({
  id,
  title: id.toUpperCase(),
  description: "",
  tags: [],
  tone: "blush",
  kicker: "",
  ctaLabel: "",
  destination: { href: `#${id}` },
});

const items = [buildItem("one"), buildItem("two"), buildItem("three")];

const renderShowcase = () => renderHook(() => useHeroShowcase({ items }));

describe("useHeroShowcase", () => {
  beforeEach(() => {
    vi.mocked(prefersReducedMotion).mockReturnValue(false);
  });

  it("starts on the first item, auto-playing and unpaused", () => {
    const { result } = renderShowcase();

    expect(result.current.activeItem.id).toBe("one");
    expect(result.current.isAutoPlaying).toBe(true);
    expect(result.current.isPaused).toBe(false);
  });

  it("builds the snippet for the active item", () => {
    const { result } = renderShowcase();

    const text = result.current.snippet.flat().map((token) => token.text).join("");

    expect(text).toContain('"ONE"');
  });

  it("advances and wraps around while auto-playing", () => {
    const { result } = renderShowcase();

    act(() => result.current.advance());
    expect(result.current.activeIndex).toBe(1);

    act(() => result.current.advance());
    act(() => result.current.advance());
    expect(result.current.activeIndex).toBe(0);
  });

  it("stops auto-playing once the user picks an item", () => {
    const { result } = renderShowcase();

    act(() => result.current.selectItem(2));
    expect(result.current.activeItem.id).toBe("three");
    expect(result.current.isAutoPlaying).toBe(false);

    act(() => result.current.advance());
    expect(result.current.activeIndex).toBe(2);
  });

  it("never auto-plays when the user prefers reduced motion", () => {
    vi.mocked(prefersReducedMotion).mockReturnValue(true);
    const { result } = renderShowcase();

    expect(result.current.isAutoPlaying).toBe(false);
    act(() => result.current.advance());
    expect(result.current.activeIndex).toBe(0);
  });

  it("pauses and resumes", () => {
    const { result } = renderShowcase();

    act(() => result.current.pause());
    expect(result.current.isPaused).toBe(true);

    act(() => result.current.resume());
    expect(result.current.isPaused).toBe(false);
  });
});
