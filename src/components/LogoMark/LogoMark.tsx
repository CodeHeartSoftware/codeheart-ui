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

const DEFAULT_SIZE = 34;

/**
 * "<3" outlined from JetBrains Mono ExtraBold (800). Shipped as paths rather than live text so the
 * logo renders identically everywhere without waiting on a web font. Keep public/favicon.svg in sync.
 */
const LOGO_PATH =
  "M530 -49 70 -257V-400L530 -609V-473L254 -352Q234 -343 212.0 -337.0Q190 -331 177 -329Q190 -327 212.0 -321.5Q234 -316 254 -307L530 -186ZM896 10Q821 10 766.5 -15.5Q712 -41 682.0 -88.5Q652 -136 652 -200H802Q802 -160 826.5 -137.5Q851 -115 896 -115Q942 -115 966.0 -137.0Q990 -159 990 -200V-260Q990 -301 965.5 -323.5Q941 -346 896 -346H810V-475L957 -605H687V-730H1110V-601L896 -412V-473Q1009 -473 1074.5 -416.0Q1140 -359 1140 -261V-200Q1140 -136 1110.5 -88.5Q1081 -41 1026.0 -15.5Q971 10 896 10Z";

/** The CodeHeart "<3" mark. Purely decorative; pair it with visible or aria-labelled brand text. */
const LogoMark = ({ size = DEFAULT_SIZE, tone = "coral", className }: LogoMarkProps) => (
  <svg
    aria-hidden="true"
    className={cx(styles.logoMark, toneClassNames[tone], className)}
    style={{ width: size }}
    viewBox="50 -750 1110 780"
  >
    <path d={LOGO_PATH} />
  </svg>
);

export default LogoMark;
