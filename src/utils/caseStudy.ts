import type { CaseStudy } from "@/types/content";
import { wrapIndex } from "./wrapIndex";

/** The case study after `currentId`, looping back to the first, for the "next case study" link. */
export const getNextCaseStudy = (caseStudies: CaseStudy[], currentId: string): CaseStudy => {
  const currentIndex = caseStudies.findIndex((caseStudy) => caseStudy.id === currentId);
  return caseStudies[wrapIndex(currentIndex + 1, caseStudies.length)];
};
