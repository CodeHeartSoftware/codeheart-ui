import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./WhoWeAreSection.module.css";

/** Title on the left, the founding story on the right, aligned along their bottom edges. */
const WhoWeAreSection = () => (
  <Reveal as="section" from="right" className={cx("shell", styles.section)}>
    <div>
      <SectionKicker>{HowWeWorkStrings.whoWeAre.KICKER}</SectionKicker>
      <SectionTitle className={styles.title}>{HowWeWorkStrings.whoWeAre.TITLE}</SectionTitle>
    </div>
    <div className={styles.copy}>
      <p className={styles.lead}>{HowWeWorkStrings.whoWeAre.LEAD}</p>
      <p>{HowWeWorkStrings.whoWeAre.BODY}</p>
    </div>
  </Reveal>
);

export default WhoWeAreSection;
