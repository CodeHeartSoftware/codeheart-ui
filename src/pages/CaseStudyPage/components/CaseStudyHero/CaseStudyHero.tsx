import Eyebrow from "@/components/Eyebrow/Eyebrow";
import TagList from "@/components/TagList/TagList";
import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import { CaseStudyStrings } from "@/constants/strings";
import type { CaseStudy } from "@/types/content";
import { cx } from "@/utils/classNames";
import CaseStudyFact from "./CaseStudyFact";
import styles from "./CaseStudyHero.module.css";

type CaseStudyHeroProps = {
  caseStudy: CaseStudy;
};

/** Typography-led hero: no product screenshots exist yet, so the facts panel carries the visual weight. */
const CaseStudyHero = ({ caseStudy }: CaseStudyHeroProps) => (
  <section className={cx("shell", styles.hero)}>
    <div className={styles.copy}>
      <Eyebrow>{CaseStudyStrings.EYEBROW}</Eyebrow>
      <h1 className={styles.title}>{caseStudy.title}</h1>
      <p className={styles.subtitle}>{caseStudy.subtitle}</p>
      <p className={styles.summary}>{caseStudy.summary}</p>
      <TagList tags={caseStudy.tags} tone="outline" ariaLabel={CaseStudyStrings.STACK_LABEL} />
    </div>
    <div className={styles.panel}>
      <dl className={styles.facts} aria-label={CaseStudyStrings.FACTS_LABEL}>
        {caseStudy.facts.map((fact) => (
          <CaseStudyFact key={fact.label} fact={fact} />
        ))}
      </dl>
      {caseStudy.repoUrl && (
        <UnderlineLink href={caseStudy.repoUrl} className={styles.repoLink}>
          {CaseStudyStrings.REPO_CTA}
        </UnderlineLink>
      )}
    </div>
  </section>
);

export default CaseStudyHero;
