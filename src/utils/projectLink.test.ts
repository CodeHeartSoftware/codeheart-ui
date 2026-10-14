import { describe, expect, it } from "vitest";
import type { Project } from "@/types/content";
import { getProjectCardLink } from "./projectLink";

const project: Project = {
  id: "kite",
  title: "Kite",
  description: "",
  tags: [],
  tone: "blush",
  art: "finance",
};

describe("getProjectCardLink", () => {
  it("links to the source code when the project has a repo", () => {
    const link = getProjectCardLink({ ...project, repoUrl: "https://github.com/me/kite" });

    expect(link.destination).toEqual({ href: "https://github.com/me/kite" });
    expect(link.label).toContain("source code");
  });

  it("falls back to the contact page", () => {
    const link = getProjectCardLink(project);

    expect(link.destination).toEqual({ to: "/contact" });
    expect(link.label).toBe("Ask us about Kite");
  });
});
