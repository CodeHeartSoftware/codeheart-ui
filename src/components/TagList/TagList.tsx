import Tag, { type TagTone } from "./Tag";
import { cx } from "@/utils/classNames";
import styles from "./TagList.module.css";

type TagListProps = {
  tags: string[];
  tone: TagTone;
  className?: string;
  ariaLabel?: string;
};

const toneClassNames: Record<TagTone, string> = {
  ink: styles.ink,
  paper: styles.paper,
};

const TagList = ({ tags, tone, className, ariaLabel }: TagListProps) => (
  <div className={cx(styles.tagList, toneClassNames[tone], className)} aria-label={ariaLabel}>
    {tags.map((tag) => (
      <Tag key={tag} label={tag} tone={tone} />
    ))}
  </div>
);

export default TagList;
