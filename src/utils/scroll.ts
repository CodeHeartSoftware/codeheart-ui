import { Routes } from "@/constants/routes";
import { prefersReducedMotion } from "./motion";

export const toSectionHref = (sectionId: string): string => `#${sectionId}`;

/** Route to a homepage section from another page; the router's ScrollRestoration scrolls to the hash. */
export const toHomeSectionRoute = (sectionId: string): string => `${Routes.HOME}${toSectionHref(sectionId)}`;

export const isSectionHref = (href: string): boolean => href.startsWith("#") && href.length > 1;

/**
 * Smooth-scrolls to an in-page section (instantly for reduced-motion users). Smooth scrolling is done
 * here rather than with a global `scroll-behavior: smooth`, which would also make the router's
 * scroll-to-top glide during page transitions.
 */
export const scrollToSection = (sectionId: string): void => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
};

/** Scrolls an element's top back into view when it sits above the viewport (e.g. after content above it collapses). */
export const scrollIntoViewIfAbove = (element: HTMLElement): void => {
  if (element.getBoundingClientRect().top >= 0) return;

  element.scrollIntoView({ block: "start", behavior: prefersReducedMotion() ? "auto" : "smooth" });
};
