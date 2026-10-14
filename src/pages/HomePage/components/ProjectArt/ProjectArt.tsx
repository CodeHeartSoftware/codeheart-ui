import type { ComponentType } from "react";
import type { ProjectArtType } from "@/types/content";
import FinanceArt from "./FinanceArt/FinanceArt";
import MobileArt from "./MobileArt/MobileArt";
import TerminalArt from "./TerminalArt/TerminalArt";
import TravelArt from "./TravelArt/TravelArt";

type ProjectArtProps = {
  type: ProjectArtType;
};

const artComponents: Record<ProjectArtType, ComponentType> = {
  finance: FinanceArt,
  mobile: MobileArt,
  travel: TravelArt,
  terminal: TerminalArt,
};

const ProjectArt = ({ type }: ProjectArtProps) => {
  const Art = artComponents[type];

  return <Art />;
};

export default ProjectArt;
