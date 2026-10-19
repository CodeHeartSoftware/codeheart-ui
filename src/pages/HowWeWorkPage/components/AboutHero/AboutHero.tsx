import Eyebrow from "@/components/Eyebrow/Eyebrow";
import PaperGrain from "@/components/PaperGrain/PaperGrain";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import FounderPortrait from "../FounderPortrait/FounderPortrait";
import FounderBadgeSlot from "./FounderBadgeSlot";
import { useAboutHero } from "./useAboutHero";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
  const { showBadge } = useAboutHero();

  return (
    <section className={styles.hero}>
      <PaperGrain />
      <div className={cx("shell", styles.inner)}>
        <div className={styles.copy}>
          <Eyebrow>{HowWeWorkStrings.hero.EYEBROW}</Eyebrow>
          <h1 className={styles.title}>
            {HowWeWorkStrings.hero.TITLE_LEAD}
            <em>{HowWeWorkStrings.hero.TITLE_EMPHASIS}</em>
          </h1>
          <p className={styles.lead}>{HowWeWorkStrings.hero.COPY}</p>
        </div>
        {showBadge ? (
          <FounderBadgeSlot className={styles.badge} />
        ) : (
          <FounderPortrait className={styles.portrait} />
        )}
      </div>
    </section>
  );
};

export default AboutHero;
