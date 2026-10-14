import { HomeStrings } from "@/constants/strings";
import type { Project, ShowcaseItem } from "@/types/content";
import { formatIndexNumber } from "./formatIndexNumber";
import { toSectionHref } from "./scroll";

/**
 * Turns a featured project into a hero showcase item. Its CTA opens the project's public source
 * when it has one, otherwise it jumps to the project's card on the page.
 */
export const projectToShowcaseItem = (project: Project, index: number): ShowcaseItem => ({
  id: project.id,
  title: project.title,
  description: project.description,
  tags: project.tags,
  tone: project.tone,
  kicker: HomeStrings.showcase.featuredKicker(formatIndexNumber(index)),
  ctaLabel: project.repoUrl ? HomeStrings.showcase.VIEW_CODE_CTA : HomeStrings.showcase.CTA,
  destination: { href: project.repoUrl ?? toSectionHref(project.id) },
});
