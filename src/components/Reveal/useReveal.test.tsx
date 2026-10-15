import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { observeOnce } from "@/utils/reveal";
import { useReveal } from "./useReveal";

vi.mock("@/utils/reveal", () => ({ observeOnce: vi.fn() }));

const Harness = () => {
  const { revealRef, isVisible } = useReveal();
  return <div ref={revealRef}>{isVisible ? "visible" : "hidden"}</div>;
};

describe("useReveal", () => {
  afterEach(() => {
    vi.mocked(observeOnce).mockReset();
  });

  it("starts hidden and becomes visible once the element is observed in view", () => {
    let reveal = () => {};
    vi.mocked(observeOnce).mockImplementation((_element, onVisible) => {
      reveal = onVisible;
      return () => {};
    });

    render(<Harness />);

    expect(screen.getByText("hidden")).toBeInTheDocument();

    act(() => reveal());

    expect(screen.getByText("visible")).toBeInTheDocument();
  });

  it("stops observing on unmount", () => {
    const cleanup = vi.fn();
    vi.mocked(observeOnce).mockReturnValue(cleanup);

    render(<Harness />).unmount();

    expect(cleanup).toHaveBeenCalled();
  });
});
