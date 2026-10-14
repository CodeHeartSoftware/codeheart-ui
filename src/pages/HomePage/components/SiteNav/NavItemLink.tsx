import AppLink from "@/components/AppLink/AppLink";
import type { NavItem } from "@/types/content";
import { toSectionHref } from "@/utils/scroll";
import styles from "./NavItemLink.module.css";

type NavItemLinkProps = {
  item: NavItem;
  onSelect: () => void;
};

const NavItemLink = ({ item, onSelect }: NavItemLinkProps) => (
  <AppLink className={styles.link} href={toSectionHref(item.sectionId)} onClick={onSelect}>
    {item.label}
  </AppLink>
);

export default NavItemLink;
