import { describe, expect, it } from "vitest";
import type { Project } from "@/types/content";
import type { SnippetLine } from "@/types/snippet";
import { buildProjectSnippet } from "./projectSnippet";

const project: Project = {
  id: "kite",
  title: "Kite",
  description: "",
  tags: ["React", "Fintech", "Web app", "Charts"],
  tone: "blush",
  art: "finance",
};

const lineText = (line: SnippetLine) => line.map((token) => token.text).join("");

describe("buildProjectSnippet", () => {
  it("names the project", () => {
    const lines = buildProjectSnippet(project).map(lineText);

    expect(lines).toContain('  name: "Kite",');
  });

  it("lists at most three tags as the stack", () => {
    const lines = buildProjectSnippet(project).map(lineText);

    expect(lines).toContain('  stack: ["React", "Fintech", "Web app"],');
  });

  it("handles a project without tags", () => {
    const lines = buildProjectSnippet({ ...project, tags: [] }).map(lineText);

    expect(lines).toContain("  stack: [],");
  });

  it("keeps blank spacer lines empty", () => {
    expect(buildProjectSnippet(project)[1]).toEqual([]);
  });
});
