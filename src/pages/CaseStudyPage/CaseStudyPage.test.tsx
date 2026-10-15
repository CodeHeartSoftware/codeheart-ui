import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CASE_STUDIES, QUANT_FUSION_CASE_STUDY, THUNDERDOME_CASE_STUDY } from "@/constants/caseStudies";
import { renderWithRouter } from "@/test/renderWithRouter";
import CaseStudyPage from "./CaseStudyPage";

describe("CaseStudyPage", () => {
  it.each(CASE_STUDIES)("renders every section of $title", (caseStudy) => {
    renderWithRouter(<CaseStudyPage caseStudy={caseStudy} />, caseStudy.route);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(caseStudy.title);
    caseStudy.sections.forEach((section) => {
      expect(screen.getByRole("heading", { level: 2, name: section.title })).toBeInTheDocument();
    });
    expect(document.title).toBe(caseStudy.meta.title);
  });

  it("links to the source, the next case study, the contact page, and the services section", () => {
    renderWithRouter(<CaseStudyPage caseStudy={THUNDERDOME_CASE_STUDY} />, THUNDERDOME_CASE_STUDY.route);

    expect(screen.getByRole("link", { name: /View the source on GitHub/ })).toHaveAttribute(
      "href",
      THUNDERDOME_CASE_STUDY.repoUrl,
    );
    expect(screen.getByRole("link", { name: new RegExp(QUANT_FUSION_CASE_STUDY.title) })).toHaveAttribute(
      "href",
      QUANT_FUSION_CASE_STUDY.route,
    );
    expect(screen.getByRole("link", { name: /Discuss a project/ })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /See our services/ })).toHaveAttribute("href", "/#services");
  });
});
