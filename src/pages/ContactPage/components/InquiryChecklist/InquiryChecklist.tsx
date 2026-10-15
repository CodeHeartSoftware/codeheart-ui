import Reveal from "@/components/Reveal/Reveal";
import SectionKicker from "@/components/SectionKicker/SectionKicker";
import { INQUIRY_CHECKLIST } from "@/constants/content";
import { ContactStrings } from "@/constants/strings";
import ChecklistItem from "./ChecklistItem";
import styles from "./InquiryChecklist.module.css";

const InquiryChecklist = () => (
  <Reveal as="section" from="left">
    <SectionKicker>{ContactStrings.include.KICKER}</SectionKicker>
    <h2 className={styles.title}>{ContactStrings.include.TITLE}</h2>
    <ul className={styles.list}>
      {INQUIRY_CHECKLIST.map((item) => (
        <ChecklistItem key={item} text={item} />
      ))}
    </ul>
  </Reveal>
);

export default InquiryChecklist;
