import { HomeStrings } from "@/constants/strings";
import styles from "./MobileArt.module.css";

/** Phone mockup (currently unused). */
const MobileArt = () => (
  <div className={styles.phone}>
    <div className={styles.notch} />
    <div className={styles.screen}>
      <small>{HomeStrings.mobileArt.DATE}</small>
      <strong>{HomeStrings.mobileArt.PROMPT}</strong>
      <div className={styles.moodRow}>
        <i />
        <i />
        <i className={styles.activeMood} />
        <i />
      </div>
      <div className={styles.appointment}>
        <span className={styles.avatar}>{HomeStrings.mobileArt.AVATAR_INITIALS}</span>
        <span className={styles.appointmentDetails}>
          <b>{HomeStrings.mobileArt.APPOINTMENT_TITLE}</b>
          <small>{HomeStrings.mobileArt.APPOINTMENT_TIME}</small>
        </span>
      </div>
      <div className={styles.pulseCard}>
        <small>{HomeStrings.mobileArt.WEEK_LABEL}</small>
        <div className={styles.pulseBars}>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  </div>
);

export default MobileArt;
