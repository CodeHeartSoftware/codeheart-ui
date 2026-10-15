import { cx } from "@/utils/classNames";
import styles from "./Tag.module.css";

/** `ink` and `paper` sit on fixed light/dark surfaces; `outline` follows the page theme. */
export type TagTone = "ink" | "paper" | "outline";

type TagProps = {
  label: string;
  tone: TagTone;
};

const toneClassNames: Record<TagTone, string> = {
  ink: styles.ink,
  paper: styles.paper,
  outline: styles.outline,
};

const Tag = ({ label, tone }: TagProps) => <span className={cx(styles.tag, toneClassNames[tone])}>{label}</span>;

export default Tag;
