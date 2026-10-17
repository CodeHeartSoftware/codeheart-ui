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

  it("turns the menu icon into a close icon while open", () => {
    renderWithRouter(<SiteNav />);
    const button = screen.getByTestId(TestIds.SITE_NAV_MENU_BUTTON);

    fireEvent.click(button);
    expect(button).toHaveClass("menuButtonOpen");

    fireEvent.click(button);
    expect(button).not.toHaveClass("menuButtonOpen");
  });

  it("closes the menu on Escape and returns focus to the menu button", () => {
    renderWithRouter(<SiteNav />);
    const button = screen.getByTestId(TestIds.SITE_NAV_MENU_BUTTON);
    fireEvent.click(button);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.getByTestId(TestIds.SITE_NAV_LINKS)).not.toHaveClass("linksOpen");
    expect(button).toHaveFocus();
  });

  it("closes the menu on a tap outside the nav, but not inside it", () => {
    renderWithRouter(<SiteNav />);
    const links = screen.getByTestId(TestIds.SITE_NAV_LINKS);
    fireEvent.click(screen.getByTestId(TestIds.SITE_NAV_MENU_BUTTON));

    fireEvent.pointerDown(links);
    expect(links).toHaveClass("linksOpen");

    fireEvent.pointerDown(document.body);
    expect(links).not.toHaveClass("linksOpen");
  });

  it("names nav links by their label alone", () => {
    renderWithRouter(<SiteNav />);

    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "#services");
  });

  it("ends the mobile menu with a link to the contact page that closes the menu", () => {
    renderWithRouter(<SiteNav />);
    fireEvent.click(screen.getByTestId(TestIds.SITE_NAV_MENU_BUTTON));

    const menuCta = screen.getByTestId(TestIds.SITE_NAV_MENU_CTA);
    expect(menuCta).toHaveAttribute("href", "/contact");

    fireEvent.click(menuCta);
    expect(screen.getByTestId(TestIds.SITE_NAV_LINKS)).not.toHaveClass("linksOpen");
  });

  it("sends the Start a project button to the contact page", () => {
    renderWithRouter(<SiteNav />);

    expect(screen.getByTestId(TestIds.SITE_NAV_CTA)).toHaveAttribute("href", "/contact");
  });
});
