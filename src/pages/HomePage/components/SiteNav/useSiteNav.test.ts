import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useSiteNav } from "./useSiteNav";

describe("useSiteNav", () => {
  it("starts with the menu closed", () => {
    const { result } = renderHook(() => useSiteNav());

    expect(result.current.isMenuOpen).toBe(false);
  });

  it("toggles the menu open and closed", () => {
    const { result } = renderHook(() => useSiteNav());

    act(() => result.current.toggleMenu());
    expect(result.current.isMenuOpen).toBe(true);

    act(() => result.current.toggleMenu());
    expect(result.current.isMenuOpen).toBe(false);
  });

  it("closes the menu", () => {
    const { result } = renderHook(() => useSiteNav());

    act(() => result.current.toggleMenu());
    act(() => result.current.closeMenu());

    expect(result.current.isMenuOpen).toBe(false);
  });

  it("closes the open menu on Escape", () => {
    const { result } = renderHook(() => useSiteNav());

    act(() => result.current.toggleMenu());
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    });

    expect(result.current.isMenuOpen).toBe(false);
  });

  it("ignores other keys", () => {
    const { result } = renderHook(() => useSiteNav());

    act(() => result.current.toggleMenu());
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    expect(result.current.isMenuOpen).toBe(true);
  });
});
