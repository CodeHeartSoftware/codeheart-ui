import type { ReactNode } from "react";
import { cx } from "@/utils/classNames";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

/** Owns typography only; callers set margin and max-width through `className`. */
const SectionTitle = ({ children, className }: SectionTitleProps) => (
  <h2 className={cx(styles.title, className)}>{children}</h2>
);

export default SectionTitle;
