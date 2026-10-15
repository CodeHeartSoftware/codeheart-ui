import BulletList from "@/components/BulletList/BulletList";
import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import { Routes } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import type { Service } from "@/types/content";
import { cx } from "@/utils/classNames";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: Service;
  index: number;
};

const ServiceCard = ({ service, index }: ServiceCardProps) => (
  <article className={cx(styles.card, service.isFeatured && styles.featured)}>
    <div className={styles.meta}>
      <span>{formatIndexNumber(index)}</span>
      <span>{service.kicker}</span>
    </div>
    <h3 className={styles.title}>{service.title}</h3>
    <p className={styles.summary}>{service.summary}</p>
    <BulletList items={service.details} className={styles.details} />
    <div className={styles.idealFor}>
      <span className={styles.idealForLabel}>{HomeStrings.services.IDEAL_FOR_LABEL}</span>
      <p>{service.idealFor}</p>
    </div>
    <UnderlineLink to={Routes.CONTACT} className={styles.cta}>
      {service.ctaLabel}
    </UnderlineLink>
  </article>
);

export default ServiceCard;
