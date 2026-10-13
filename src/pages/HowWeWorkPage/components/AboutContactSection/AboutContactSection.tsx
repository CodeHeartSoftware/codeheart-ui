import SectionKicker from "@/components/SectionKicker/SectionKicker";
import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import {Routes} from "@/constants/routes";
import {HowWeWorkStrings} from "@/constants/strings";
import styles from "./AboutContactSection.module.css";

const AboutContactSection = () => (
  <section className={styles.section}>
    <div className="shell">
      <SectionKicker tone="inverse">{HowWeWorkStrings.contact.KICKER}</SectionKicker>
      <h2 className={styles.title}>
        {HowWeWorkStrings.contact.TITLE_LEAD}
        <em>{HowWeWorkStrings.contact.TITLE_EMPHASIS}</em>
      </h2>
      <UnderlineLink to={Routes.CONTACT} size="md">
        {HowWeWorkStrings.contact.CTA}
      </UnderlineLink>
    </div>
  </section>
);

export default AboutContactSection;
