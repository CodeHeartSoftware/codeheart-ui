import PageHeader from "@/components/PageHeader/PageHeader";
import { PageMetaStrings } from "@/constants/strings";
import { usePageMeta } from "@/hooks/usePageMeta";
import ContactHero from "./components/ContactHero/ContactHero";
import InquiryChecklist from "./components/InquiryChecklist/InquiryChecklist";
import NextSteps from "./components/NextSteps/NextSteps";
import { cx } from "@/utils/classNames";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  usePageMeta(PageMetaStrings.CONTACT);

  return (
    <main className={styles.page}>
      <PageHeader overlay />
      <ContactHero />
      <div className={cx("shell", styles.details)}>
        <InquiryChecklist />
        <NextSteps />
      </div>
    </main>
  );
};

export default ContactPage;
