import { describe, expect, it } from "vitest";
import type { Project } from "@/types/content";
import { projectToShowcaseItem } from "./showcaseItem";

const project: Project = {
  id: "kite",
  title: "Kite",
  description: "Money, calmer.",
  tags: ["React"],
  tone: "rose",
  art: "finance",
};

describe("projectToShowcaseItem", () => {
  it("carries over the project's content", () => {
    const item = projectToShowcaseItem(project, 0);

    expect(item).toMatchObject({ id: "kite", title: "Kite", description: "Money, calmer.", tags: ["React"], tone: "rose" });
  });

  it("numbers the kicker from the list position", () => {
    expect(projectToShowcaseItem(project, 1).kicker).toBe("Featured · 02");
  });

  it("links the CTA to the project's card when there's no repo", () => {
    const item = projectToShowcaseItem(project, 0);

    expect(item.destination).toEqual({ href: "#kite" });
    expect(item.ctaLabel).toBe("See how we built it");
  });

  it("links the CTA to the source code when there's a repo", () => {
    const item = projectToShowcaseItem({ ...project, repoUrl: "https://github.com/me/kite" }, 0);

    expect(item.destination).toEqual({ href: "https://github.com/me/kite" });
    expect(item.ctaLabel).toBe("View the code");
  });

  it("links the CTA to the case study when there is one", () => {
    const item = projectToShowcaseItem(
      { ...project, repoUrl: "https://github.com/me/kite", caseStudyRoute: "/work/kite" },
      0,
    );

    expect(item.destination).toEqual({ to: "/work/kite" });
    expect(item.ctaLabel).toBe("Read the case study");
  });
});
