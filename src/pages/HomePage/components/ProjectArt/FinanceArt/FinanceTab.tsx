import { cx } from "@/utils/classNames";
import styles from "./FinanceTab.module.css";

type FinanceTabProps = {
  label: string;
  active: boolean;
};

const FinanceTab = ({ label, active }: FinanceTabProps) => (
  <span className={cx(styles.tab, active && styles.active)}>{label}</span>
);

export default FinanceTab;
