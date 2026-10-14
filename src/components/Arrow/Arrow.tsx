import { cx } from "@/utils/classNames";
import styles from "./Arrow.module.css";

type ArrowProps = {
  diagonal?: boolean;
  className?: string;
};

const Arrow = ({ diagonal = false, className }: ArrowProps) => (
  <svg aria-hidden="true" className={cx(styles.arrow, diagonal && styles.diagonal, className)} viewBox="0 0 24 24">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export default Arrow;
