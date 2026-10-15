import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { PROJECTS } from "@/constants/content";
import { SectionIds } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import ProjectCard from "../ProjectCard/ProjectCard";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./WorkSection.module.css";

const WorkSection = () => (
  <section className={styles.section} id={SectionIds.WORK}>
    <Reveal from="right" className={cx("shell", styles.heading)}>
      <div>
        <SectionKicker>{HomeStrings.work.KICKER}</SectionKicker>
        <h2>{HomeStrings.work.TITLE}</h2>
      </div>
      <p>{HomeStrings.work.SUMMARY}</p>
    </Reveal>

    {/* Each card reveals on its own, since the list is taller than the viewport. */}
    <div className={cx("shell", styles.projectList)} data-testid={TestIds.PROJECT_LIST}>
      {PROJECTS.map((project, index) => (
        <Reveal key={project.id} from="right">
          <ProjectCard project={project} index={index} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default WorkSection;
