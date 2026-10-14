import { buildShowcaseProgressTestId, buildShowcaseTabTestId } from "@/constants/testIds";
import type { ShowcaseItem } from "@/types/content";
import { cx } from "@/utils/classNames";
import styles from "./ShowcaseTab.module.css";

type ShowcaseTabProps = {
  item: ShowcaseItem;
  index: number;
  isActive: boolean;
  showProgress: boolean;
  isProgressPaused: boolean;
  onSelect: (index: number) => void;
  onProgressEnd: () => void;
};

/**
 * A showcase tab. While auto-playing, its progress bar's `animationend` advances to the next project;
 * pausing (hover/focus on the showcase) freezes only this bar so the build sequence keeps playing.
 */
const ShowcaseTab = ({
  item,
  index,
  isActive,
  showProgress,
  isProgressPaused,
  onSelect,
  onProgressEnd,
}: ShowcaseTabProps) => (
  <button
    className={cx(styles.tab, isActive && styles.active)}
    type="button"
    role="tab"
    aria-selected={isActive}
    onClick={() => onSelect(index)}
    data-testid={buildShowcaseTabTestId(item.id)}
  >
    {item.title}
    {showProgress && (
      <span
        className={cx(styles.progress, isProgressPaused && styles.progressPaused)}
        onAnimationEnd={onProgressEnd}
        data-testid={buildShowcaseProgressTestId(item.id)}
      />
    )}
  </button>
);

export default ShowcaseTab;
