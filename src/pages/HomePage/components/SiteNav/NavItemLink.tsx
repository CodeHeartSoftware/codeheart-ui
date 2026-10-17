import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import type { NavItem } from "@/types/content";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import { toSectionHref } from "@/utils/scroll";
import styles from "./NavItemLink.module.css";

type NavItemLinkProps = {
  item: NavItem;
  index: number;
  onSelect: () => void;
};

/** A nav link. The index and arrow only show in the mobile menu; the index is decorative, so it stays out of the link's name. */
const NavItemLink = ({ item, index, onSelect }: NavItemLinkProps) => (
  <AppLink className={styles.link} href={toSectionHref(item.sectionId)} onClick={onSelect}>
    <span className={styles.index} aria-hidden="true">
      {formatIndexNumber(index)}
    </span>
    {item.label}
    <Arrow className={styles.arrow} />
  </AppLink>
);

export default NavItemLink;
