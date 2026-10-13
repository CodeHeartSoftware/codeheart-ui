import type { ReactNode } from "react";
import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import { cx } from "@/utils/classNames";
import styles from "./UnderlineLink.module.css";

type UnderlineLinkSize = "sm" | "md" | "lg";

type UnderlineLinkProps = {
  children: ReactNode;
  size?: UnderlineLinkSize;
  className?: string;
} & ({ to: string; href?: never } | { href: string; to?: never });

const sizeClassNames: Record<UnderlineLinkSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

/** Underlined text link with a trailing arrow, used for section CTAs. */
const UnderlineLink = ({ children, size = "sm", className, ...destination }: UnderlineLinkProps) => (
  <AppLink {...destination} className={cx(styles.link, sizeClassNames[size], className)}>
    {children} <Arrow />
  </AppLink>
);

export default UnderlineLink;
