import { describe, expect, it } from "vitest";
import { decodeEmail, encodeEmail } from "./obfuscatedEmail";

const SAMPLE_EMAIL = "someone@example.com";

describe("encodeEmail / decodeEmail", () => {
  it("round-trips an address", () => {
    expect(decodeEmail(encodeEmail(SAMPLE_EMAIL))).toBe(SAMPLE_EMAIL);
  });

  it("hides the address pattern in the encoded form", () => {
    const encoded = encodeEmail(SAMPLE_EMAIL);

    expect(encoded).not.toContain("@");
    expect(encoded).not.toContain("example");
  });
});
