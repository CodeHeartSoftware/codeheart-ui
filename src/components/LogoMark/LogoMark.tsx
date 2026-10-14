import { cx } from "@/utils/classNames";
import styles from "./LogoMark.module.css";

type LogoMarkTone = "coral" | "paper";

type LogoMarkProps = {
  /** Width in px; height follows the mark's aspect ratio. */
  size?: number;
  tone?: LogoMarkTone;
  className?: string;
};

const toneClassNames: Record<LogoMarkTone, string> = {
  coral: styles.coral,
  paper: styles.paper,
};

const DEFAULT_SIZE = 30;

/**
 * "<3" outlined from Catamaran ExtraBold (800), SIL Open Font License. Shipped as paths rather than
 * live text so the logo renders identically everywhere without waiting on a web font.
 * Keep public/favicon.svg in sync.
 */
const LOGO_PATH =
  "M345 -142 194 -249 345 -355 317 -488 30 -284V-214L317 -8ZM609 -579Q549 -579 492.5 -561.5Q436 -544 385 -507L459 -402Q490 -423 526.0 -437.5Q562 -452 598 -452Q626 -452 644.5 -444.5Q663 -437 672.5 -424.0Q682 -411 682 -394Q682 -363 652.0 -344.0Q622 -325 570 -325H496L512 -203H585Q639 -203 666.5 -181.5Q694 -160 694 -123Q694 -100 680.5 -83.5Q667 -67 645.5 -58.0Q624 -49 597 -49Q558 -49 523.0 -60.5Q488 -72 447 -97L365 7Q416 38 478.5 57.5Q541 77 596 77Q672 77 729.0 51.0Q786 25 817.0 -20.0Q848 -65 848 -121Q848 -157 834.5 -187.5Q821 -218 800.5 -241.0Q780 -264 759 -273Q778 -282 796.0 -302.5Q814 -323 825.5 -350.0Q837 -377 837 -404Q837 -453 809.5 -493.0Q782 -533 731.5 -556.0Q681 -579 609 -579Z";

/** The CodeHeart "<3" mark. Purely decorative; pair it with visible or aria-labelled brand text. */
const LogoMark = ({ size = DEFAULT_SIZE, tone = "coral", className }: LogoMarkProps) => (
  <svg
    aria-hidden="true"
    className={cx(styles.logoMark, toneClassNames[tone], className)}
    style={{ width: size }}
    viewBox="10 -599 858 696"
  >
    <path d={LOGO_PATH} />
  </svg>
);

export default LogoMark;
