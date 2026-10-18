import AppLink from "@/components/AppLink/AppLink";
import type { FooterLink } from "@/types/content";
import styles from "./FooterLinkItem.module.css";

type FooterLinkItemProps = {
  link: FooterLink;
};

const FooterLinkItem = ({ link }: FooterLinkItemProps) => (
  <li>
    <AppLink {...link.destination} className={styles.link}>
      {link.label}
    </AppLink>
  </li>
);

export default FooterLinkItem;
