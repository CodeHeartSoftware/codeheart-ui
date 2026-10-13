import type { SnippetLine } from "@/types/snippet";
import CodeLine from "./CodeLine";
import styles from "./ShowcaseCode.module.css";

type ShowcaseCodeProps = {
  lines: SnippetLine[];
};

const ShowcaseCode = ({ lines }: ShowcaseCodeProps) => (
  <pre className={styles.code} aria-hidden="true">
    {lines.map((line, index) => (
      // Lines are positional and never reorder, so the index is a stable key here.
      <CodeLine key={index} line={line} index={index} />
    ))}
  </pre>
);

export default ShowcaseCode;
