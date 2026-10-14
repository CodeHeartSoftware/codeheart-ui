import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { PROJECTS } from "@/constants/content";
import { SectionIds } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./WorkSection.module.css";

const WorkSection = () => (
  <section className={styles.section} id={SectionIds.WORK}>
    <div className={cx("shell", styles.heading)}>
      <div>
        <SectionKicker>{HomeStrings.work.KICKER}</SectionKicker>
        <h2>{HomeStrings.work.TITLE}</h2>
      </div>
      <p>{HomeStrings.work.SUMMARY}</p>
    </div>

    <div className={cx("shell", styles.projectList)} data-testid={TestIds.PROJECT_LIST}>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </section>
);

export default WorkSection;
