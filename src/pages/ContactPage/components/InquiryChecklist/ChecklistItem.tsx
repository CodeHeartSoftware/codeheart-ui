import styles from "./ChecklistItem.module.css";

type ChecklistItemProps = {
  text: string;
};

const ChecklistItem = ({ text }: ChecklistItemProps) => (
  <li className={styles.item}>
    <span className={styles.check} aria-hidden="true" />
    {text}
  </li>
);

export default ChecklistItem;
