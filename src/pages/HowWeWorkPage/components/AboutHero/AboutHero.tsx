import Eyebrow from "@/components/Eyebrow/Eyebrow";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import FounderPortrait from "../FounderPortrait/FounderPortrait";
import styles from "./AboutHero.module.css";

const AboutHero = () => (
  <section className={cx("shell", styles.hero)}>
    <div className={styles.copy}>
      <Eyebrow>{HowWeWorkStrings.hero.EYEBROW}</Eyebrow>
      <h1 className={styles.title}>
        {HowWeWorkStrings.hero.TITLE_LEAD}
        <em>{HowWeWorkStrings.hero.TITLE_EMPHASIS}</em>
      </h1>
      <p className={styles.lead}>{HowWeWorkStrings.hero.COPY}</p>
    </div>
    <FounderPortrait className={styles.portrait} />
  </section>
);

export default AboutHero;
