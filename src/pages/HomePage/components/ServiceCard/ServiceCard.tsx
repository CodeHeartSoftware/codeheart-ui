import BulletList from "@/components/BulletList/BulletList";
import UnderlineLink from "@/components/UnderlineLink/UnderlineLink";
import { Routes } from "@/constants/routes";
import { HomeStrings } from "@/constants/strings";
import type { Service } from "@/types/content";
import { cx } from "@/utils/classNames";
import { formatIndexNumber } from "@/utils/formatIndexNumber";
import { buildServicePanelId, buildServiceSpineId } from "@/utils/serviceStack";
import ServiceProcess from "./ServiceProcess";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: Service;
  index: number;
  isActive: boolean;
  onHover: (serviceId: string, pointerType: string) => void;
  onSelect: (serviceId: string, card: HTMLElement | null) => void;
};

const ServiceCard = ({ service, index, isActive, onHover, onSelect }: ServiceCardProps) => (
  <article
    className={cx(styles.card, isActive && styles.active)}
    onPointerEnter={(event) => onHover(service.id, event.pointerType)}
  >
    <h3 className={styles.heading}>
      <button
        type="button"
        id={buildServiceSpineId(service.id)}
        className={styles.spine}
        aria-expanded={isActive}
        aria-controls={buildServicePanelId(service.id)}
        aria-label={HomeStrings.services.spineLabel(service.kicker, service.title)}
        onClick={(event) => onSelect(service.id, event.currentTarget.closest("article"))}
      >
        <span className={styles.spineIndex}>{formatIndexNumber(index)}</span>
        <span className={styles.spineWord}>{service.kicker}</span>
        <span className={styles.spineTitle}>{service.title}</span>
      </button>
    </h3>
    <div id={buildServicePanelId(service.id)} className={styles.panel}>
      <div className={styles.intro}>
        <p className={styles.title}>{service.title}</p>
        <p className={styles.headline}>{service.headline}</p>
        <p className={styles.summary}>{service.summary}</p>
        {service.process && <ServiceProcess process={service.process} />}
      </div>
      <div className={styles.specifics}>
        <BulletList items={service.details} className={styles.details} />
        <div className={styles.idealFor}>
          <span className={styles.idealForLabel}>{HomeStrings.services.IDEAL_FOR_LABEL}</span>
          <p>{service.idealFor}</p>
        </div>
        <UnderlineLink to={Routes.CONTACT} className={styles.cta}>
          {service.ctaLabel}
        </UnderlineLink>
      </div>
    </div>
  </article>
);

export default ServiceCard;
