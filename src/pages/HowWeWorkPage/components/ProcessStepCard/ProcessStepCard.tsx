import type { ProcessStep } from "@/types/content";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./ProcessStepCard.module.css";

type ProcessStepCardProps = {
  step: ProcessStep;
  index: number;
};

const ProcessStepCard = ({ step, index }: ProcessStepCardProps) => (
  <article className={styles.card}>
    <span className={styles.number}>{formatIndexNumber(index)}</span>
    <h3>{step.step}</h3>
    <p>{step.text}</p>
  </article>
);

export default ProcessStepCard;
