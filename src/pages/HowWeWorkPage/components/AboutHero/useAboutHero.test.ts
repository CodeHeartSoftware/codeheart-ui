import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { prefersReducedMotion } from "@/utils/motion";
import { supportsWebGL } from "@/utils/webgl";
import { useAboutHero } from "./useAboutHero";

vi.mock("@/utils/motion", () => ({ prefersReducedMotion: vi.fn() }));
vi.mock("@/utils/webgl", () => ({ supportsWebGL: vi.fn() }));

describe("useAboutHero", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("shows the 3D badge when WebGL works and motion is welcome", () => {
    vi.mocked(supportsWebGL).mockReturnValue(true);
    vi.mocked(prefersReducedMotion).mockReturnValue(false);

    expect(renderHook(() => useAboutHero()).result.current.showBadge).toBe(true);
  });

  it("keeps the static portrait without WebGL", () => {
    vi.mocked(supportsWebGL).mockReturnValue(false);
    vi.mocked(prefersReducedMotion).mockReturnValue(false);

    expect(renderHook(() => useAboutHero()).result.current.showBadge).toBe(false);
  });

  it("keeps the static portrait for reduced-motion users", () => {
    vi.mocked(supportsWebGL).mockReturnValue(true);
    vi.mocked(prefersReducedMotion).mockReturnValue(true);

    expect(renderHook(() => useAboutHero()).result.current.showBadge).toBe(false);
  });
});
