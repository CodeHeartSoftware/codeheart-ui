import type { ReactNode } from "react";
import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FOOTER_PAGE_LINKS, NAV_ITEMS } from "@/constants/content";
import { useSiteFooter } from "./useSiteFooter";

const renderAt = (path: string) =>
  renderHook(() => useSiteFooter(), {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MemoryRouter initialEntries={[path]}>{children}</MemoryRouter>
    ),
  });

describe("useSiteFooter", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("scrolls to homepage sections in place on the home page", () => {
    const { result } = renderAt("/");

    expect(result.current.brandDestination).toEqual({ href: "#top" });
    expect(result.current.exploreLinks[0]).toEqual({
      label: NAV_ITEMS[0].label,
      destination: { href: `#${NAV_ITEMS[0].sectionId}` },
    });
  });

  it("routes to homepage sections from other pages", () => {
    const { result } = renderAt("/contact");

    expect(result.current.brandDestination).toEqual({ to: "/#top" });
    expect(result.current.exploreLinks[0].destination).toEqual({ to: `/#${NAV_ITEMS[0].sectionId}` });
  });

  it("lists the homepage sections followed by the other pages", () => {
    const { result } = renderAt("/");

    expect(result.current.exploreLinks.map((link) => link.label)).toEqual([
      ...NAV_ITEMS.map((item) => item.label),
      ...FOOTER_PAGE_LINKS.map((link) => link.label),
    ]);
  });

  it("returns the current year for the copyright line", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2031-05-01T12:00:00Z"));

    const { result } = renderAt("/");

    expect(result.current.year).toBe(2031);
  });
});
