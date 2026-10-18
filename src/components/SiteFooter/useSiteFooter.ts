import { useLocation } from "react-router";
import { FOOTER_PAGE_LINKS, NAV_ITEMS } from "@/constants/content";
import { SectionIds } from "@/constants/routes";
import type { FooterLink } from "@/types/content";
import { toHomeSectionDestination } from "@/utils/scroll";

export function useSiteFooter() {
  const { pathname } = useLocation();

  const brandDestination = toHomeSectionDestination(SectionIds.TOP, pathname);

  const exploreLinks: FooterLink[] = [
    ...NAV_ITEMS.map((item) => ({
      label: item.label,
      destination: toHomeSectionDestination(item.sectionId, pathname),
    })),
    ...FOOTER_PAGE_LINKS,
  ];

  const year = new Date().getFullYear();

  return { brandDestination, exploreLinks, year };
}
