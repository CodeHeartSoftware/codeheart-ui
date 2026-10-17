import type { Service } from "@/types/content";

/** The card open on top of the services stack when nothing is hovered or chosen: the flagship, else the first. */
export const getDefaultServiceId = (services: Service[]): string =>
  (services.find((service) => service.isFeatured) ?? services[0])?.id ?? "";

export const buildServiceSpineId = (serviceId: string): string => `service-spine-${serviceId}`;

export const buildServicePanelId = (serviceId: string): string => `service-panel-${serviceId}`;
