export type SnippetTokenKind = "keyword" | "string" | "function" | "variable" | "punctuation" | "comment" | "plain";

export type SnippetToken = {
  kind: SnippetTokenKind;
  text: string;
};

export type SnippetLine = SnippetToken[];
