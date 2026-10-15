import Arrow from "@/components/Arrow/Arrow";
import TagList from "@/components/TagList/TagList";
import AppLink from "@/components/AppLink/AppLink";
import { buildProjectCardTestId } from "@/constants/testIds";
import type { Project, ProjectTone } from "@/types/content";
import { cx } from "@/utils/classNames";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import { getProjectCardLink } from "@/utils/projectLink";
import ProjectArt from "../ProjectArt/ProjectArt";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const toneClassNames: Record<ProjectTone, string> = {
  blush: styles.blush,
  rose: styles.rose,
  berry: styles.berry,
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const link = getProjectCardLink(project);

  return (
    <article
      id={project.id}
      className={cx(styles.card, toneClassNames[project.tone])}
      data-testid={buildProjectCardTestId(project.id)}
    >
      <div className={styles.info}>
        <span className={styles.number}>{formatIndexNumber(index)}</span>
        <div className={styles.summary}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <TagList tags={project.tags} tone="ink" />
      </div>
      <div className={styles.art}>
        <ProjectArt type={project.art} />
      </div>
      {/* One link covering the whole card; the arrow badge is its only visible cue. */}
      <AppLink className={styles.cardLink} {...link.destination} aria-label={link.label}>
        <span className={styles.arrowBadge}>
          <Arrow diagonal />
        </span>
      </AppLink>
    </article>
  );
};

export default ProjectCard;
