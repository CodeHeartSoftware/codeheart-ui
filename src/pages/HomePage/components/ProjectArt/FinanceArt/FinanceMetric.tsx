import type { FinanceMetricData, FinanceMetricTone } from "@/types/content";
import styles from "./FinanceMetric.module.css";

type FinanceMetricProps = {
  metric: FinanceMetricData;
};

const toneClassNames: Record<FinanceMetricTone, string> = {
  neutral: styles.neutral,
  positive: styles.positive,
  negative: styles.negative,
};

const FinanceMetric = ({ metric }: FinanceMetricProps) => (
  <div className={styles.metric}>
    <span className={styles.label}>{metric.label}</span>
    <span className={toneClassNames[metric.tone]}>{metric.value}</span>
  </div>
);

export default FinanceMetric;
