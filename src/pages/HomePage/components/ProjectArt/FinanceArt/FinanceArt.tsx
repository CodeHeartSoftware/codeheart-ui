import { FINANCE_METRICS } from "@/constants/content";
import { HomeStrings } from "@/constants/strings";
import FinanceMetric from "./FinanceMetric";
import FinanceTab from "./FinanceTab";
import styles from "./FinanceArt.module.css";

/** A daily P&L curve that dips and recovers but trends up, ending above the dashed starting line. */
const PNL_LINE = "M0 74C18 73 28 66 42 68S64 60 80 63 104 50 120 54 146 44 160 47 184 33 200 38 226 27 242 31 270 19 300 21";
const PNL_AREA = `${PNL_LINE}V100H0Z`;

/** The Quant Fusion app as it really looks: its header, tab bar, and one model's simulation detail. */
const FinanceArt = () => (
  <div className={styles.window}>
    <div className={styles.titleBar}>
      <i />
      <i />
      <i />
    </div>
    <div className={styles.header}>
      <span className={styles.brand}>{HomeStrings.financeArt.APP_NAME}</span>
      <span className={styles.badge}>{HomeStrings.financeArt.SIMULATIONS_BADGE}</span>
    </div>
    <div className={styles.tabs}>
      {HomeStrings.financeArt.TABS.map((tab) => (
        <FinanceTab key={tab} label={tab} active={tab === HomeStrings.financeArt.ACTIVE_TAB} />
      ))}
    </div>
    <div className={styles.panel}>
      <div className={styles.model}>
        <b>{HomeStrings.financeArt.MODEL_NAME}</b>
        <span className={styles.status}>{HomeStrings.financeArt.MODEL_STATUS}</span>
        <span className={styles.details}>{HomeStrings.financeArt.SIMULATION_DETAILS}</span>
      </div>
      <div className={styles.metrics}>
        {FINANCE_METRICS.map((metric) => (
          <FinanceMetric key={metric.label} metric={metric} />
        ))}
      </div>
      <p className={styles.chartLabel}>{HomeStrings.financeArt.CHART_LABEL}</p>
      <svg className={styles.chart} viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
        <line className={styles.gridLine} x1="0" y1="25" x2="300" y2="25" />
        <line className={styles.gridLine} x1="0" y1="50" x2="300" y2="50" />
        <line className={styles.baseline} x1="0" y1="74" x2="300" y2="74" />
        <path className={styles.area} d={PNL_AREA} />
        <path className={styles.line} d={PNL_LINE} />
      </svg>
    </div>
  </div>
);

export default FinanceArt;
