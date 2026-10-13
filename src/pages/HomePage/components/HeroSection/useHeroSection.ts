import { useEffect, useRef } from "react";
import { SectionIds } from "@/constants/routes";
import { prefersReducedMotion } from "@/utils/motion";
import { applyStyleVars, getPointerStyleVars } from "@/utils/pointer";
import { scrollToSection } from "@/utils/scroll";

export function useHeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || prefersReducedMotion()) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      applyStyleVars(hero, getPointerStyleVars(event, hero.getBoundingClientRect()));
    };

    hero.addEventListener("pointermove", onPointerMove);
    return () => hero.removeEventListener("pointermove", onPointerMove);
  }, []);

  const scrollToWork = () => scrollToSection(SectionIds.WORK);

  return { heroRef, scrollToWork };
}
