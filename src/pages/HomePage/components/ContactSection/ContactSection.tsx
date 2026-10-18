import LogoMark from "@/components/LogoMark/LogoMark";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import {Routes, SectionIds} from "@/constants/routes";
import {HomeStrings} from "@/constants/strings";
import {cx} from "@/utils/classNames";
import Reveal from "@/components/Reveal/Reveal";
import MarkRing from "./MarkRing";
import styles from "./ContactSection.module.css";

const CONTACT_MARK_SIZE = 75;

/** Enough rings at even spacing to reach the section's far corner from the mark. */
const RING_COUNT = 40;

const RING_INDICES = Array.from({ length: RING_COUNT }, (_, index) => index);

const ContactSection = () => (
  <section className={styles.contact} id={SectionIds.STUDIO}>
    <Reveal from="left" className={cx("shell", styles.inner)}>
      <SectionKicker tone="muted">{HomeStrings.contact.KICKER}</SectionKicker>
      <h2 className={styles.title}>
        {HomeStrings.contact.TITLE_LEAD}
        <em>{HomeStrings.contact.TITLE_EMPHASIS}</em>
      </h2>
      <UnderlineLink to={Routes.CONTACT} size="lg">
        {HomeStrings.contact.CTA}
      </UnderlineLink>
      <div className={styles.markRings}>
        {RING_INDICES.map((index) => (
          <MarkRing key={index} index={index} count={RING_COUNT} />
        ))}
        <LogoMark size={CONTACT_MARK_SIZE} className={styles.mark} />
      </div>
    </Reveal>
  </section>
);

export default ContactSection;
