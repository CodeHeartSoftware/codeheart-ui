import HeroBackdrop from "../HeroBackdrop/HeroBackdrop";
import HeroFooter from "../HeroFooter/HeroFooter";
import HeroIntro from "../HeroIntro/HeroIntro";
import HeroShowcase from "../HeroShowcase/HeroShowcase";
import SiteNav from "../SiteNav/SiteNav";
import {useHeroSection} from "./useHeroSection";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const { heroRef, scrollToWork } = useHeroSection();

  return (
    <section className={styles.hero} ref={heroRef}>
      <HeroBackdrop />
      <div className={styles.pointerGlow} />
      <SiteNav />
      <HeroIntro onExplore={scrollToWork} />
        <HeroShowcase/>
      <HeroFooter onScroll={scrollToWork} />
    </section>
  );
};

export default HeroSection;
