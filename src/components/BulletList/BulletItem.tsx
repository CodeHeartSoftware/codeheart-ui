import styles from "./BulletItem.module.css";

type BulletItemProps = {
  text: string;
};

const BulletItem = ({ text }: BulletItemProps) => <li className={styles.item}>{text}</li>;

export default BulletItem;
