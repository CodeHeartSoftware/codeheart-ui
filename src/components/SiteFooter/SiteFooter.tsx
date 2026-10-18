import Brand from "@/components/Brand/Brand";
import { FOOTER_EXTERNAL_LINKS } from "@/constants/content";
import { FooterStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import FooterLinkItem from "./FooterLinkItem";
import styles from "./SiteFooter.module.css";
import { useSiteFooter } from "./useSiteFooter";

/** Shown under every page by RootLayout. */
const SiteFooter = () => {
  const { brandDestination, exploreLinks, year } = useSiteFooter();

  return (
    <footer className={styles.footer}>
      <div className={cx("shell", styles.inner)}>
        <div className={styles.brandBlock}>
          <Brand {...brandDestination} />
          <p className={styles.tagline}>{FooterStrings.TAGLINE}</p>
        </div>
        <nav className={styles.group} aria-label={FooterStrings.NAV_LABEL}>
          <h2 className={styles.heading}>{FooterStrings.EXPLORE_HEADING}</h2>
          <ul className={styles.links}>
            {exploreLinks.map((link) => (
              <FooterLinkItem key={link.label} link={link} />
            ))}
          </ul>
        </nav>
        <div className={styles.group}>
          <h2 className={styles.heading}>{FooterStrings.ELSEWHERE_HEADING}</h2>
          <ul className={styles.links}>
            {FOOTER_EXTERNAL_LINKS.map((link) => (
              <FooterLinkItem key={link.label} link={link} />
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <span>{FooterStrings.copyright(year)}</span>
          <span>{FooterStrings.LOCATION}</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
