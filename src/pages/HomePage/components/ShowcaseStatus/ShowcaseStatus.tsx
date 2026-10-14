import { HomeStrings } from "@/constants/strings";
import styles from "./ShowcaseStatus.module.css";

type ShowcaseStatusProps = {
  title: string;
};

/** Editor status bar: a heartbeat line plus "Building…" that flips to "Live" when the preview lands. */
const ShowcaseStatus = ({ title }: ShowcaseStatusProps) => (
  <div className={styles.status}>
    <svg className={styles.pulse} viewBox="0 0 120 24" aria-hidden="true">
      <path d="M0 12h40l6-9 8 18 6-14 4 5h56" />
    </svg>
    <span className={styles.messages} aria-live="polite">
      <span className={styles.building}>{HomeStrings.showcase.statusBuilding(title)}</span>
      <span className={styles.live}>{HomeStrings.showcase.STATUS_LIVE}</span>
    </span>
  </div>
);

export default ShowcaseStatus;
