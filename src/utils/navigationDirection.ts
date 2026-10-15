import { Routes } from "@/constants/routes";

export type NavigationDirection = "forward" | "back";

/**
 * Home is the root of the site, so heading there (including to one of its sections, `/#services`)
 * reads as going back; every other page goes forward.
 */
export const getNavigationDirection = (to: string): NavigationDirection =>
  to === Routes.HOME || to.startsWith(`${Routes.HOME}#`) ? "back" : "forward";

/** Recorded on <html> for the page-transition CSS in index.css to pick which way to slide. */
export const setNavigationDirection = (direction: NavigationDirection): void => {
  document.documentElement.dataset.navDirection = direction;
};
