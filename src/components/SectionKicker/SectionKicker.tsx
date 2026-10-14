import type { ReactNode } from "react";
import { cx } from "@/utils/classNames";
import styles from "./SectionKicker.module.css";

type SectionKickerTone = "subtle" | "muted" | "inverse";

type SectionKickerProps = {
  children: ReactNode;
  tone?: SectionKickerTone;
  className?: string;
};

const toneClassNames: Record<SectionKickerTone, string> = {
  subtle: styles.subtle,
  muted: styles.muted,
  inverse: styles.inverse,
};

const SectionKicker = ({ children, tone = "subtle", className }: SectionKickerProps) => (
  <span className={cx(styles.kicker, toneClassNames[tone], className)}>{children}</span>
);

export default SectionKicker;
