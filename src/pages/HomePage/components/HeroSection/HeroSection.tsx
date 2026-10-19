import HeroBackdrop from "../HeroBackdrop/HeroBackdrop";
import HeroFooter from "../HeroFooter/HeroFooter";
import HeroIntro from "../HeroIntro/HeroIntro";
import HeroShowcase from "../HeroShowcase/HeroShowcase";
import {useHeroSection} from "./useHeroSection";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const { heroRef, scrollToWork, scrollToNextSection } = useHeroSection();

  return (
    <section className={styles.hero} ref={heroRef}>
      <HeroBackdrop />
      <div className={styles.pointerGlow} />
      <HeroIntro onExplore={scrollToWork} />
        <HeroShowcase/>
      <HeroFooter onScroll={scrollToNextSection} />
    </section>
  );
};

export default HeroSection;
