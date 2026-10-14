import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CONTACT_NEXT_STEPS, INQUIRY_CHECKLIST } from "@/constants/content";
import { ENCODED_CONTACT_EMAIL } from "@/constants/contact";
import { TestIds } from "@/constants/testIds";
import { renderWithRouter } from "@/test/renderWithRouter";
import { openMailClient } from "@/utils/mailto";
import { decodeEmail } from "@/utils/obfuscatedEmail";
import ContactPage from "./ContactPage";

vi.mock("@/utils/mailto", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/utils/mailto")>()),
  openMailClient: vi.fn(),
}));

const contactAddress = decodeEmail(ENCODED_CONTACT_EMAIL);

describe("ContactPage", () => {
  beforeEach(() => {
    vi.mocked(openMailClient).mockClear();
  });

  it("never puts the address in the page", () => {
    const { container } = renderWithRouter(<ContactPage />, "/contact");

    expect(container.innerHTML).not.toContain(contactAddress);
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
  });

  it("opens the mail client with a pre-filled subject", () => {
    renderWithRouter(<ContactPage />, "/contact");

    fireEvent.click(screen.getByTestId(TestIds.CONTACT_EMAIL_CTA));

    expect(openMailClient).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`^mailto:${contactAddress}\\?subject=`)));
  });

  it("lists what to include and what happens next", () => {
    renderWithRouter(<ContactPage />, "/contact");

    INQUIRY_CHECKLIST.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
    CONTACT_NEXT_STEPS.forEach((step) => expect(screen.getByRole("heading", { name: step.step })).toBeInTheDocument());
  });
});
