import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import Brand from "@/components/Brand/Brand";
import { Routes } from "@/constants/routes";
import { SharedStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import styles from "./PageHeader.module.css";

const PageHeader = () => (
  <header className={cx("shell", styles.header)}>
    <Brand to={Routes.HOME} />
    <AppLink className={styles.backLink} to={Routes.HOME}>
      {SharedStrings.BACK_HOME} <Arrow className={styles.backArrow} />
    </AppLink>
  </header>
);

export default PageHeader;
