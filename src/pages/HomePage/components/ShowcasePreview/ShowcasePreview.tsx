import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import { TestIds } from "@/constants/testIds";
import type { ShowcaseItem } from "@/types/content";
import styles from "./ShowcasePreview.module.css";

type ShowcasePreviewProps = {
  item: ShowcaseItem;
};

/** The "built" result that slides up over the code once typing finishes. */
const ShowcasePreview = ({ item }: ShowcasePreviewProps) => (
  <div className={styles.preview}>
    <span className={styles.kicker}>{item.kicker}</span>
    <h2 className={styles.title}>{item.title}</h2>
    <p className={styles.description}>{item.description}</p>
    <AppLink {...item.destination} className={styles.cta} data-testid={TestIds.SHOWCASE_PREVIEW_CTA}>
      {item.ctaLabel}
      <span className={styles.ctaArrow}>
        <Arrow />
      </span>
    </AppLink>
  </div>
);

export default ShowcasePreview;
