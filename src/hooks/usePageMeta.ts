import { useEffect } from "react";
import type { PageMeta } from "@/types/content";
import { applyPageMeta } from "@/utils/pageMeta";

/** Keeps the tab title and meta description in sync with the page being shown. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    applyPageMeta(document, { title, description });
  }, [title, description]);

  return {};
}
