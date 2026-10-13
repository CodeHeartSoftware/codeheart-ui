import { useState } from "react";
import type { ShowcaseItem } from "@/types/content";
import { prefersReducedMotion } from "@/utils/motion";
import { buildProjectSnippet } from "@/utils/projectSnippet";
import { wrapIndex } from "@/utils/wrapIndex";

interface UseHeroShowcaseParams {
  items: ShowcaseItem[];
}

export function useHeroShowcase({ items }: UseHeroShowcaseParams) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const [isMotionReduced] = useState(prefersReducedMotion);

  const activeItem = items[activeIndex];
  const snippet = buildProjectSnippet(activeItem);
  const isAutoPlaying = !isMotionReduced && !hasUserSelected;

  const selectItem = (index: number) => {
    setHasUserSelected(true);
    setActiveIndex(index);
  };

  const advance = () => {
    if (isAutoPlaying) {
      setActiveIndex((prev) => wrapIndex(prev + 1, items.length));
    }
  };

  const pause = () => setIsPaused(true);

  const resume = () => setIsPaused(false);

  return {
    activeItem,
    activeIndex,
    snippet,
    isPaused,
    isAutoPlaying,
    selectItem,
    advance,
    pause,
    resume,
  };
}
