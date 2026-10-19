import { LOGO_PATH, LOGO_VIEW_BOX } from "@/constants/logo";
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

/** The CodeHeart "<3" mark. Purely decorative; pair it with visible or aria-labelled brand text. */
const LogoMark = ({ size = DEFAULT_SIZE, tone = "coral", className }: LogoMarkProps) => (
  <svg
    aria-hidden="true"
    className={cx(styles.logoMark, toneClassNames[tone], className)}
    style={{ width: size }}
    viewBox={LOGO_VIEW_BOX}
  >
    <path d={LOGO_PATH} />
  </svg>
);

export default LogoMark;
