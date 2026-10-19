import LogoMark from "@/components/LogoMark/LogoMark";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import styles from "./BadgeLoader.module.css";

type BadgeLoaderProps = {
  /** Sizes and positions the loader; it centers the spinner within whatever box it's given. */
  className?: string;
};

const LOADER_MARK_SIZE = 18;

/** A coral ring spinning around the "<3" mark, shown while the 3D badge's code and physics load. */
const BadgeLoader = ({ className }: BadgeLoaderProps) => (
  <div className={cx(styles.loader, className)} role="status" aria-label={HowWeWorkStrings.hero.BADGE_LOADING}>
    <span className={styles.spinner}>
      <LogoMark size={LOADER_MARK_SIZE} />
    </span>
  </div>
);

export default BadgeLoader;
