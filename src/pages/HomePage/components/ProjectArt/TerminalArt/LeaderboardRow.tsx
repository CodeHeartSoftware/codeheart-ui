import type { LeaderboardEntry } from "@/types/content";
import { cx } from "@/utils/classNames";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./LeaderboardRow.module.css";

type LeaderboardRowProps = {
  entry: LeaderboardEntry;
  index: number;
};

const LeaderboardRow = ({ entry, index }: LeaderboardRowProps) => (
  <li className={cx(styles.row, index === 0 && styles.leader)}>
    <span className={styles.rank}>{formatIndexNumber(index)}</span>
    <span className={styles.bot}>{entry.bot}</span>
    <span className={styles.record}>{entry.record}</span>
  </li>
);

export default LeaderboardRow;
