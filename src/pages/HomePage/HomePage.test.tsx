import { fireEvent, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PROJECTS, SHOWCASE_ITEMS } from "@/constants/content";
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
