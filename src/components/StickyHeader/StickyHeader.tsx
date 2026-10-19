import type { ReactNode } from "react";
import { cx } from "@/utils/classNames";
import { useStickyHeader } from "./useStickyHeader";
import styles from "./StickyHeader.module.css";

type StickyHeaderProps = {
  children: ReactNode;
  /**
   * Lets the page's first section run up behind the header instead of starting below it. That section
   * must then pad its own top by the header's height, so its content clears the bar.
   */
  overlay?: boolean;
};

/**
 * Pins its children to the top of the viewport: transparent at the top of the page, then fading to the
 * deep theme color once the page scrolls. Children style themselves with the custom properties it sets
 * (see StickyHeader.module.css), so they follow the fade without knowing the scroll state.
 */
const StickyHeader = ({ children, overlay = false }: StickyHeaderProps) => {
  const { isScrolled } = useStickyHeader();

  return (
    <div className={cx(styles.slot, overlay && styles.overlay)}>
      <div className={cx(styles.backdrop, isScrolled && styles.scrolled)}>{children}</div>
    </div>
  );
};

export default StickyHeader;
