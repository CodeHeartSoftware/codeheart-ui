import type { PageMeta } from "@/types/content";

/** Sets the document title and meta description, creating the description tag if the shell lacks one. */
export const applyPageMeta = (doc: Document, { title, description }: PageMeta): void => {
  doc.title = title;

  let descriptionTag = doc.head.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = doc.createElement("meta");
    descriptionTag.name = "description";
    doc.head.append(descriptionTag);
  }
  descriptionTag.content = description;
};
