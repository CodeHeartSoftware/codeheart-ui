import { describe, expect, it } from "vitest";
import type { CaseStudy } from "@/types/content";
import { getNextCaseStudy } from "./caseStudy";

const buildCaseStudy = (id: string): CaseStudy => ({
  id,
  route: `/work/${id}`,
  meta: { title: id, description: id },
  title: id,
  subtitle: "",
  summary: "",
  tags: [],
  facts: [],
  sections: [],
});

const caseStudies = [buildCaseStudy("kite"), buildCaseStudy("lark"), buildCaseStudy("wren")];

describe("getNextCaseStudy", () => {
  it("returns the following case study", () => {
    expect(getNextCaseStudy(caseStudies, "kite").id).toBe("lark");
  });

  it("loops back to the first after the last", () => {
    expect(getNextCaseStudy(caseStudies, "wren").id).toBe("kite");
  });

  it("starts from the first when the id is unknown", () => {
    expect(getNextCaseStudy(caseStudies, "owl").id).toBe("kite");
  });
});
