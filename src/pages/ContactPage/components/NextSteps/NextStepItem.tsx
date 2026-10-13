import type { ProcessStep } from "@/types/content";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./NextStepItem.module.css";

type NextStepItemProps = {
  step: ProcessStep;
  index: number;
};

const NextStepItem = ({ step, index }: NextStepItemProps) => (
  <li className={styles.item}>
    <span className={styles.number}>{formatIndexNumber(index)}</span>
    <div>
      <h3>{step.step}</h3>
      <p>{step.text}</p>
    </div>
  </li>
);

export default NextStepItem;
