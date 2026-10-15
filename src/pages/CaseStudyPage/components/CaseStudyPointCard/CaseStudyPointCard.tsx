import { CaseStudyStrings } from "@/constants/strings";
import type { CaseStudyPoint, CaseStudyStatus } from "@/types/content";
import { cx } from "@/utils/classNames";
import styles from "./CaseStudyPointCard.module.css";

type CaseStudyPointCardProps = {
  point: CaseStudyPoint;
};

const statusClassNames: Record<CaseStudyStatus, string> = {
  implemented: styles.implemented,
  inProgress: styles.inProgress,
  planned: styles.planned,
};

const CaseStudyPointCard = ({ point }: CaseStudyPointCardProps) => (
  <article className={styles.card}>
    {point.status && (
      <span className={cx(styles.status, statusClassNames[point.status])}>
        {CaseStudyStrings.status[point.status]}
      </span>
    )}
    <h3>{point.title}</h3>
    <p>{point.text}</p>
  </article>
);

export default CaseStudyPointCard;
