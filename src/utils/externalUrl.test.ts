import { describe, expect, it } from "vitest";
import { isExternalUrl } from "./externalUrl";

describe("isExternalUrl", () => {
  it("matches absolute http and https URLs", () => {
    expect(isExternalUrl("https://github.com/x")).toBe(true);
    expect(isExternalUrl("HTTP://example.com")).toBe(true);
  });

  it("ignores in-page, mail, and relative links", () => {
    expect(isExternalUrl("#work")).toBe(false);
    expect(isExternalUrl("mailto:hi@example.com")).toBe(false);
    expect(isExternalUrl("/contact")).toBe(false);
  });
});
