import { useEffect, useRef, useState } from "react";
import type { Service } from "@/types/content";
import { scrollIntoViewIfAbove } from "@/utils/scroll";
import { getDefaultServiceId } from "@/utils/serviceStack";

/** How long the pointer rests on a card before it opens, so sweeping across the stack doesn't flicker. */
const HOVER_INTENT_MS = 90;

/** Matches the cards' open/close transition, so the scroll check sees the settled layout. */
const CARD_TRANSITION_MS = 500;

interface UseServicesSectionParams {
  services: Service[];
}

/**
 * The open card is the last one hovered (mouse only), clicked, tapped, or chosen with the keyboard,
 * starting from the featured (default) card. It stays open after the pointer leaves the stack.
 */
export function useServicesSection({ services }: UseServicesSectionParams) {
  const [activeId, setActiveId] = useState(() => getDefaultServiceId(services));
  const hoverTimeoutRef = useRef<number | undefined>(undefined);
  const scrollTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearTimeout(hoverTimeoutRef.current);
      window.clearTimeout(scrollTimeoutRef.current);
    },
    [],
  );

  const hoverService = (serviceId: string, pointerType: string) => {
    if (pointerType !== "mouse") return;

    window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => setActiveId(serviceId), HOVER_INTENT_MS);
  };

  // Drops a hover that hasn't opened its card yet, so sweeping out of the stack doesn't switch cards.
  const leaveStack = () => window.clearTimeout(hoverTimeoutRef.current);

  // On mobile, opening a card collapses the one above it, which can pull the new card's top off screen.
  const selectService = (serviceId: string, card: HTMLElement | null) => {
    window.clearTimeout(hoverTimeoutRef.current);
    setActiveId(serviceId);
    window.clearTimeout(scrollTimeoutRef.current);
    if (card) scrollTimeoutRef.current = window.setTimeout(() => scrollIntoViewIfAbove(card), CARD_TRANSITION_MS);
  };

  return { activeId, hoverService, leaveStack, selectService };
}
