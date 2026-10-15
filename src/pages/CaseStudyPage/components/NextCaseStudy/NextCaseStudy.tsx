import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { CaseStudyStrings } from "@/constants/strings";
import type { CaseStudy } from "@/types/content";
import type { RevealDirection } from "@/utils/reveal";
import { cx } from "@/utils/classNames";
import styles from "./NextCaseStudy.module.css";

type NextCaseStudyProps = {
  caseStudy: CaseStudy;
  revealFrom: RevealDirection;
};

const NextCaseStudy = ({ caseStudy, revealFrom }: NextCaseStudyProps) => (
  <Reveal as="section" from={revealFrom} className={cx("shell", styles.section)}>
    <AppLink to={caseStudy.route} className={styles.link}>
      <SectionKicker>{CaseStudyStrings.next.KICKER}</SectionKicker>
      <span className={styles.title}>
        {caseStudy.title}
        <span className={styles.arrow}>
          <Arrow />
        </span>
      </span>
      <span className={styles.subtitle}>{caseStudy.subtitle}</span>
    </AppLink>
  </Reveal>
);

export default NextCaseStudy;
