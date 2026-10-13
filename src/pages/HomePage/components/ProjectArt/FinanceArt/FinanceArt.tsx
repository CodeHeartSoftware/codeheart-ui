import { HomeStrings } from "@/constants/strings";
import styles from "./FinanceArt.module.css";

/** Desktop dashboard mockup for the Quant Fusion card. */
const FinanceArt = () => (
  <div className={styles.device}>
    <div className={styles.deviceBar}>
      <i />
      <i />
      <i />
    </div>
    <div className={styles.screen}>
      <div className={styles.heading}>
        <span>{HomeStrings.financeArt.HEADING_KICKER}</span>
        <b>{HomeStrings.financeArt.GREETING}</b>
      </div>
      <div className={styles.balanceCard}>
        <small>{HomeStrings.financeArt.BALANCE_LABEL}</small>
        <strong>{HomeStrings.financeArt.BALANCE}</strong>
        <div className={styles.chartLine}>
          <svg viewBox="0 0 240 70" preserveAspectRatio="none">
            <path d="M0 59C22 62 31 33 55 39s30 16 48 2 32-34 51-23 25 29 42 12 28-12 44-17" />
          </svg>
        </div>
      </div>
      <div className={styles.statRow}>
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

export default FinanceArt;
