import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/utils/classNames";
import type { RevealDirection } from "@/utils/reveal";
import { useReveal } from "./useReveal";
import styles from "./Reveal.module.css";

type RevealTag = "div" | "section";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** The side the content slides in from. */
  from: RevealDirection;
  as?: RevealTag;
  /** Starts a beat later, so a block can follow its section heading in. */
  delayed?: boolean;
};

const directionClassNames: Record<RevealDirection, string> = {
  left: styles.fromLeft,
  right: styles.fromRight,
};

/** Slides and fades its content in the first time it scrolls into view. */
const Reveal = ({ children, from, as: Tag = "div", delayed = false, className, ...elementProps }: RevealProps) => {
  const { revealRef, isVisible } = useReveal();

  return (
    <Tag
      ref={revealRef}
      className={cx(styles.reveal, directionClassNames[from], delayed && styles.delayed, isVisible && styles.visible, className)}
      {...elementProps}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
