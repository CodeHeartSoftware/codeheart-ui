import Arrow from "@/components/Arrow/Arrow";
import Eyebrow from "@/components/Eyebrow/Eyebrow";
import { ContactStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import { useContactHero } from "./useContactHero";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  const { emailUs } = useContactHero();

  return (
    <section className={cx("shell", styles.hero)}>
      <Eyebrow>{ContactStrings.hero.EYEBROW}</Eyebrow>
      <h1 className={styles.title}>
        {ContactStrings.hero.TITLE_LEAD}
        <em>{ContactStrings.hero.TITLE_EMPHASIS}</em>
      </h1>
      <p className={styles.lead}>{ContactStrings.hero.COPY}</p>
      <button className={styles.cta} type="button" onClick={emailUs} data-testid={TestIds.CONTACT_EMAIL_CTA}>
        {ContactStrings.hero.EMAIL_CTA}
        <span className={styles.ctaArrow}>
          <Arrow />
        </span>
      </button>
    </section>
  );
};

export default ContactHero;
