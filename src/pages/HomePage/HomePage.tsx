import ContactSection from "./components/ContactSection/ContactSection";
import HeroSection from "./components/HeroSection/HeroSection";
import IntroSection from "./components/IntroSection/IntroSection";
import WorkSection from "./components/WorkSection/WorkSection";

const HomePage = () => (
  <main>
    <HeroSection />
    <IntroSection />
    <WorkSection />
    <ContactSection />
  </main>
);

export default HomePage;
