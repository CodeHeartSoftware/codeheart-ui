import type { ReactNode } from "react";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** A page-level kicker with a pulsing coral dot, used at the top of hero sections. */
const Eyebrow = ({ children, className }: EyebrowProps) => (
  <SectionKicker tone="muted" className={className}>
    <span className={styles.dot} />
    {children}
  </SectionKicker>
);

export default Eyebrow;
