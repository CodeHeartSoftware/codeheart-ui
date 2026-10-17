import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./ServiceStep.module.css";

type ServiceStepProps = {
  step: string;
  index: number;
};

const ServiceStep = ({ step, index }: ServiceStepProps) => (
  <li className={styles.step}>
    <span className={styles.number}>{formatIndexNumber(index)}</span>
    {step}
  </li>
);

export default ServiceStep;
