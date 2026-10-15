import AboutContactSection from "./components/AboutContactSection/AboutContactSection";
import AboutHero from "./components/AboutHero/AboutHero";
import CapabilitySection from "./components/CapabilitySection/CapabilitySection";
import PageHeader from "@/components/PageHeader/PageHeader";
import { PageMetaStrings } from "@/constants/strings";
import { usePageMeta } from "@/hooks/usePageMeta";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import WhoWeAreSection from "./components/WhoWeAreSection/WhoWeAreSection";
import WhySection from "./components/WhySection/WhySection";
import styles from "./HowWeWorkPage.module.css";

const HowWeWorkPage = () => {
  usePageMeta(PageMetaStrings.HOW_WE_WORK);

  return (
    <main className={styles.page}>
      <PageHeader />
      <AboutHero />
      <WhoWeAreSection />
      <CapabilitySection />
      <ProcessSection />
      <WhySection />
      <AboutContactSection />
    </main>
  );
};

export default HowWeWorkPage;
