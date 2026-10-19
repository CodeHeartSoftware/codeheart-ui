import styles from "./PaperGrain.module.css";

/**
 * A fine paper-grain texture, plus any glows the section passes in `--paper-glows` (a list of
 * gradients), that fills its section and fades out toward the bottom, so it blends into the next
 * section. The section must be positioned and set `isolation: isolate`, so this sits above its
 * background but beneath its content.
 */
const PaperGrain = () => (
  <div className={styles.paper} aria-hidden="true">
    <div className={styles.glows} />
    <div className={styles.grain} />
  </div>
);

export default PaperGrain;
