import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { usePageMeta } from "./usePageMeta";

describe("usePageMeta", () => {
  it("applies the title and description, and updates them when they change", () => {
    const { rerender } = renderHook((meta) => usePageMeta(meta), {
      initialProps: { title: "Home | CodeHeart", description: "Home page" },
    });

    expect(document.title).toBe("Home | CodeHeart");

    rerender({ title: "Kite | CodeHeart", description: "Kite page" });

    expect(document.title).toBe("Kite | CodeHeart");
    expect(document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content).toBe("Kite page");
  });
});
