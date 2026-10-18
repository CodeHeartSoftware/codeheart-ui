import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import Eyebrow from "@/components/Eyebrow/Eyebrow";
import { Routes, SectionIds } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import styles from "./HeroIntro.module.css";

type HeroIntroProps = {
  onExplore: () => void;
};

const HeroIntro = ({ onExplore }: HeroIntroProps) => (
  <div className={cx("shell", styles.content)} id={SectionIds.TOP}>
    <Eyebrow className={styles.fadeIn}>{HomeStrings.hero.EYEBROW}</Eyebrow>
    <h1 className={styles.title}>
      <span className={styles.titleLine}>{HomeStrings.hero.TITLE_LEAD}</span>
      <span className={cx(styles.titleLine, styles.titleLineTwo)}>
        <em>{HomeStrings.hero.TITLE_EMPHASIS}</em>
      </span>
    </h1>
    <p className={cx(styles.subtitle, styles.fadeIn, styles.delayOne)}>{HomeStrings.hero.SUBTITLE}</p>
    <p className={cx(styles.copy, styles.fadeIn, styles.delayOne)}>{HomeStrings.hero.COPY}</p>
    <div className={cx(styles.actions, styles.fadeIn, styles.delayTwo)}>
      <AppLink className={styles.cta} to={Routes.CONTACT} data-testid={TestIds.HERO_PRIMARY_CTA}>
        {HomeStrings.hero.PRIMARY_CTA}
        <span className={styles.ctaArrow}>
          <Arrow />
        </span>
      </AppLink>
      <button
        className={styles.secondaryCta}
        type="button"
        onClick={onExplore}
        data-testid={TestIds.HERO_EXPLORE_BUTTON}
      >
        {HomeStrings.hero.SECONDARY_CTA}
      </button>
    </div>
  </div>
);

export default HeroIntro;
