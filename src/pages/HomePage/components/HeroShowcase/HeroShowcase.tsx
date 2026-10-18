import { Fragment } from "react";
import LogoMark from "@/components/LogoMark/LogoMark";
import { SHOWCASE_ITEMS } from "@/constants/content";
import { HomeStrings } from "@/constants/strings";
import ShowcaseCode from "../ShowcaseCode/ShowcaseCode";
import ShowcasePreview from "../ShowcasePreview/ShowcasePreview";
import ShowcaseStatus from "../ShowcaseStatus/ShowcaseStatus";
import ShowcaseTab from "../ShowcaseTab/ShowcaseTab";
import { useHeroShowcase } from "./useHeroShowcase";
import styles from "./HeroShowcase.module.css";

/** The "<3" on the palm-rest sticker; CSS caps it to the sticker's width on small laptops. */
const STICKER_MARK_SIZE = 26;

/**
 * Hero visual: a laptop whose screen shows an editor window that "types" each project's code, then
 * reveals a preview with a CTA (a project's card, or the contact page). The stage and status share one
 * keyed Fragment so every project switch remounts them and replays the build sequence.
 */
const HeroShowcase = () => {
  const {
    activeItem,
    activeIndex,
    snippet,
    isPaused,
    isAutoPlaying,
    selectItem,
    advance,
    pause,
    resume,
  } = useHeroShowcase({ items: SHOWCASE_ITEMS });

  return (
    <section
      className={styles.showcase}
      aria-label={HomeStrings.showcase.REGION_LABEL}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div className={styles.laptop}>
        <div className={styles.lid}>
          <div className={styles.window}>
            <div className={styles.toolbar}>
              <span className={styles.dots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <div className={styles.tabs} role="tablist" aria-label={HomeStrings.showcase.TABLIST_LABEL}>
                {SHOWCASE_ITEMS.map((item, index) => (
                  <ShowcaseTab
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={index === activeIndex}
                    showProgress={isAutoPlaying && index === activeIndex}
                    isProgressPaused={isPaused}
                    onSelect={selectItem}
                    onProgressEnd={advance}
                  />
                ))}
              </div>
            </div>
            <Fragment key={activeItem.id}>
              <div className={styles.stage} role="tabpanel">
                <ShowcaseCode lines={snippet} />
                <ShowcasePreview item={activeItem} />
              </div>
              <ShowcaseStatus title={activeItem.title} />
            </Fragment>
          </div>
        </div>
        <div className={styles.base} aria-hidden="true">
          <div className={styles.keyboard}>
            <span className={styles.enterKey} />
            <span className={styles.spacebar} />
          </div>
          <div className={styles.trackpad} />
          <div className={styles.sticker}>
            <LogoMark size={STICKER_MARK_SIZE} className={styles.stickerMark} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;
