import { useEffect, useRef, useState } from "react";
import type { Service } from "@/types/content";
import { scrollIntoViewIfAbove } from "@/utils/scroll";
import { getDefaultServiceId } from "@/utils/serviceStack";

/** How long the pointer rests on a card before it opens, so sweeping across the stack doesn't flicker. */
const HOVER_INTENT_MS = 90;

interface UseServicesSectionParams {
  services: Service[];
}

/**
 * The open card is the hovered one (mouse only), else the last one clicked, tapped, or chosen with the
 * keyboard, else the flagship. Leaving the stack drops the hover.
 */
export function useServicesSection({ services }: UseServicesSectionParams) {
  const [selectedId, setSelectedId] = useState(() => getDefaultServiceId(services));
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(hoverTimeoutRef.current), []);

  const activeId = hoveredId ?? selectedId;

  const hoverService = (serviceId: string, pointerType: string) => {
    if (pointerType !== "mouse") return;

    window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => setHoveredId(serviceId), HOVER_INTENT_MS);
  };

  const leaveStack = () => {
    window.clearTimeout(hoverTimeoutRef.current);
    setHoveredId(null);
  };

  // On mobile, opening a card collapses the one above it, which can pull the new card's top off screen.
  const selectService = (serviceId: string, card: HTMLElement | null) => {
    window.clearTimeout(hoverTimeoutRef.current);
    setSelectedId(serviceId);
    setHoveredId(null);
    if (card) requestAnimationFrame(() => scrollIntoViewIfAbove(card));
  };

  return { activeId, hoverService, leaveStack, selectService };
}
