import { cx } from "@/utils/classNames";
import BulletItem from "./BulletItem";
import styles from "./BulletList.module.css";

type BulletListProps = {
  items: string[];
  className?: string;
};

/** A compact list with coral markers, used for service details, process steps, and the like. */
const BulletList = ({ items, className }: BulletListProps) => (
  <ul className={cx(styles.list, className)}>
    {items.map((item) => (
      <BulletItem key={item} text={item} />
    ))}
  </ul>
);

export default BulletList;
