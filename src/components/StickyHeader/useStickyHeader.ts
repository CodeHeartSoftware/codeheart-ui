import { useEffect, useState } from "react";
import { hasScrolledPast } from "@/utils/scrollPosition";

/** A few pixels of slack, so a trackpad's rubber-band bounce at the top doesn't flash the backdrop. */
const SCROLL_THRESHOLD_PX = 8;

/** Tracks whether the page has scrolled, so the sticky header can fade its backdrop in. */
export function useStickyHeader() {
  const [isScrolled, setIsScrolled] = useState(() => hasScrolledPast(SCROLL_THRESHOLD_PX));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(hasScrolledPast(SCROLL_THRESHOLD_PX));

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled };
}
