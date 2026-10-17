import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SERVICES } from "@/constants/content";
import { scrollIntoViewIfAbove } from "@/utils/scroll";
import { useServicesSection } from "./useServicesSection";

vi.mock("@/utils/scroll", () => ({ scrollIntoViewIfAbove: vi.fn() }));

const defaultId = SERVICES.find((service) => service.isFeatured)!.id;
const otherId = SERVICES.find((service) => !service.isFeatured)!.id;

describe("useServicesSection", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.mocked(scrollIntoViewIfAbove).mockClear();
  });

  const renderSection = () => renderHook(() => useServicesSection({ services: SERVICES }));

  it("opens the featured card by default", () => {
    const { result } = renderSection();

    expect(result.current.activeId).toBe(defaultId);
  });

  it("opens a card the mouse rests on and keeps it open after the pointer leaves the stack", () => {
    const { result } = renderSection();

    act(() => result.current.hoverService(otherId, "mouse"));
    expect(result.current.activeId).toBe(defaultId);

    act(() => vi.runAllTimers());
    expect(result.current.activeId).toBe(otherId);

    act(() => result.current.leaveStack());
    expect(result.current.activeId).toBe(otherId);
  });

  it("drops a hover that leaves the stack before its card opens", () => {
    const { result } = renderSection();

    act(() => {
      result.current.hoverService(otherId, "mouse");
      result.current.leaveStack();
      vi.runAllTimers();
    });

    expect(result.current.activeId).toBe(defaultId);
  });

  it("ignores touch and pen hovers", () => {
    const { result } = renderSection();

    act(() => {
      result.current.hoverService(otherId, "touch");
      vi.runAllTimers();
    });

    expect(result.current.activeId).toBe(defaultId);
  });

  it("keeps a selected card open after the pointer leaves", () => {
    const { result } = renderSection();
    const card = document.createElement("article");

    act(() => result.current.selectService(otherId, card));
    act(() => result.current.leaveStack());
    act(() => vi.runAllTimers());

    expect(result.current.activeId).toBe(otherId);
    expect(scrollIntoViewIfAbove).toHaveBeenCalledWith(card);
  });

  it("cancels a pending hover when a card is selected", () => {
    const { result } = renderSection();

    act(() => {
      result.current.hoverService(defaultId, "mouse");
      result.current.selectService(otherId, null);
      vi.runAllTimers();
    });

    expect(result.current.activeId).toBe(otherId);
  });
});
