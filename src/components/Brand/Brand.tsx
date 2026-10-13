import AppLink from "@/components/AppLink/AppLink";
import LogoMark from "@/components/LogoMark/LogoMark";
import { SharedStrings } from "@/constants/strings";
import styles from "./Brand.module.css";

type BrandProps = { to: string; href?: never } | { href: string; to?: never };

const Brand = (destination: BrandProps) => (
  <AppLink {...destination} className={styles.brand} aria-label={SharedStrings.BRAND_HOME_LABEL}>
    <LogoMark />
    <span>{SharedStrings.BRAND_NAME}</span>
  </AppLink>
);

export default Brand;
