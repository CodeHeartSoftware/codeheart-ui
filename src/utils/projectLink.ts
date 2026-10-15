import { Routes } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import type { LinkDestination, Project } from "@/types/content";

type ProjectLink = {
  destination: LinkDestination;
  label: string;
};

/**
 * Where a project card's arrow goes: its case study when there is one, then its public source,
 * otherwise the contact page.
 */
export const getProjectCardLink = (project: Project): ProjectLink => {
  if (project.caseStudyRoute) {
    return { destination: { to: project.caseStudyRoute }, label: HomeStrings.work.caseStudyLabel(project.title) };
  }
  if (project.repoUrl) {
    return { destination: { href: project.repoUrl }, label: HomeStrings.work.viewSourceLabel(project.title) };
  }
  return { destination: { to: Routes.CONTACT }, label: HomeStrings.work.askAboutLabel(project.title) };
};
