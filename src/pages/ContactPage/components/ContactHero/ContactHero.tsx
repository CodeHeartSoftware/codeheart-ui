import Arrow from "@/components/Arrow/Arrow";
import Eyebrow from "@/components/Eyebrow/Eyebrow";
import PaperGrain from "@/components/PaperGrain/PaperGrain";
import { ContactStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import { useContactHero } from "./useContactHero";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  const { emailUs } = useContactHero();

  return (
    <section className={styles.hero}>
      <PaperGrain />
      <div className={cx("shell", styles.inner)}>
        <Eyebrow>{ContactStrings.hero.EYEBROW}</Eyebrow>
        <h1 className={styles.title}>
          <span className={styles.titleLead}>{ContactStrings.hero.TITLE_LEAD}</span>
          <em>{ContactStrings.hero.TITLE_EMPHASIS}</em>
        </h1>
        <p className={styles.lead}>{ContactStrings.hero.COPY}</p>
        <button className={styles.cta} type="button" onClick={emailUs} data-testid={TestIds.CONTACT_EMAIL_CTA}>
          {ContactStrings.hero.EMAIL_CTA}
          <span className={styles.ctaArrow}>
            <Arrow />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ContactHero;
