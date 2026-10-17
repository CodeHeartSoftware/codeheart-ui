import { fireEvent, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PROJECTS, SERVICES, SHOWCASE_ITEMS } from "@/constants/content";
import { buildProjectCardTestId, buildShowcaseTabTestId, TestIds } from "@/constants/testIds";
import { renderWithRouter } from "@/test/renderWithRouter";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders a card for every project", () => {
    renderWithRouter(<HomePage />);
    const list = screen.getByTestId(TestIds.PROJECT_LIST);

    PROJECTS.forEach((project) => {
      expect(within(list).getByTestId(buildProjectCardTestId(project.id))).toHaveTextContent(project.title);
    });
  });

  it("renders the services right after the intro, each with a contact link", () => {
    renderWithRouter(<HomePage />);
    const list = screen.getByTestId(TestIds.SERVICE_LIST);
    const servicesSection = list.closest("section");

    expect(servicesSection?.previousElementSibling).toHaveTextContent("What we believe");
    SERVICES.forEach((service) => {
      expect(within(list).getByRole("heading", { name: new RegExp(service.title) })).toBeInTheDocument();
      expect(within(list).getByRole("link", { name: service.ctaLabel })).toHaveAttribute("href", "/contact");
    });
  });

  it("opens the featured service by default and never shows prices", () => {
    renderWithRouter(<HomePage />);
    const list = screen.getByTestId(TestIds.SERVICE_LIST);

    SERVICES.forEach((service) => {
      const spine = within(list).getByRole("button", { name: new RegExp(service.title) });
      expect(spine).toHaveAttribute("aria-expanded", String(Boolean(service.isFeatured)));
    });
    expect(list.textContent).not.toMatch(/\$\s?\d/);
  });

  it("opens a service when its spine is clicked", () => {
    renderWithRouter(<HomePage />);
    const list = screen.getByTestId(TestIds.SERVICE_LIST);
    const lastService = SERVICES[SERVICES.length - 1];

    fireEvent.click(within(list).getByRole("button", { name: new RegExp(lastService.title) }));

    expect(within(list).getAllByRole("button", { expanded: true })).toHaveLength(1);
    expect(within(list).getByRole("button", { name: new RegExp(lastService.title) })).toHaveAttribute("aria-expanded", "true");
  });

  it("links each project card to its case study", () => {
    renderWithRouter(<HomePage />);
    const list = screen.getByTestId(TestIds.PROJECT_LIST);

    PROJECTS.filter((project) => project.caseStudyRoute).forEach((project) => {
      const card = within(list).getByTestId(buildProjectCardTestId(project.id));
      expect(within(card).getByRole("link", { name: `Read the case study: ${project.title}` })).toHaveAttribute(
        "href",
        project.caseStudyRoute,
      );
    });
  });

  it("sends the primary hero CTA to the contact page", () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByTestId(TestIds.HERO_PRIMARY_CTA)).toHaveAttribute("href", "/contact");
  });

  it("links to the how-we-work page", () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByRole("link", { name: "How we work" })).toHaveAttribute("href", "/how-we-work");
  });

  it("shows a hero showcase tab for every showcase item", () => {
    renderWithRouter(<HomePage />);

    SHOWCASE_ITEMS.forEach((item) => {
      expect(screen.getByTestId(buildShowcaseTabTestId(item.id))).toHaveTextContent(item.title);
    });
  });

  it("ends the showcase with a link to the contact page", () => {
    renderWithRouter(<HomePage />);
    const lastItem = SHOWCASE_ITEMS[SHOWCASE_ITEMS.length - 1];

    fireEvent.click(screen.getByTestId(buildShowcaseTabTestId(lastItem.id)));

    expect(screen.getByTestId(TestIds.SHOWCASE_PREVIEW_CTA)).toHaveAttribute("href", "/contact");
  });

  it("keeps a single showcase panel when switching projects", () => {
    renderWithRouter(<HomePage />);

    SHOWCASE_ITEMS.forEach((item) => fireEvent.click(screen.getByTestId(buildShowcaseTabTestId(item.id))));

    expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
  });
});
