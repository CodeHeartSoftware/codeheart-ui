import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestIds } from "@/constants/testIds";
import { renderWithRouter } from "@/test/renderWithRouter";
import SiteNav from "./SiteNav";

describe("SiteNav", () => {
  it("applies the open style to the links only while the menu is open", () => {
    renderWithRouter(<SiteNav />);
    const button = screen.getByTestId(TestIds.SITE_NAV_MENU_BUTTON);
    const links = screen.getByTestId(TestIds.SITE_NAV_LINKS);

    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(links).not.toHaveClass("linksOpen");

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(links).toHaveClass("linksOpen");
  });

  it("closes the menu when a nav link is chosen", () => {
    renderWithRouter(<SiteNav />);
    fireEvent.click(screen.getByTestId(TestIds.SITE_NAV_MENU_BUTTON));

    fireEvent.click(screen.getByRole("link", { name: "Work" }));

    expect(screen.getByTestId(TestIds.SITE_NAV_LINKS)).not.toHaveClass("linksOpen");
  });

  it("sends the Start a project button to the contact page", () => {
    renderWithRouter(<SiteNav />);

    expect(screen.getByTestId(TestIds.SITE_NAV_CTA)).toHaveAttribute("href", "/contact");
  });
});
