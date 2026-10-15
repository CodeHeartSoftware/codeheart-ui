import { HomeStrings } from "@/constants/strings";
import type { Project, ShowcaseItem } from "@/types/content";
import { formatIndexNumber } from "./formatIndexNumber";
import { toSectionHref } from "./scroll";

type ShowcaseCta = Pick<ShowcaseItem, "ctaLabel" | "destination">;

/** The case study when there is one, then the public source, otherwise the project's card on the page. */
const getShowcaseCta = (project: Project): ShowcaseCta => {
  if (project.caseStudyRoute) {
    return { ctaLabel: HomeStrings.showcase.CASE_STUDY_CTA, destination: { to: project.caseStudyRoute } };
  }
  if (project.repoUrl) {
    return { ctaLabel: HomeStrings.showcase.VIEW_CODE_CTA, destination: { href: project.repoUrl } };
  }
  return { ctaLabel: HomeStrings.showcase.CTA, destination: { href: toSectionHref(project.id) } };
};

/** Turns a featured project into a hero showcase item. */
export const projectToShowcaseItem = (project: Project, index: number): ShowcaseItem => ({
  id: project.id,
  title: project.title,
  description: project.description,
  tags: project.tags,
  tone: project.tone,
  kicker: HomeStrings.showcase.featuredKicker(formatIndexNumber(index)),
  ...getShowcaseCta(project),
});
