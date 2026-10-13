import { Routes } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import type { LinkDestination, Project } from "@/types/content";

type ProjectLink = {
  destination: LinkDestination;
  label: string;
};

/** Where a project card's arrow goes: its public source when there is one, otherwise the contact page. */
export const getProjectCardLink = (project: Project): ProjectLink =>
  project.repoUrl
    ? { destination: { href: project.repoUrl }, label: HomeStrings.work.viewSourceLabel(project.title) }
    : { destination: { to: Routes.CONTACT }, label: HomeStrings.work.askAboutLabel(project.title) };
