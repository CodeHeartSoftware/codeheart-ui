import { HomeStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import styles from "./HeroFooter.module.css";

type HeroFooterProps = {
  onScroll: () => void;
};

const HeroFooter = ({ onScroll }: HeroFooterProps) => (
  <div className={cx("shell", styles.footer)}>
    <span>{HomeStrings.heroFooter.STUDIO}</span>
    <span>{HomeStrings.heroFooter.LOCATION}</span>
    <button className={styles.scrollButton} type="button" onClick={onScroll}>
      {HomeStrings.heroFooter.SCROLL} <i />
    </button>
  </div>
);

export default HeroFooter;
