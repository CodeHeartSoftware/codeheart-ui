import { TERMINAL_LEADERBOARD } from "@/constants/content";
import { HomeStrings } from "@/constants/strings";
import LeaderboardRow from "./LeaderboardRow";
import styles from "./TerminalArt.module.css";

/** CLI mockup for Thunderdome: a tournament run with a live match and standings. */
const TerminalArt = () => (
  <div className={styles.terminal}>
    <div className={styles.titleBar}>
      <span className={styles.dots}>
        <i />
        <i />
        <i />
      </span>
      <span className={styles.windowTitle}>{HomeStrings.terminalArt.WINDOW_TITLE}</span>
    </div>
    <div className={styles.body}>
      <p className={styles.commandLine}>
        <span className={styles.prompt}>{HomeStrings.terminalArt.PROMPT}</span>
        {HomeStrings.terminalArt.COMMAND}
      </p>
      <p className={styles.success}>{HomeStrings.terminalArt.LOADING}</p>
      <p className={styles.match}>
        <span className={styles.matchLabel}>{HomeStrings.terminalArt.MATCH_LABEL}</span>
        <b>{HomeStrings.terminalArt.MATCH_BOT_A}</b>
        <span className={styles.versus}>{HomeStrings.terminalArt.MATCH_VERSUS}</span>
        <b>{HomeStrings.terminalArt.MATCH_BOT_B}</b>
      </p>
      <div className={styles.progress}>
        <span />
      </div>
      <p className={styles.heading}>{HomeStrings.terminalArt.LEADERBOARD_HEADING}</p>
      <ol className={styles.leaderboard}>
        {TERMINAL_LEADERBOARD.map((entry, index) => (
          <LeaderboardRow key={entry.bot} entry={entry} index={index} />
        ))}
      </ol>
      <p className={styles.commandLine}>
        <span className={styles.prompt}>{HomeStrings.terminalArt.PROMPT}</span>
        <span className={styles.cursor} />
      </p>
    </div>
  </div>
);

export default TerminalArt;
