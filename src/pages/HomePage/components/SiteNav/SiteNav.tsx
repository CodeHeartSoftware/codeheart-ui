import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import Brand from "@/components/Brand/Brand";
import { NAV_ITEMS } from "@/constants/content";
import { Routes, SectionIds } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import { TestIds } from "@/constants/testIds";
import { cx } from "@/utils/classNames";
import { toSectionHref } from "@/utils/scroll";
import NavItemLink from "./NavItemLink";
import { useSiteNav } from "./useSiteNav";
import styles from "./SiteNav.module.css";

const SiteNav = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useSiteNav();

  return (
    <nav className={cx("shell", styles.nav)} aria-label={HomeStrings.nav.ARIA_LABEL}>
      <Brand href={toSectionHref(SectionIds.TOP)} />

      <div className={cx(styles.links, isMenuOpen && styles.linksOpen)} data-testid={TestIds.SITE_NAV_LINKS}>
        {NAV_ITEMS.map((item) => (
          <NavItemLink key={item.sectionId} item={item} onSelect={closeMenu} />
        ))}
      </div>

      <AppLink className={styles.cta} to={Routes.CONTACT} data-testid={TestIds.SITE_NAV_CTA}>
        {HomeStrings.nav.CTA} <Arrow diagonal />
      </AppLink>
      <button
        className={styles.menuButton}
        type="button"
        aria-label={HomeStrings.nav.MENU_TOGGLE_LABEL}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        data-testid={TestIds.SITE_NAV_MENU_BUTTON}
      >
        <span />
        <span />
      </button>
    </nav>
  );
};

export default SiteNav;
