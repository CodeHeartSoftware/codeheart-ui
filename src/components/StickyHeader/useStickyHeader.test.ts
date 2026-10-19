import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { useStickyHeader } from "./useStickyHeader";

const scrollTo = (value: number) => {
  Object.defineProperty(window, "scrollY", { configurable: true, value });
  window.dispatchEvent(new Event("scroll"));
};

describe("useStickyHeader", () => {
  afterEach(() => {
    act(() => scrollTo(0));
  });

  it("starts unscrolled at the top of the page", () => {
    const { result } = renderHook(() => useStickyHeader());

    expect(result.current.isScrolled).toBe(false);
  });

  it("starts scrolled when the page mounts partway down", () => {
    Object.defineProperty(window, "scrollY", { configurable: true, value: 300 });

    const { result } = renderHook(() => useStickyHeader());

    expect(result.current.isScrolled).toBe(true);
  });

  it("tracks scrolling down and back to the top", () => {
    const { result } = renderHook(() => useStickyHeader());

    act(() => scrollTo(200));
    expect(result.current.isScrolled).toBe(true);

    act(() => scrollTo(0));
    expect(result.current.isScrolled).toBe(false);
  });

  it("stops listening once unmounted", () => {
    const { result, unmount } = renderHook(() => useStickyHeader());

    unmount();
    scrollTo(200);

    expect(result.current.isScrolled).toBe(false);
  });
});
