import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ENCODED_CONTACT_EMAIL } from "@/constants/contact";
import { openMailClient } from "@/utils/mailto";
import { decodeEmail } from "@/utils/obfuscatedEmail";
import { useContactHero } from "./useContactHero";

vi.mock("@/utils/mailto", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/utils/mailto")>()),
  openMailClient: vi.fn(),
}));

describe("useContactHero", () => {
  beforeEach(() => {
    vi.mocked(openMailClient).mockClear();
  });

  it("opens the mail client addressed to the decoded contact email with a subject", () => {
    const { result } = renderHook(() => useContactHero());

    result.current.emailUs();

    expect(openMailClient).toHaveBeenCalledWith(
      expect.stringMatching(new RegExp(`^mailto:${decodeEmail(ENCODED_CONTACT_EMAIL)}\\?subject=`)),
    );
  });
});
