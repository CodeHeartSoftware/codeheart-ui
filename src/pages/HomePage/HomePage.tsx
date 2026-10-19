import { usePageMeta } from "@/hooks/usePageMeta";
import { PageMetaStrings } from "@/constants/strings";
import ContactSection from "./components/ContactSection/ContactSection";
import HeroSection from "./components/HeroSection/HeroSection";
import IntroSection from "./components/IntroSection/IntroSection";
import SiteNav from "./components/SiteNav/SiteNav";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import WorkSection from "./components/WorkSection/WorkSection";

const HomePage = () => {
  usePageMeta(PageMetaStrings.HOME);

  return (
    <main>
      <SiteNav />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
