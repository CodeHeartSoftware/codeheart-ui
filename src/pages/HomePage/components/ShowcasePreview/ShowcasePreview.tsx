import AppLink from "@/components/AppLink/AppLink";
import Arrow from "@/components/Arrow/Arrow";
import { TestIds } from "@/constants/testIds";
import type { ProjectTone, ShowcaseItem } from "@/types/content";
import { cx } from "@/utils/classNames";
import styles from "./ShowcasePreview.module.css";

type ShowcasePreviewProps = {
  item: ShowcaseItem;
};

const toneClassNames: Record<ProjectTone, string> = {
  blush: styles.blush,
  rose: styles.rose,
  berry: styles.berry,
};

/** The "built" result that slides up over the code once typing finishes. */
const ShowcasePreview = ({ item }: ShowcasePreviewProps) => (
  <div className={cx(styles.preview, toneClassNames[item.tone])}>
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
