import Arrow from "@/components/Arrow/Arrow";
import type { DiagramNode } from "@/types/content";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./DiagramStep.module.css";

type DiagramStepProps = {
  node: DiagramNode;
  index: number;
};

const DiagramStep = ({ node, index }: DiagramStepProps) => (
  <li className={styles.step}>
    <span className={styles.number}>
      {formatIndexNumber(index)}
      <Arrow className={styles.arrow} />
    </span>
    <strong className={styles.label}>{node.label}</strong>
    <span className={styles.detail}>{node.detail}</span>
  </li>
);

export default DiagramStep;
