import { afterEach, describe, expect, it } from "vitest";
import { applyPageMeta } from "./pageMeta";

const meta = { title: "Kite | CodeHeart", description: "Money, calmer." };

const getDescription = () => document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;

describe("applyPageMeta", () => {
  afterEach(() => {
    document.head.innerHTML = "";
    document.title = "";
  });

  it("sets the document title", () => {
    applyPageMeta(document, meta);

    expect(document.title).toBe("Kite | CodeHeart");
  });

  it("updates an existing description tag", () => {
    document.head.innerHTML = '<meta name="description" content="Old" />';

    applyPageMeta(document, meta);

    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(getDescription()).toBe("Money, calmer.");
  });

  it("creates the description tag when it's missing", () => {
    applyPageMeta(document, meta);

    expect(getDescription()).toBe("Money, calmer.");
  });
});
