import PageHeader from "@/components/PageHeader/PageHeader";
import ContactHero from "./components/ContactHero/ContactHero";
import InquiryChecklist from "./components/InquiryChecklist/InquiryChecklist";
import NextSteps from "./components/NextSteps/NextSteps";
import { cx } from "@/utils/classNames";
import styles from "./ContactPage.module.css";

const ContactPage = () => (
  <main className={styles.page}>
    <PageHeader />
    <ContactHero />
    <div className={cx("shell", styles.details)}>
      <InquiryChecklist />
      <NextSteps />
    </div>
  </main>
);

export default ContactPage;
