import { useEffect, useState } from "react";
import { observeOnce } from "@/utils/reveal";

export function useReveal() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) {
      return;
    }
    return observeOnce(element, () => setIsVisible(true));
  }, [element]);

  return { revealRef: setElement, isVisible };
}
