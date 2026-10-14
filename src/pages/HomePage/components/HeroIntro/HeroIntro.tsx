import Arrow from "@/components/Arrow/Arrow";
import Eyebrow from "@/components/Eyebrow/Eyebrow";
import { SectionIds } from "@/constants/routes";
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
      <span className={styles.titleLine}>{HomeStrings.hero.TITLE_LINE_ONE}</span>
      <span className={cx(styles.titleLine, styles.titleLineTwo)}>{HomeStrings.hero.TITLE_LINE_TWO}</span>
      <span className={cx(styles.titleLine, styles.titleLineThree)}>
        <em>{HomeStrings.hero.TITLE_EMPHASIS}</em>
      </span>
    </h1>
    <p className={cx(styles.copy, styles.fadeIn, styles.delayOne)}>{HomeStrings.hero.COPY}</p>
    <button
      className={cx(styles.cta, styles.fadeIn, styles.delayTwo)}
      type="button"
      onClick={onExplore}
      data-testid={TestIds.HERO_EXPLORE_BUTTON}
    >
      {HomeStrings.hero.CTA}
      <span className={styles.ctaArrow}>
        <Arrow />
      </span>
    </button>
  </div>
);

export default HeroIntro;
