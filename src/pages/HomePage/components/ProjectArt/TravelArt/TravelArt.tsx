import { HomeStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import styles from "./TravelArt.module.css";

/** Postcard-and-note travel mockup (currently unused). */
const TravelArt = () => (
  <div className={styles.scene}>
    <div className={styles.postcard}>
      <div className={styles.sun} />
      <div className={cx(styles.hill, styles.hillBack)} />
      <div className={styles.hill} />
      <span className={styles.destination}>{HomeStrings.travelArt.DESTINATION}</span>
    </div>
    <div className={styles.note}>
      <small>{HomeStrings.travelArt.TRIP_DETAILS}</small>
      <strong>{HomeStrings.travelArt.TAGLINE}</strong>
      <div className={styles.avatars}>
        <i />
        <i />
        <i />
        <b>{HomeStrings.travelArt.EXTRA_TRAVELERS}</b>
      </div>
    </div>
  </div>
);

export default TravelArt;
