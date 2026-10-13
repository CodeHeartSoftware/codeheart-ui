import type { SnippetToken, SnippetTokenKind } from "@/types/snippet";
import styles from "./CodeToken.module.css";

type CodeTokenProps = {
  token: SnippetToken;
};

const kindClassNames: Record<SnippetTokenKind, string> = {
  keyword: styles.keyword,
  string: styles.string,
  function: styles.function,
  variable: styles.variable,
  punctuation: styles.punctuation,
  comment: styles.comment,
  plain: styles.plain,
};

const CodeToken = ({ token }: CodeTokenProps) => <span className={kindClassNames[token.kind]}>{token.text}</span>;

export default CodeToken;
