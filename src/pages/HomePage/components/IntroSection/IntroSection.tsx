import SectionKicker from "@/components/SectionKicker/SectionKicker";
import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import { Routes, SectionIds } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import styles from "./IntroSection.module.css";

const IntroSection = () => (
  <section className={cx("shell", styles.intro)} id={SectionIds.APPROACH}>
    <SectionKicker>{HomeStrings.intro.KICKER}</SectionKicker>
    <p className={styles.statement}>
      {HomeStrings.intro.STATEMENT_LEAD}
      <em>{HomeStrings.intro.STATEMENT_EMPHASIS}</em>
    </p>
    <div className={styles.aside}>
      <p>{HomeStrings.intro.ASIDE}</p>
      <UnderlineLink to={Routes.HOW_WE_WORK}>{HomeStrings.intro.HOW_WE_WORK_LINK}</UnderlineLink>
    </div>
  </section>
);

export default IntroSection;
