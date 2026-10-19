import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import Brand from "@/components/Brand/Brand";
import StickyHeader from "@/components/StickyHeader/StickyHeader";
import { Routes } from "@/constants/routes";
import { SharedStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  /** Lets the page's first section show through the header at the top of the page (see StickyHeader). */
  overlay?: boolean;
};

const PageHeader = ({ overlay = false }: PageHeaderProps) => (
  <StickyHeader overlay={overlay}>
    <header className={cx("shell", styles.header)}>
      <Brand to={Routes.HOME} />
      <AppLink className={styles.backLink} to={Routes.HOME}>
        {SharedStrings.BACK_HOME} <Arrow className={styles.backArrow} />
      </AppLink>
    </header>
  </StickyHeader>
);

export default PageHeader;
