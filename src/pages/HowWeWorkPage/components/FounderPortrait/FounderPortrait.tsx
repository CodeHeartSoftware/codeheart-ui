import founderPortrait from "@/assets/images/founder-portrait.jpg";
import LogoMark from "@/components/LogoMark/LogoMark";
import {HowWeWorkStrings} from "@/constants/strings";
import styles from "./FounderPortrait.module.css";

type FounderPortraitProps = {
  className?: string;
};

const CAPTION_MARK_SIZE = 22;
const PORTRAIT_WIDTH = 800;
const PORTRAIT_HEIGHT = 1000;

/** The founder's photo with a brand caption chip; `className` positions it within the hero. */
const FounderPortrait = ({ className }: FounderPortraitProps) => (
  <figure className={className}>
    <div className={styles.frame}>
      <img
        className={styles.photo}
        src={founderPortrait}
        alt={HowWeWorkStrings.hero.PORTRAIT_ALT}
        width={PORTRAIT_WIDTH}
        height={PORTRAIT_HEIGHT}
      />
      <figcaption className={styles.caption}>
        <LogoMark size={CAPTION_MARK_SIZE} />
        <span>
          <b>{HowWeWorkStrings.hero.FOUNDER_NAME}</b>
          <small>
            {HowWeWorkStrings.hero.PORTRAIT_ROLE} · {HowWeWorkStrings.hero.ESTABLISHED}
          </small>
        </span>
      </figcaption>
    </div>
  </figure>
);

export default FounderPortrait;
