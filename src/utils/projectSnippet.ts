import { HomeStrings } from "@/constants/strings";
import type { Project } from "@/types/content";
import type { SnippetLine, SnippetToken, SnippetTokenKind } from "@/types/snippet";

const MAX_SNIPPET_TAGS = 3;

const token =
  (kind: SnippetTokenKind) =>
  (text: string): SnippetToken => ({ kind, text });

const keyword = token("keyword");
const string = token("string");
const fn = token("function");
const variable = token("variable");
const punctuation = token("punctuation");
const comment = token("comment");
const plain = token("plain");

const quote = (text: string): string => `"${text}"`;

/** Builds the faux source code the hero showcase "types" for a project, derived from its data. */
type SnippetSource = Pick<Project, "title"> & { tags: readonly string[] };

export const buildProjectSnippet = (project: SnippetSource): SnippetLine[] => {
  const { CODE_MODULE, CODE_CARE, CODE_COMMENT } = HomeStrings.showcase;
  const stack = project.tags.slice(0, MAX_SNIPPET_TAGS).map(quote).join(", ");

  return [
    [keyword("import"), plain(" { "), fn("craft"), plain(" } "), keyword("from"), plain(" "), string(quote(CODE_MODULE)), punctuation(";")],
    [],
    [keyword("const"), plain(" "), variable("project"), punctuation(" = "), fn("craft"), punctuation("({")],
    [plain("  name: "), string(quote(project.title)), punctuation(",")],
    [plain("  stack: "), punctuation("["), string(stack), punctuation("],")],
    [plain("  care: "), string(quote(CODE_CARE)), punctuation(",")],
    [punctuation("});")],
    [],
    [variable("project"), punctuation("."), fn("ship"), punctuation("();"), plain(" "), comment(CODE_COMMENT)],
  ];
};
