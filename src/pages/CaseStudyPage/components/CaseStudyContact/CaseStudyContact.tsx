import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import { Routes, SectionIds } from "@/constants/routes";
import { CaseStudyStrings } from "@/constants/strings";
import type { RevealDirection } from "@/utils/reveal";
import { toHomeSectionRoute } from "@/utils/scroll";
import styles from "./CaseStudyContact.module.css";

type CaseStudyContactProps = {
  revealFrom: RevealDirection;
};

const CaseStudyContact = ({ revealFrom }: CaseStudyContactProps) => (
  <section className={styles.section}>
    <Reveal from={revealFrom} className="shell">
      <SectionKicker tone="muted">{CaseStudyStrings.contact.KICKER}</SectionKicker>
      <h2 className={styles.title}>
        {CaseStudyStrings.contact.TITLE_LEAD}
        <em>{CaseStudyStrings.contact.TITLE_EMPHASIS}</em>
      </h2>
      <div className={styles.links}>
        <UnderlineLink to={Routes.CONTACT} size="md">
          {CaseStudyStrings.contact.CTA}
        </UnderlineLink>
        <UnderlineLink to={toHomeSectionRoute(SectionIds.SERVICES)} size="md">
          {CaseStudyStrings.contact.SERVICES_LINK}
        </UnderlineLink>
      </div>
    </Reveal>
  </section>
);

export default CaseStudyContact;
