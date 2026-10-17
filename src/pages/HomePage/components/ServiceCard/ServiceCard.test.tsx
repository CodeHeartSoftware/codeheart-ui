import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SERVICES } from "@/constants/content";
import { renderWithRouter } from "@/test/renderWithRouter";
import ServiceCard from "./ServiceCard";

const rescue = SERVICES.find((service) => service.process)!;
const plainService = SERVICES.find((service) => !service.process && !service.isFeatured)!;

const renderCard = (service = rescue, isActive = false) => {
  const onHover = vi.fn();
  const onSelect = vi.fn();
  renderWithRouter(<ServiceCard service={service} index={3} isActive={isActive} onHover={onHover} onSelect={onSelect} />);
  return { onHover, onSelect };
};

describe("ServiceCard", () => {
  it("labels its spine with the one-word summary and the full title", () => {
    renderCard();

    expect(screen.getByRole("button", { name: `${rescue.kicker}: ${rescue.title}` })).toHaveAttribute("aria-expanded", "false");
  });

  it("marks the spine expanded and opens the panel when active", () => {
    renderCard(rescue, true);

    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("article")).toHaveClass("active");
  });

  it("asks to open when its spine is clicked", () => {
    const { onSelect } = renderCard();

    fireEvent.click(screen.getByRole("button"));

    expect(onSelect).toHaveBeenCalledWith(rescue.id, screen.getByRole("article"));
  });

  it("shows the engagement path when the service has one", () => {
    renderCard();

    expect(screen.getByText(rescue.process!.label)).toBeInTheDocument();
    rescue.process!.steps.forEach((step) => expect(screen.getByText(step)).toBeInTheDocument());
  });

  it("leaves the engagement path out otherwise", () => {
    renderCard(plainService);

    expect(screen.queryByText(rescue.process!.label)).not.toBeInTheDocument();
  });
});
