import { afterEach, describe, expect, it, vi } from "vitest";
import { buildMailtoHref, openMailClient } from "./mailto";

describe("buildMailtoHref", () => {
  it("links to the address", () => {
    expect(buildMailtoHref("hi@example.com")).toBe("mailto:hi@example.com");
  });

  it("encodes the subject", () => {
    expect(buildMailtoHref("hi@example.com", "New project & more")).toBe(
      "mailto:hi@example.com?subject=New%20project%20%26%20more",
    );
  });
});

describe("openMailClient", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("navigates to the mailto href", () => {
    const assign = vi.fn();
    vi.stubGlobal("location", { assign });

    openMailClient("mailto:hi@example.com");

    expect(assign).toHaveBeenCalledWith("mailto:hi@example.com");
  });
});
