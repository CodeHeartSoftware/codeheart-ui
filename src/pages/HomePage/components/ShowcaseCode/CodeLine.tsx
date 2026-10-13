import type { CSSProperties } from "react";
import type { SnippetLine } from "@/types/snippet";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import CodeToken from "./CodeToken";
import styles from "./CodeLine.module.css";

type CodeLineProps = {
  line: SnippetLine;
  index: number;
};

/** `--line-index` staggers the typing reveal so lines appear one after another. */
const CodeLine = ({ line, index }: CodeLineProps) => (
  <span className={styles.line} style={{ "--line-index": index } as CSSProperties}>
    <span className={styles.gutter}>{formatIndexNumber(index)}</span>
    <span className={styles.content}>
      {line.map((token, tokenIndex) => (
        <CodeToken key={tokenIndex} token={token} />
      ))}
    </span>
  </span>
);

export default CodeLine;
