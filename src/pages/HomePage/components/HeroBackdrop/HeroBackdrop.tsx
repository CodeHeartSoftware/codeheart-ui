import { HERO_SHAPES } from "@/constants/heroShapes";
import HeroShape from "./HeroShape";
import styles from "./HeroBackdrop.module.css";

/**
 * Decorative layer of drifting abstract shapes behind the hero. Shapes also shift against the
 * pointer via `--pointer-ratio-*`, which `useHeroSection` sets on the hero.
 */
const HeroBackdrop = () => (
  <div className={styles.backdrop} aria-hidden="true">
    {HERO_SHAPES.map((shape) => (
      <HeroShape key={shape.id} shape={shape} />
    ))}
  </div>
);

export default HeroBackdrop;
