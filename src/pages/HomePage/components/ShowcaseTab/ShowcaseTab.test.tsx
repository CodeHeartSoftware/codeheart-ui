import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { buildShowcaseProgressTestId } from "@/constants/testIds";
import type { ShowcaseItem } from "@/types/content";
import ShowcaseTab from "./ShowcaseTab";

const item: ShowcaseItem = {
  id: "kite",
  title: "Kite",
  description: "",
  tags: [],
  kicker: "",
  ctaLabel: "",
  destination: { href: "#kite" },
};

const renderTab = (overrides: Partial<Parameters<typeof ShowcaseTab>[0]> = {}) => {
  const props = {
    item,
    index: 2,
    isActive: true,
    showProgress: true,
    isProgressPaused: false,
    onSelect: vi.fn(),
    onProgressEnd: vi.fn(),
    ...overrides,
  };
  render(<ShowcaseTab {...props} />);
  return props;
};

describe("ShowcaseTab", () => {
  it("reports its index when clicked", () => {
    const { onSelect } = renderTab();

    fireEvent.click(screen.getByRole("tab", { name: "Kite" }));

    expect(onSelect).toHaveBeenCalledWith(2);
  });

  it("marks the active tab as selected", () => {
    renderTab({ isActive: false });

    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "false");
  });

  it("advances when its progress bar finishes", () => {
    const { onProgressEnd } = renderTab();

    fireEvent.animationEnd(screen.getByTestId(buildShowcaseProgressTestId(item.id)));

    expect(onProgressEnd).toHaveBeenCalledOnce();
  });

  it("hides the progress bar when not auto-playing", () => {
    renderTab({ showProgress: false });

    expect(screen.queryByTestId(buildShowcaseProgressTestId(item.id))).not.toBeInTheDocument();
  });

  it("freezes the progress bar while paused", () => {
    renderTab({ isProgressPaused: true });

    expect(screen.getByTestId(buildShowcaseProgressTestId(item.id))).toHaveClass("progressPaused");
  });
});
