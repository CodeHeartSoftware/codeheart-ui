import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { renderWithRouter } from "@/test/renderWithRouter";
import AppLink from "./AppLink";

describe("AppLink", () => {
  afterEach(() => {
    delete document.documentElement.dataset.navDirection;
  });

  it("renders a router link for `to`", () => {
    renderWithRouter(<AppLink to="/how-we-work">How we work</AppLink>);

    expect(screen.getByRole("link", { name: "How we work" })).toHaveAttribute("href", "/how-we-work");
  });

  it("renders a plain anchor for `href` without needing a router", () => {
    render(<AppLink href="mailto:hi@example.com">Email</AppLink>);

    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:hi@example.com");
  });

  it("opens external links in a new tab without leaking the opener", () => {
    render(<AppLink href="https://github.com/me/repo">Code</AppLink>);

    const link = screen.getByRole("link", { name: "Code" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("keeps in-page links in the same tab", () => {
    render(<AppLink href="#work">Work</AppLink>);

    expect(screen.getByRole("link", { name: "Work" })).not.toHaveAttribute("target");
  });

  it("tags route changes with a slide direction", () => {
    renderWithRouter(
      <>
        <AppLink to="/contact">Contact</AppLink>
        <AppLink to="/">Home</AppLink>
      </>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Contact" }));
    expect(document.documentElement.dataset.navDirection).toBe("forward");

    fireEvent.click(screen.getByRole("link", { name: "Home" }));
    expect(document.documentElement.dataset.navDirection).toBe("back");
  });

  it("smooth-scrolls in-page anchors instead of jumping", () => {
    const section = document.createElement("section");
    section.id = "work";
    section.scrollIntoView = vi.fn();
    document.body.append(section);
    render(<AppLink href="#work">Work</AppLink>);

    fireEvent.click(screen.getByRole("link", { name: "Work" }));

    expect(section.scrollIntoView).toHaveBeenCalledOnce();
    section.remove();
  });
});
