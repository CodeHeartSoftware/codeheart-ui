import { cx } from "@/utils/classNames";
import styles from "./Tag.module.css";

export type TagTone = "ink" | "paper";

type TagProps = {
  label: string;
  tone: TagTone;
};

const toneClassNames: Record<TagTone, string> = {
  ink: styles.ink,
  paper: styles.paper,
};

const Tag = ({ label, tone }: TagProps) => <span className={cx(styles.tag, toneClassNames[tone])}>{label}</span>;

export default Tag;
